import { motion } from "framer-motion";
import { Link } from "wouter";
import bgImage from "@assets/adobe_1780950309806.JPG";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] h-[calc(100svh-40px)] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Subaru WRX bleue – nano-céramique"
          className="w-full h-full object-cover object-[center_30%]"
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold text-white leading-[1.05] uppercase tracking-[-1px] md:tracking-[-2px]">
            REDONNEZ À VOTRE VÉHICULE SON APPARENCE D'ORIGINE
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-100 mt-6 max-w-[550px] font-light leading-relaxed">
            Spécialistes en esthétique automobile, correction de peinture et protection nano-céramique à Sainte-Claire et dans la région de Bellechasse.
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
