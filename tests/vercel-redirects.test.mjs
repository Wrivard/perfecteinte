import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

test("Vercel project settings own canonical-domain redirects", async () => {
  const config = JSON.parse(await readFile(new URL("../vercel.json", import.meta.url), "utf8"));
  // The Vercel project redirects the apex domain to www. A reverse redirect
  // here would send stylesheet, script and image requests into a domain loop.
  const reverseRedirect = (config.redirects ?? []).some((redirect) =>
    redirect.has?.some((condition) =>
      condition.type === "host" && condition.value === "www.perfecteinte.ca"
    ) && redirect.destination?.startsWith("https://perfecteinte.ca/")
  );
  assert.equal(reverseRedirect, false, "Do not reverse Vercel's apex-to-www redirect");
});
