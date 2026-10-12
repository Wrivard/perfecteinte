import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import assert from "node:assert/strict";
import test from "node:test";

const html = readFileSync("artifacts/web/index.html", "utf8");
const source = html.match(/<script id="consent-bootstrap"[^>]*>([\s\S]*?)<\/script>/)[1];

function simulate(hostname) {
  const scripts = [];
  const events = {};
  const warnings = [];
  const document = {
    getElementById: id => scripts.find(script => script.id === id) || null,
    createElement: () => ({ attrs: {}, setAttribute(key, value) { this.attrs[key] = value; } }),
    head: { appendChild: script => scripts.push(script) },
    getElementsByTagName: () => [{ parentNode: { insertBefore: script => scripts.push(script) } }],
  };
  const window = { location: { hostname }, addEventListener: (name, fn) => { events[name] = fn; } };
  const context = { window, document, console: { warn: message => warnings.push(message) } };
  runInNewContext(source, context);
  return { scripts, window, events, warnings, context };
}

test("localhost, loopback and Replit do not load either vendor", () => {
  for (const host of ["localhost", "127.0.0.1", "[::1]", "::1", "web.localhost", "project.replit.dev", "project.replit.app", "project.replit.com"]) {
    const result = simulate(host);
    assert.equal(result.scripts.length, 0, host);
    assert.equal(result.window.dataLayer, undefined, host);
  }
  assert.ok(!html.includes('<iframe src="https://www.googletagmanager.com/ns.html'));
});

test("production initializes denied consent, then Cookiebot, then the correct GTM container", () => {
  for (const host of ["perfecteinte.ca", "www.perfecteinte.ca"]) {
    const { scripts, window, events, context } = simulate(host);
    const defaultConsent = window.dataLayer[0];
    assert.equal(defaultConsent[0], "consent");
    assert.equal(defaultConsent[1], "default");
    for (const key of ["ad_storage", "analytics_storage", "ad_user_data", "ad_personalization", "functionality_storage", "personalization_storage"]) {
      assert.equal(defaultConsent[2][key], "denied");
    }
    assert.equal(defaultConsent[2].security_storage, "granted");
    assert.equal(scripts.length, 1);
    const cb = scripts[0];
    assert.equal(cb.attrs["data-cbid"], "3f23d63b-1705-47a8-8bdf-5bdfff52e7fe");
    assert.equal(cb.attrs["data-blockingmode"], "auto");
    assert.equal(cb.async, false);
    assert.equal(cb.attrs["data-culture"], "FR");
    cb.onload();
    assert.equal(scripts.length, 2);
    assert.equal(scripts[1].src, "https://www.googletagmanager.com/gtm.js?id=GTM-TVBSB2PS");
    events.CookiebotOnConsentReady();
    assert.equal(window.dataLayer.at(-1).event, "cookie_consent_update");
    runInNewContext(source, context);
    assert.equal(scripts.length, 2, "no duplicate initialization");
  }
});

test("a Cookiebot network failure leaves GTM disabled without crashing the app", () => {
  const { scripts, warnings } = simulate("perfecteinte.ca");
  assert.doesNotThrow(() => scripts[0].onerror());
  assert.equal(scripts.length, 1);
  assert.equal(warnings.length, 1);
});
