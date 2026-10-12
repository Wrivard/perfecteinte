import { createRequire } from "node:module";
import { resolve, join } from "node:path";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { pathToFileURL, fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import assert from "node:assert/strict";
import test from "node:test";

test("Vercel can package and load the quote handler without sending emails", async () => {
  const require = createRequire(import.meta.url);
  const { build } = require("@vercel/node");
  const { FileFsRef, download } = createRequire(require.resolve("@vercel/node"))("@vercel/build-utils");
  const files = {
    "api/contact.ts": await FileFsRef.fromFsPath({ fsPath: resolve("api/contact.ts") }),
  };
  const result = await build({
    files,
    entrypoint: "api/contact.ts",
    workPath: process.cwd(),
    // Reuse installed dependencies; no cloud credentials or network install.
    meta: { isDev: true },
    config: { zeroConfig: true, projectSettings: { nodeVersion: "22.x" } },
  });
  const temp = await mkdtemp(join(tmpdir(), "vercel-quote-test-"));
  try {
    await download(result.output.files, temp);
    const module = await import(pathToFileURL(join(temp, "api/contact.js")));
    const handler = typeof module.default === "function" ? module.default : module.default.default;
    assert.equal(typeof handler, "function");

    // Invalid requests cannot reach the email provider, even if credentials exist.
    for (const [request, expected] of [
      [{ method: "GET" }, 405],
      [{ method: "POST", body: {} }, 400],
    ]) {
      const response = {
        code: 0,
        setHeader() {},
        status(code) { this.code = code; return this; },
        json(body) { this.body = body; },
      };
      await handler(request, response);
      assert.equal(response.code, expected);
    }

    // Exercise the actual packaged handler in an isolated environment. The
    // child has only fake email credentials and replaces every fetch call.
    execFileSync(process.execPath, [
      "--no-experimental-detect-module",
      fileURLToPath(new URL("./fixtures/verify-packaged-handler.mjs", import.meta.url)),
      join(temp, "api/contact.js"),
    ], {
      env: {
        RESEND_API_KEY: "test-key-not-a-real-credential",
        RESEND_FROM_EMAIL: "bonjour@kua.quebec",
        RECIPIENT_EMAIL: "owner@example.com",
      },
      timeout: 15000,
      stdio: "pipe",
    });
  } finally {
    await rm(temp, { recursive: true, force: true });
  }
});
