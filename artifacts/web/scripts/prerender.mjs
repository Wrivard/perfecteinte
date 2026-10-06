import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { pathToFileURL } from "node:url";

const BASE_URL = "https://perfecteinte.ca";
const BASE_TITLE = "Perfecteinte";

const pages = [
  {
    path: "/",
    title: `${BASE_TITLE} | PPF et vitres teintées à Alma`,
    description:
      "PPF pare-pierre et vitres teintées à Alma pour tous les véhicules, des voitures du quotidien aux sportives et exotiques. Appelez le (418) 450-3990.",
    breadcrumb: [{ name: "Accueil", path: "/" }],
  },
  {
    path: "/a-propos",
    title: `À propos | ${BASE_TITLE}`,
    description:
      "Découvrez Frédéric Goderre : 31 ans d’expérience et plus de 50 000 jobs réalisés en PPF et vitres teintées chez Perfecteinte à Alma.",
    breadcrumb: [
      { name: "Accueil", path: "/" },
      { name: "À propos", path: "/a-propos" },
    ],
  },
  {
    path: "/services",
    title: `Nos services | ${BASE_TITLE}`,
    description:
      "Deux services de protection automobile à Alma : PPF (pellicule pare-pierre) et vitres teintées. Tous les types de véhicules sont les bienvenus.",
    breadcrumb: [
      { name: "Accueil", path: "/" },
      { name: "Services", path: "/services" },
    ],
  },
  {
    path: "/services/ppf",
    title: `PPF — Pellicule pare-pierre | ${BASE_TITLE}`,
    description:
      "Pose de pellicule pare-pierre (PPF) à Alma pour tous les véhicules, des voitures du quotidien aux sportives et exotiques.",
    service: {
      name: "PPF — Pellicule pare-pierre",
      description:
        "Pellicule pare-pierre installée pour aider à protéger la peinture contre les éclats et les débris routiers.",
      serviceType: "Protection de peinture PPF",
    },
    breadcrumb: [
      { name: "Accueil", path: "/" },
      { name: "Services", path: "/services" },
      { name: "PPF — Pare-pierre", path: "/services/ppf" },
    ],
  },
  {
    path: "/services/vitres-teintees",
    title: `Vitres teintées | ${BASE_TITLE}`,
    description:
      "Service de vitres teintées à Alma pour tous les véhicules, des voitures du quotidien aux sportives et exotiques.",
    service: {
      name: "Vitres teintées",
      description:
        "Installation de pellicule teintée automobile pour le confort, l’intimité et le style.",
      serviceType: "Vitres teintées automobiles",
    },
    breadcrumb: [
      { name: "Accueil", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Vitres teintées", path: "/services/vitres-teintees" },
    ],
  },
  {
    path: "/galerie",
    title: `Réalisations PPF et vitres teintées | ${BASE_TITLE}`,
    description:
      "Découvrez les réalisations Perfecteinte en PPF pare-pierre et en vitres teintées à Alma.",
    breadcrumb: [
      { name: "Accueil", path: "/" },
      { name: "Galerie", path: "/galerie" },
    ],
  },
  {
    path: "/rendez-vous",
    title: `Soumission PPF et vitres teintées | ${BASE_TITLE}`,
    description:
      "Demandez une soumission pour le PPF ou les vitres teintées chez Perfecteinte à Alma. Tous les types de véhicules sont acceptés.",
    breadcrumb: [
      { name: "Accueil", path: "/" },
      { name: "Obtenir une soumission", path: "/rendez-vous" },
    ],
  },
  {
    path: "/politique-de-confidentialite",
    title: `Politique de confidentialité | ${BASE_TITLE}`,
    description:
      "Politique de confidentialité et de témoins (cookies) de Perfecteinte, conforme à la Loi 25 du Québec.",
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
        "@type": "AutoBodyShop",
        name: BASE_TITLE,
        url: BASE_URL,
        telephone: "+1-418-450-3990",
        email: "Perfecteinte@hotmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1950 Boulevard St-Jude",
          addressLocality: "Alma",
          addressRegion: "QC",
          addressCountry: "CA",
        },
      },
      areaServed: "Alma, Québec",
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
