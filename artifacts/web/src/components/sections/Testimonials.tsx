import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTagline } from "@/components/ui/SectionTagline";
import img1 from "@/assets/optimized-photos/IMG_7529.webp";
import img2 from "@/assets/optimized-photos/IMG_8048.webp";
import img3 from "@/assets/optimized-photos/IMG_4627.webp";
import img4 from "@/assets/optimized-photos/IMG_8779.webp";
import img5 from "@/assets/optimized-photos/IMG_7859.webp";
import img6 from "@/assets/optimized-photos/IMG_5258.webp";

const allTestimonials = [
  { quote: "Chaque détail compte, et l'équipe le comprend parfaitement.", author: "Éric Laforce", image: img1 },
  { quote: "Un service qui transforme littéralement l'apparence de mon véhicule.", author: "Caroline Tremblay", image: img2 },
  { quote: "La précision et le professionnalisme sont au cœur de leur travail.", author: "Michel Bouchard", image: img3 },
  { quote: "Résultats impeccables à chaque visite. Mon véhicule n'a jamais été aussi beau.", author: "Sophie Dubois", image: img4 },
  { quote: "Le meilleur service de protection automobile de la région. Hautement recommandé!", author: "Martin Côté", image: img5 },
  { quote: "L'équipe a un œil exceptionnel pour la finition. Résultat au-delà de mes attentes.", author: "Julie Gagnon", image: img6 },
  { quote: "Le PPF a complètement protégé mon capot d'un gros éclat de pierre. Investissement rentabilisé!", author: "Jean-Philippe Roy", image: img1 },
  { quote: "Le forfait de luxe en vaut chaque dollar. Mon auto brille comme au jour 1!", author: "Nathalie Bergeron", image: img3 },
  { quote: "Après le polissage, les swirls ont disparu comme par magie. Travail de pro!", author: "François Lavoie", image: img5 },
  { quote: "La nano-céramique est incroyable. L'eau perle comme sur une feuille de lotus!", author: "Isabelle Fortin", image: img2 },
  { quote: "Un service sur mesure, une attention aux détails incomparable. Je recommande à 100%.", author: "Patrick Simard", image: img4 },
  { quote: "Après 3 ans de PPF, la peinture est comme neuve. Extraordinaire.", author: "Marie-Ève Gagné", image: img6 },
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
                  className="relative h-[350px] sm:h-[380px] md:h-[420px] rounded-md overflow-hidden group"
                >
                  <img loading="lazy" decoding="async" src={t.image} alt={t.author} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="flex gap-1 text-accent mb-3 md:mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-white text-base md:text-lg leading-relaxed mb-4 md:mb-6">"{t.quote}"</p>
                    <p className="text-white font-semibold text-sm md:text-base">{t.author}</p>
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
