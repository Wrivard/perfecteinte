import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTagline } from "@/components/ui/SectionTagline";

const allTestimonials = [
  { quote: "Pare-pierre et vitres teintées sur mon Jeep Wrangler. Travail et service parfait.", author: "Marc Villeneuve" },
  { quote: "Merci encore pour ton excellent service !", author: "vitro plus" },
  { quote: "Jean Frédéric est un artiste du wrap, il est imbattable. Bonne qualité au juste prix. J'ai fait poser une pellicule plastique sur ma moto, très satisfait !!!", author: "Marc Fortin" },
  { quote: "Produit et service de qualité avec excellent prix. Très bon service rapide et professionnel. Employé avec beaucoup d'expérience dans le domaine.", author: "Maxime Gauthier" },
  { quote: "Il m'a fait à plusieurs reprises mes vitres teintées et mes pare-pierres.", author: "Mike T" },
  { quote: "Travail impeccable depuis des années! L'endroit où aller au Lac-Saint-Jean pour les vitres teintées et Pare-Pierre. A+++", author: "GT20000QUEBEC" },
  { quote: "Rien à redire sur la qualité du travail accompli. J'ai fait teinter mes fenêtres, protéger le capot et les seuils de portes.", author: "Steve Tremblay" },
  { quote: "Mes vitres sont impeccable 🔥 Je recommande à 100%…", author: "R Racine" },
  { quote: "Excellent service, travail impeccable!", author: "David Bouchard" },
  { quote: "Communication rapide et professionnelle. Service courtois.", author: "Isabelle Nadeau" },
  { quote: "Service rapide et excellent.", author: "Edith Ouellet" },
  { quote: "Service et qualité irréprochable!…", author: "Jim-Alex Gagnon" },
  { quote: "Travail sur la coche 👌…", author: "Pier-andre Laforest" },
];

export function Testimonials({ compact = false }: { compact?: boolean }) {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerPage = compact ? 2 : 3;
  const totalPages = Math.ceil(allTestimonials.length / itemsPerPage);

  const goTo = useCallback((newPage: number, dir: number) => {
    setDirection(dir);
    setPage(newPage);
  }, []);

  const next = useCallback(() => {
    goTo((page + 1) % totalPages, 1);
  }, [page, totalPages, goTo]);

  const prev = useCallback(() => {
    goTo((page - 1 + totalPages) % totalPages, -1);
  }, [page, totalPages, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const currentItems = allTestimonials.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
      <section className="bg-[#f9fafb] py-14 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          className="mb-10 text-center md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTagline text="Avis Google" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 leading-tight">
            <span className="text-accent">TÉMOIGNAGES </span>
            <span className="text-gray-900">DE NOS CLIENTS</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Les commentaires de clients qui nous font confiance
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`grid gap-4 md:gap-6 ${compact ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"}`}
            >
              {currentItems.map((t, i) => (
                <div
                  key={`${page}-${i}`}
                  className="flex h-full min-h-[220px] flex-col rounded-md border border-gray-200 bg-white p-5 shadow-sm sm:min-h-[260px] sm:p-6 md:min-h-[290px] md:p-8"
                >
                  <div className="mb-5 flex gap-1 text-accent" aria-label="5 étoiles sur 5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current md:h-5 md:w-5" />
                    ))}
                  </div>
                  <p className="mb-6 flex-1 text-[15px] leading-relaxed text-gray-800 md:text-lg">“{t.quote}”</p>
                  <div className="flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
                    <p className="min-w-0 text-sm font-semibold text-gray-900 md:text-base">{t.author}</p>
                    <span className="shrink-0 text-xs text-gray-500">Avis Google</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8 md:mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > page ? 1 : -1)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === page ? "bg-gray-900" : "bg-gray-300"}`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
