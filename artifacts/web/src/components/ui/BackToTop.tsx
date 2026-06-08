import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Retour en haut de la page"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-accent text-[#1b1b1b] rounded-full shadow-lg hover:bg-accent-hover hover:scale-110 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}
