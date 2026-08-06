import { motion } from "framer-motion";
import { Link } from "wouter";
import { perfecteinteImages } from "@/assets/perfecteinteGallery";

const bgImage = perfecteinteImages[4];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] h-[calc(100svh-40px)] flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
          <img
          src={bgImage}
          alt="Véhicule haut de gamme protégé par Perfecteinte"
          className="w-full h-full object-cover object-[center_50%]"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 2xl:pt-36 w-full">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-[clamp(2.25rem,6vw,5.75rem)] font-display font-extrabold text-white leading-[1.02] uppercase tracking-[-1px] md:tracking-[-2px]">
             PROTECTION AUTOMOBILE HAUT DE GAMME
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-100 mt-6 max-w-[550px] font-light leading-relaxed">
            Plus de 30 ans d'expertise en pellicules teintées et protection pare-pierre pour préserver l'apparence de vos véhicules.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/rendez-vous"
                className="inline-flex items-center justify-center bg-accent text-[#1b1b1b] px-8 py-4 rounded-md font-semibold text-base hover:bg-accent-hover transition-all shadow-lg w-full sm:w-auto"
              >
                Obtenir une soumission
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/galerie"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                Voir nos réalisations
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
