import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTagline } from "@/components/ui/SectionTagline";

const allTestimonials = [
  { quote: "Chaque détail compte, et l'équipe le comprend parfaitement.", author: "Éric Laforce" },
  { quote: "Un service qui transforme littéralement l'apparence de mon véhicule.", author: "Caroline Tremblay" },
  { quote: "La précision et le professionnalisme sont au cœur de leur travail.", author: "Michel Bouchard" },
  { quote: "Résultats impeccables à chaque visite. Mon véhicule n'a jamais été aussi beau.", author: "Sophie Dubois" },
  { quote: "Le meilleur service de protection automobile de la région. Hautement recommandé!", author: "Martin Côté" },
  { quote: "L'équipe a un œil exceptionnel pour la finition. Résultat au-delà de mes attentes.", author: "Julie Gagnon" },
  { quote: "Le PPF a complètement protégé mon capot d'un gros éclat de pierre. Investissement rentabilisé!", author: "Jean-Philippe Roy" },
  { quote: "Un service sur mesure, une attention aux détails incomparable. Je recommande à 100%.", author: "Patrick Simard" },
  { quote: "Après 3 ans de PPF, la peinture est comme neuve. Extraordinaire.", author: "Marie-Ève Gagné" },
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
    <section className="py-20 md:py-24 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTagline text="Témoignages" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 leading-tight">
            <span className="text-accent">TÉMOIGNAGES </span>
            <span className="text-gray-900">DE NOS CLIENTS</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            L'excellence de notre travail racontée par ceux qui nous font confiance
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
                  className="flex min-h-[260px] h-full flex-col rounded-md border border-gray-200 bg-white p-6 shadow-sm sm:min-h-[290px] md:p-8"
                >
                  <div className="mb-5 flex gap-1 text-accent" aria-label="5 étoiles sur 5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current md:h-5 md:w-5" />
                    ))}
                  </div>
                  <p className="mb-6 flex-1 text-base leading-relaxed text-gray-800 md:text-lg">"{t.quote}"</p>
                  <p className="border-t border-gray-100 pt-4 text-sm font-semibold text-gray-900 md:text-base">{t.author}</p>
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
