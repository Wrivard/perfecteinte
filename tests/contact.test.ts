import assert from "node:assert/strict";
import { test } from "node:test";
import handler from "../api/contact";
import { QuoteEmailError, submitQuoteRequest } from "../artifacts/api-server/src/lib/quote-email";

const request = {
  services: ["ppf", "teintage"],
  vehicleMake: "Toyota",
  vehicleModel: "Corolla",
  vehicleYear: "2026",
  firstName: "Test",
  lastName: "Soumission",
  phone: "4185550123",
  email: "delivered@resend.dev",
  message: "<script>alert('test')</script>",
};
const config = {
  apiKey: "test-key-not-a-real-credential",
  fromEmail: "bonjour@kua.quebec",
  recipientEmail: "owner@example.com",
};

test("Resend quote integration (mocked network, no emails sent)", async (t) => {
  const fetchOriginal = globalThis.fetch;
  t.after(() => { globalThis.fetch = fetchOriginal; });
  let payload: Array<Record<string, unknown>> = [];
  let calls = 0;
  let result: unknown = { data: [{ id: "owner-id" }, { id: "client-id" }] };
  let status = 200;
  let networkError = false;
  globalThis.fetch = async (url, options) => {
    calls++;
    assert.equal(String(url), "https://api.resend.com/emails/batch");
    assert.equal(options?.method, "POST");
    assert.equal(new Headers(options?.headers).get("Authorization"), `Bearer ${config.apiKey}`);
    payload = JSON.parse(String(options?.body));
    if (networkError) throw new Error("Mock network failure");
    return new Response(JSON.stringify(result), { status, headers: { "Content-Type": "application/json" } });
  };
  const expectStatus = (expected: number) => (error: unknown) =>
    error instanceof QuoteEmailError && error.status === expected;

  await t.test("sends both templates to separate recipients with correct replies and escaping", async () => {
    const response = await submitQuoteRequest(request, config);
    assert.equal(response.ok, true);
    assert.match(response.message, /24 à 48 heures/);
    assert.equal(calls, 1);
    assert.equal(payload.length, 2);
    const [owner, customer] = payload;
    assert.equal(owner.from, "Perfecteinte <bonjour@kua.quebec>");
    assert.equal(customer.from, owner.from);
    assert.deepEqual(owner.to, [config.recipientEmail]);
    assert.deepEqual(customer.to, [request.email]);
    assert.equal(owner.reply_to, request.email);
    assert.equal(customer.reply_to, config.recipientEmail);
    assert.match(String(owner.html), /&lt;script&gt;/);
    assert.doesNotMatch(String(owner.html), /<script>/);
    assert.match(String(owner.text), /Toyota Corolla/);
    assert.match(String(owner.text), /PPF — Pellicule pare-pierre, Vitres teintées/);
    assert.match(String(customer.html), /24 à 48 heures/);
    assert.match(String(customer.text), /24 à 48 heures/);
    for (const email of [owner, customer]) {
      assert.match(String(email.html), /#f57b00/);
      assert.match(String(email.html), /Récapitulatif de la demande/);
      assert.match(String(email.html), /href="https:\/\/perfecteinte\.ca\/"/);
      assert.match(String(email.html), /<img src="https:\/\/perfecteinte-lac\.vercel\.app\/perfecteinte-logo-email\.png"/);
      assert.match(String(email.html), /alt="Perfecteinte — Vitres teintées et pare-pierre"/);
      assert.doesNotMatch(String(email.html), /Perfec<span/);
      assert.match(String(email.text), /https:\/\/perfecteinte\.ca\//);
      assert.match(String(email.text), /Toyota Corolla/);
      assert.match(String(email.text), /delivered@resend.dev/);
      assert.match(String(email.text), /4185550123/);
      assert.match(String(email.html), /&lt;script&gt;/);
      assert.doesNotMatch(String(email.html), /<script>/);
    }
    assert.match(String(customer.html), /prise en charge/);
    assert.match(String(owner.html), /mailto:delivered%40resend.dev/);
    assert.match(String(owner.html), /tel:\+14185550123/);
  });

  await t.test("requires all three variables, the prescribed sender and a valid recipient", async () => {
    const before = calls;
    for (const missing of ["apiKey", "fromEmail", "recipientEmail"] as const) {
      await assert.rejects(submitQuoteRequest(request, { ...config, [missing]: "" }), expectStatus(503));
    }
    await assert.rejects(submitQuoteRequest(request, { ...config, fromEmail: "other@example.com" }), expectStatus(503));
    await assert.rejects(submitQuoteRequest(request, { ...config, recipientEmail: "invalid" }), expectStatus(503));
    assert.equal(calls, before);
  });

  await t.test("rejects invalid, unsupported and duplicate services before sending", async () => {
    const before = calls;
    await assert.rejects(submitQuoteRequest({}, config), expectStatus(400));
    await assert.rejects(submitQuoteRequest({ ...request, services: ["ceramique"] }, config), expectStatus(400));
    await assert.rejects(submitQuoteRequest({ ...request, services: ["ppf", "ppf"] }, config), expectStatus(400));
    assert.equal(calls, before);
  });

  await t.test("surfaces provider errors, incomplete responses and network failure", async () => {
    status = 403;
    result = { name: "validation_error", message: "Mock unverified sender" };
    await assert.rejects(submitQuoteRequest(request, config), expectStatus(502));
    status = 200;
    result = { data: [{ id: "only-one-message" }] };
    await assert.rejects(submitQuoteRequest(request, config), expectStatus(502));
    result = { data: [{}, {}] };
    await assert.rejects(submitQuoteRequest(request, config), expectStatus(502));
    networkError = true;
    await assert.rejects(submitQuoteRequest(request, config), expectStatus(502));
  });

  await t.test("Vercel function rejects GET and invalid POST requests", async () => {
    let responseStatus = 0;
    let body: unknown;
    const headers = new Map<string, string>();
    const response = {
      setHeader(name: string, value: string) { headers.set(name, value); },
      status(code: number) { responseStatus = code; return this; },
      json(value: unknown) { body = value; return this; },
    };
    await handler({ method: "GET" }, response);
    assert.equal(responseStatus, 405);
    assert.equal(headers.get("Allow"), "POST");
    await handler({ method: "POST", body: {} }, response);
    assert.equal(responseStatus, 400);
    assert.equal(typeof (body as { error: string }).error, "string");
  });
});
