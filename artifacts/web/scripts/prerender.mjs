import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { pathToFileURL } from "node:url";

const BASE_URL = "https://esthetiqueautopascalpilote.com";
const BASE_TITLE = "Esthétique Auto Pascal Pilote";

const pages = [
  {
    path: "/",
    title: `${BASE_TITLE} | Détailing à La Malbaie`,
    description:
      "Services professionnels d'esthétique automobile à La Malbaie, Charlevoix. Lavage de luxe, PPF, polissage, nano-céramique. Prenez rendez-vous au (418) 665-5871.",
    breadcrumb: [{ name: "Accueil", path: "/" }],
  },
  {
    path: "/a-propos",
    title: `À propos | ${BASE_TITLE}`,
    description:
      "Découvrez l'histoire et les valeurs d'Esthétique Auto Pascal Pilote, spécialiste du détailing automobile à La Malbaie depuis plus de 10 ans.",
    breadcrumb: [
      { name: "Accueil", path: "/" },
      { name: "À propos", path: "/a-propos" },
    ],
  },
  {
    path: "/services",
    title: `Nos services | ${BASE_TITLE}`,
    description:
      "Lavage, scellant, polissage, nano-céramique et installation de pare-pierre (PPF). Découvrez tous nos services d'esthétique automobile à La Malbaie.",
    breadcrumb: [
      { name: "Accueil", path: "/" },
      { name: "Services", path: "/services" },
    ],
  },
  {
    path: "/services/lavage",
    title: `Lavage automobile & entretien de luxe | ${BASE_TITLE}`,
    description:
      "Service de lavage automobile intérieur, extérieur et décontamination à La Malbaie. Lavage à la main avec produits professionnels haut de gamme.",
    service: {
      name: "Lavage automobile & entretien de luxe",
      description:
        "Lavage intérieur, extérieur et décontamination automobile haut de gamme à La Malbaie.",
      serviceType: "Lavage automobile",
    },
    breadcrumb: [
      { name: "Accueil", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Lavage", path: "/services/lavage" },
    ],
  },
  {
    path: "/services/scellant",
    title: `Scellant & polissage | ${BASE_TITLE}`,
    description:
      "Cires, scellant peinture et polissage professionnel à La Malbaie. Correction des imperfections et protection durable de la peinture de votre véhicule.",
    service: {
      name: "Scellant & polissage automobile",
      description:
        "Polissage professionnel et application de scellant pour protéger et raviver la peinture.",
      serviceType: "Polissage et scellant peinture",
    },
    breadcrumb: [
      { name: "Accueil", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Scellant", path: "/services/scellant" },
    ],
  },
  {
    path: "/services/nano-ceramique",
    title: `Nanocéramique & PPF | ${BASE_TITLE}`,
    description:
      "Polissage, nano-céramique et installation de pare-pierre (PPF) à La Malbaie. Protection maximale et durable pour la peinture de votre véhicule.",
    service: {
      name: "Nano-céramique & pare-pierre (PPF)",
      description:
        "Application de revêtement nano-céramique et installation de pare-pierre PPF pour une protection ultime de la peinture.",
      serviceType: "Protection de peinture (céramique et PPF)",
    },
    breadcrumb: [
      { name: "Accueil", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Nano-céramique & PPF", path: "/services/nano-ceramique" },
    ],
  },
  {
    path: "/galerie",
    title: `Galerie photos — Détailing | ${BASE_TITLE}`,
    description:
      "Découvrez nos réalisations en esthétique automobile. Photos avant/après de nos services de lavage, PPF, polissage et nano-céramique à La Malbaie.",
    breadcrumb: [
      { name: "Accueil", path: "/" },
      { name: "Galerie", path: "/galerie" },
    ],
  },
  {
    path: "/rendez-vous",
    title: `Prendre un rendez-vous | ${BASE_TITLE}`,
    description:
      "Obtenez une soumission pour votre esthétique automobile chez Esthétique Auto Pascal Pilote à La Malbaie. Remplissez notre formulaire en ligne.",
    breadcrumb: [
      { name: "Accueil", path: "/" },
      { name: "Rendez-vous", path: "/rendez-vous" },
    ],
  },
  {
    path: "/politique-de-confidentialite",
    title: `Politique de confidentialité | ${BASE_TITLE}`,
    description:
      "Politique de confidentialité et de témoins (cookies) d'Esthétique Auto Pascal Pilote, conforme à la Loi 25 du Québec.",
    breadcrumb: [
      { name: "Accueil", path: "/" },
      { name: "Politique de confidentialité", path: "/politique-de-confidentialite" },
    ],
  },
];

function canonicalUrl(p) {
  return p === "/" ? `${BASE_URL}/` : `${BASE_URL}${p}`;
}

function escapeAttr(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function replaceMetaContent(html, selector, value, attr = "content") {
  const escaped = selector.replace(/[[\]"]/g, "\\$&");
  const regex = new RegExp(`(<(?:meta|link)[^>]*${escaped}[^>]*${attr}=")([^"]*)(")`);
  return html.replace(regex, `$1${escapeAttr(value)}$3`);
}

function buildSchemas(page) {
  const schemas = [];

  if (page.breadcrumb && page.breadcrumb.length > 1) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: page.breadcrumb.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: canonicalUrl(b.path),
      })),
    });
  }

  if (page.service) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.service.name,
      description: page.service.description,
      serviceType: page.service.serviceType,
      url: canonicalUrl(page.path),
      provider: {
        "@type": "AutoRepair",
        name: "Esthétique Auto Pascal Pilote Inc.",
        url: BASE_URL,
        telephone: "+1-418-665-5871",
        address: {
          "@type": "PostalAddress",
          streetAddress: "2535 boulevard Comporté",
          addressLocality: "La Malbaie",
          addressRegion: "QC",
          addressCountry: "CA",
        },
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Charlevoix, Québec",
      },
    });
  }

  return schemas
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join("\n    ");
}

async function loadRender() {
  const ssrEntry = join(process.cwd(), "dist", "server", "entry-server.js");
  if (!existsSync(ssrEntry)) {
    throw new Error(`SSR bundle not found at ${ssrEntry}. Run \`vite build --ssr src/entry-server.tsx --outDir dist/server\` first.`);
  }
  const mod = await import(pathToFileURL(ssrEntry).href);
  if (typeof mod.render !== "function") {
    throw new Error("entry-server.js does not export a `render` function");
  }
  return mod.render;
}

async function main() {
  const outDir = join(process.cwd(), "dist", "public");
  const indexPath = join(outDir, "index.html");

  if (!existsSync(indexPath)) {
    throw new Error(`Client build not found at ${indexPath}. Run \`vite build\` first.`);
  }

  const baseHtml = readFileSync(indexPath, "utf-8");
  const render = await loadRender();

  let total = 0;

  for (const page of pages) {
    const canonical = canonicalUrl(page.path);
    const appHtml = render(page.path);
    const schemasHtml = buildSchemas(page);

    let html = baseHtml;

    html = html.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`);
    html = replaceMetaContent(html, 'name="description"', page.description);
    html = replaceMetaContent(html, 'rel="canonical"', canonical, "href");
    html = html.replace(
      /<link rel="alternate" hreflang="fr-CA"[^>]*>/,
      `<link rel="alternate" hreflang="fr-CA" href="${canonical}" />`,
    );
    html = html.replace(
      /<link rel="alternate" hreflang="x-default"[^>]*>/,
      `<link rel="alternate" hreflang="x-default" href="${canonical}" />`,
    );
    html = replaceMetaContent(html, 'property="og:title"', page.title);
    html = replaceMetaContent(html, 'property="og:description"', page.description);
    html = replaceMetaContent(html, 'property="og:url"', canonical);
    html = replaceMetaContent(html, 'name="twitter:title"', page.title);
    html = replaceMetaContent(html, 'name="twitter:description"', page.description);

    if (schemasHtml) {
      html = html.replace("</head>", `    ${schemasHtml}\n  </head>`);
    }

    html = html.replace(
      /<div id="root"><\/div>/,
      `<div id="root">${appHtml}</div>`,
    );

    const routePath = page.path === "/" ? "" : page.path.replace(/^\//, "");
    const filePath = page.path === "/"
      ? indexPath
      : join(outDir, routePath, "index.html");

    const fileDir = dirname(filePath);
    if (!existsSync(fileDir)) mkdirSync(fileDir, { recursive: true });
    writeFileSync(filePath, html, "utf-8");
    total += 1;
  }

  console.log(`[prerender] Wrote ${total} pre-rendered HTML files (full SSG with React content + per-page meta + schemas)`);

  const today = new Date().toISOString().slice(0, 10);
  const sitemapEntries = pages
    .map((p) => {
      const loc = canonicalUrl(p.path);
      const priority = p.path === "/" ? "1.0" : p.path.startsWith("/services") ? "0.9" : p.path === "/rendez-vous" ? "0.9" : p.path === "/politique-de-confidentialite" ? "0.3" : "0.8";
      const changefreq = p.path === "/" ? "weekly" : p.path === "/politique-de-confidentialite" ? "yearly" : "monthly";
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;
  writeFileSync(join(outDir, "sitemap.xml"), sitemap, "utf-8");
  console.log(`[prerender] Wrote dynamic sitemap.xml with lastmod=${today}`);
}

main().catch((err) => {
  console.error("[prerender] Failed:", err);
  process.exit(1);
});
