import type { Plugin } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";

interface PageMeta {
  path: string;
  title: string;
  description: string;
  canonical: string;
}

const BASE_URL = "https://esthetiqueautopascalpilote.ca";
const BASE_TITLE = "Esthétique Auto Pascal Pilote";

const pages: PageMeta[] = [
  {
    path: "/",
    title: `${BASE_TITLE} | Détailing automobile à La Malbaie, Québec`,
    description: "Services professionnels d'esthétique automobile à La Malbaie, Charlevoix. Lavage de luxe, PPF, polissage, nano-céramique. Prenez rendez-vous au (418) 665-5871.",
    canonical: `${BASE_URL}/`,
  },
  {
    path: "/a-propos",
    title: `À propos | ${BASE_TITLE}`,
    description: "Découvrez l'histoire et les valeurs d'Esthétique Auto Pascal Pilote, spécialiste du détailing automobile à La Malbaie depuis plus de 10 ans.",
    canonical: `${BASE_URL}/a-propos`,
  },
  {
    path: "/services",
    title: `Nos services | ${BASE_TITLE}`,
    description: "Lavage de luxe, protection PPF, polissage, nano-céramique et service par Pierre. Découvrez tous nos services d'esthétique automobile à La Malbaie.",
    canonical: `${BASE_URL}/services`,
  },
  {
    path: "/services/lavage",
    title: `Lavage Auto & Entretien de Luxe | ${BASE_TITLE}`,
    description: "Service de lavage automobile complet et entretien esthétique de luxe à La Malbaie. Forfaits Essentiel, Premium et Luxe disponibles.",
    canonical: `${BASE_URL}/services/lavage`,
  },
  {
    path: "/services/ppf",
    title: `Protection de peinture PPF | ${BASE_TITLE}`,
    description: "Pellicule de protection de peinture (PPF) transparente et auto-cicatrisante à La Malbaie. Garantie jusqu'à 10 ans. Installation professionnelle.",
    canonical: `${BASE_URL}/services/ppf`,
  },
  {
    path: "/services/par-pierre",
    title: `Service Pare-Pierre | ${BASE_TITLE}`,
    description: "Service personnalisé de détailing par notre expert Pierre. Spécialiste en correction de peinture et finitions haut de gamme à La Malbaie.",
    canonical: `${BASE_URL}/services/par-pierre`,
  },
  {
    path: "/services/polissage",
    title: `Polissage & Nano-Céramique | ${BASE_TITLE}`,
    description: "Correction de peinture et revêtement nano-céramique pour une protection durable jusqu'à 5 ans. Service professionnel à La Malbaie, Charlevoix.",
    canonical: `${BASE_URL}/services/polissage`,
  },
  {
    path: "/galerie",
    title: `Galerie photos — Détailing automobile | ${BASE_TITLE}`,
    description: "Découvrez nos réalisations en esthétique automobile. Photos avant/après de nos services de lavage, PPF, polissage et nano-céramique à La Malbaie.",
    canonical: `${BASE_URL}/galerie`,
  },
  {
    path: "/rendez-vous",
    title: `Prendre un rendez-vous | ${BASE_TITLE}`,
    description: "Réservez votre rendez-vous d'esthétique automobile chez Esthétique Auto Pascal Pilote à La Malbaie. Appelez au (418) 665-5871.",
    canonical: `${BASE_URL}/rendez-vous`,
  },
  {
    path: "/politique-de-confidentialite",
    title: `Politique de confidentialité | ${BASE_TITLE}`,
    description: "Politique de confidentialité et de témoins (cookies) d'Esthétique Auto Pascal Pilote, conforme à la Loi 25 du Québec.",
    canonical: `${BASE_URL}/politique-de-confidentialite`,
  },
];

function replaceMetaContent(html: string, selector: string, value: string, attr = "content"): string {
  const regex = new RegExp(`(<(?:meta|link)[^>]*${selector.replace(/[[\]"]/g, '\\$&')}[^>]*${attr}=")([^"]*)(")`);
  return html.replace(regex, `$1${value}$3`);
}

export function seoPrerender(): Plugin {
  let resolvedOutDir = "";
  return {
    name: "seo-prerender",
    apply: "build",
    configResolved(config) {
      resolvedOutDir = config.build.outDir;
    },
    closeBundle() {
      const outDir = resolvedOutDir || join(process.cwd(), "dist", "public");
      const indexPath = join(outDir, "index.html");

      if (!existsSync(indexPath)) return;

      const baseHtml = readFileSync(indexPath, "utf-8");

      for (const page of pages) {
        if (page.path === "/") continue;

        let html = baseHtml;

        html = html.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`);

        html = replaceMetaContent(html, 'name="description"', page.description);
        html = replaceMetaContent(html, 'rel="canonical"', page.canonical, "href");
        html = replaceMetaContent(html, 'property="og:title"', page.title);
        html = replaceMetaContent(html, 'property="og:description"', page.description);
        html = replaceMetaContent(html, 'property="og:url"', page.canonical);
        html = replaceMetaContent(html, 'name="twitter:title"', page.title);
        html = replaceMetaContent(html, 'name="twitter:description"', page.description);

        const routePath = page.path.startsWith("/") ? page.path.slice(1) : page.path;
        const filePath = join(outDir, routePath, "index.html");
        const fileDir = dirname(filePath);

        if (!existsSync(fileDir)) {
          mkdirSync(fileDir, { recursive: true });
        }

        writeFileSync(filePath, html, "utf-8");
      }

      console.log(`[seo-prerender] Generated ${pages.length - 1} route HTML files with unique meta tags`);
    },
  };
}
