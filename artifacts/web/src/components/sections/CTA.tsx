import { motion } from "framer-motion";
import { Link } from "wouter";
import { SectionTagline } from "@/components/ui/SectionTagline";
import img from "@/assets/optimized-photos/IMG_3002.webp";

export function CTA() {
  return (
    <section className="relative h-[350px] sm:h-[400px] md:h-[450px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img loading="lazy" decoding="async" src={img} alt="GMC Yukon détaillé" className="w-full h-full object-cover object-[center_40%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex-1">
            <SectionTagline text="Passez à l'action" light center={false} />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-4">
              VOTRE VÉHICULE MÉRITE<br className="hidden sm:block" /> LE MEILLEUR TRAITEMENT
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl">
              Contactez Perfecteinte dès aujourd'hui pour obtenir une soumission personnalisée.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/rendez-vous"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-[#1b1b1b] px-8 py-4 rounded-md font-semibold text-lg transition-colors w-full sm:w-auto"
              >
                Obtenir une soumission
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="tel:4184503990"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                (418) 450-3990
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
