import { useEffect } from "react";

const BASE_TITLE = "Esthétique Auto A.V";
const BASE_URL = "https://esthetiqueautoav.ca";

export function usePageMeta(title?: string, description?: string, path?: string) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} | Détailing automobile à Sainte-Claire, QC`;
    document.title = fullTitle;

    if (description) {
      const meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (meta) meta.content = description;
    }

    const pagePath = path || window.location.pathname;
    const pageUrl = `${BASE_URL}${pagePath === "/" ? "" : pagePath}`;

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.href = pagePath === "/" ? `${BASE_URL}/` : pageUrl;
    }

    const ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    if (ogTitle) ogTitle.content = fullTitle;

    const ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    if (ogDesc && description) ogDesc.content = description;

    const ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
    if (ogUrl) ogUrl.content = pagePath === "/" ? `${BASE_URL}/` : pageUrl;

    const twTitle = document.querySelector('meta[name="twitter:title"]') as HTMLMetaElement | null;
    if (twTitle) twTitle.content = fullTitle;

    const twDesc = document.querySelector('meta[name="twitter:description"]') as HTMLMetaElement | null;
    if (twDesc && description) twDesc.content = description;

    return () => {
      document.title = `${BASE_TITLE} | Détailing automobile à Sainte-Claire, QC`;
      if (canonical) canonical.href = `${BASE_URL}/`;
      const resetOgUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
      if (resetOgUrl) resetOgUrl.content = `${BASE_URL}/`;
    };
  }, [title, description, path]);
}
