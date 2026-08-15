import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the current analytics portfolio and Copilot module", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Portafolio de Ejercicios de Analítica y Ciencia de Datos<\/title>/i);
  assert.match(html, /Data Analytics I/);
  assert.match(html, /Data Analytics II/);
  assert.match(html, /Software y herramientas/);
  assert.match(html, /Microsoft 365 Copilot/);
  assert.match(html, /https:\/\/microsoft-365-copilot-guia-practica\.juanb\.chatgpt\.site/);
  assert.doesNotMatch(html, /Los notebooks se abren en Google Colab desde GitHub/);
});

test("keeps GitHub and Copilot links configured in source", async () => {
  const [page, portfolioData] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/portfolio-data.ts", import.meta.url), "utf8"),
  ]);

  assert.match(page, /JuanBaldemarG\/portafoliocolabJBGV/);
  assert.match(portfolioData, /title: "Microsoft 365 Copilot"/);
  assert.match(portfolioData, /https:\/\/microsoft-365-copilot-guia-practica\.juanb\.chatgpt\.site/);
});
