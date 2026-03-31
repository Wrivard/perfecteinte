import { useEffect } from "react";

const BASE_TITLE = "Esthétique Auto Pascal Pilote";

export function usePageMeta(title?: string, description?: string) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} | Détailing automobile à La Malbaie, Québec`;
    document.title = fullTitle;

    if (description) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (meta) {
        meta.content = description;
      }
    }

    return () => {
      document.title = `${BASE_TITLE} | Détailing automobile à La Malbaie, Québec`;
    };
  }, [title, description]);
}
