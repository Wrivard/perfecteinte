import { useEffect, useRef, useState } from "react";

export function CookieDeclaration() {
  const container = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "development" | "error">("loading");

  useEffect(() => {
    const host = container.current;
    const banner = document.getElementById("Cookiebot");
    const cbid = banner?.getAttribute("data-cbid");
    if (!host || !cbid) {
      setStatus("development");
      return;
    }
    const script = document.createElement("script");
    script.id = "CookieDeclaration";
    script.src = `https://consent.cookiebot.com/${cbid}/cd.js`;
    script.type = "text/javascript";
    script.async = true;
    script.setAttribute("data-culture", "FR");
    script.onload = () => setStatus("ready");
    script.onerror = () => setStatus("error");
    host.appendChild(script);
    return () => {
      script.onload = null;
      script.onerror = null;
      host.replaceChildren();
    };
  }, []);

  return (
    <div className="min-w-0 overflow-x-auto">
      {status === "loading" && <p role="status">Chargement de la déclaration des témoins…</p>}
      {status === "development" && (
        <p>Le panneau Cookiebot et la déclaration des témoins sont désactivés dans l’aperçu local et Replit.</p>
      )}
      {status === "error" && (
        <p role="status">La déclaration des témoins est temporairement indisponible. Vous pouvez utiliser le panneau Cookiebot pour modifier vos préférences.</p>
      )}
      <div ref={container} />
    </div>
  );
}
