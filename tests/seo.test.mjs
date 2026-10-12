import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const origin = "https://www.perfecteinte.ca";
const webFile = (path) => readFile(new URL(`../artifacts/web/${path}`, import.meta.url), "utf8");

test("sitemap pages match the submitted sitemap host and public routes", async () => {
  const sitemap = await webFile("public/sitemap.xml");
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(locations, [
    `${origin}/`,
    `${origin}/rendez-vous`,
    `${origin}/politique-de-confidentialite`,
  ]);
});

test("robots.txt advertises the direct sitemap URL", async () => {
  const robots = await webFile("public/robots.txt");
  assert.match(robots, /^Allow: \/$/m);
  assert.equal(robots.match(/^Sitemap: (.+)$/m)?.[1], `${origin}/sitemap.xml`);
});

test("build-time and browser metadata preserve the sitemap's canonical host", async () => {
  for (const path of ["scripts/prerender.mjs", "src/hooks/usePageMeta.ts", "index.html", "public/llms.txt"]) {
    const source = await webFile(path);
    assert.ok(source.includes(origin), `${path} must reference the canonical origin`);
    assert.doesNotMatch(source, /https:\/\/perfecteinte\.ca\b/, `${path} must not switch back to the redirecting host`);
  }
});
