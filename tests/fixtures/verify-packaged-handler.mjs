import assert from "node:assert/strict";
import { pathToFileURL } from "node:url";

let sent = [];
let providerFails = false;
globalThis.fetch = async (url, options) => {
  assert.equal(String(url), "https://api.resend.com/emails/batch");
  assert.equal(options.method, "POST");
  sent = JSON.parse(String(options.body));
  return new Response(JSON.stringify(providerFails
    ? { name: "validation_error", message: "Mocked provider rejection" }
    : { data: [{ id: "mock-owner" }, { id: "mock-client" }] }), {
    status: providerFails ? 422 : 200,
    headers: { "Content-Type": "application/json" },
  });
};

const module = await import(pathToFileURL(process.argv[2]));
const handler = typeof module.default === "function" ? module.default : module.default.default;
const body = {
  services: ["ppf", "teintage"],
  vehicleMake: "Toyota",
  vehicleModel: "Corolla",
  vehicleYear: "2026",
  firstName: "Test",
  lastName: "Client",
  phone: "4185550100",
  email: "customer@example.com",
  message: "Test de soumission",
};

async function submit() {
  const response = {
    setHeader() {},
    status(code) { this.code = code; return this; },
    json(body) { this.body = body; },
  };
  await handler({ method: "POST", body }, response);
  return response;
}

const success = await submit();
assert.equal(success.code, 200);
assert.equal(success.body.ok, true);
assert.match(success.body.message, /24 à 48 heures/);
assert.equal(sent.length, 2);
assert.deepEqual(sent[0].to, ["owner@example.com"]);
assert.deepEqual(sent[1].to, ["customer@example.com"]);
assert.equal(sent[0].from, "Perfecteinte <bonjour@kua.quebec>");
assert.equal(sent[1].from, sent[0].from);

providerFails = true;
assert.equal((await submit()).code, 502);

// These are fake credentials in this isolated process, not workspace secrets.
delete process.env.RESEND_API_KEY;
const unconfigured = await submit();
assert.equal(unconfigured.code, 503);
assert.match(unconfigured.body.error, /temporairement indisponible/);
