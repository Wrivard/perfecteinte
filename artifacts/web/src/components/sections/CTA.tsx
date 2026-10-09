import { motion } from "framer-motion";
import { Link } from "wouter";
import { SectionTagline } from "@/components/ui/SectionTagline";
import { perfecteinteImages } from "@/assets/perfecteinteGallery";

const img = perfecteinteImages[2];

export function CTA() {
  return (
    <section className="relative flex min-h-[420px] items-center overflow-hidden py-14 sm:min-h-[400px] sm:py-16 md:min-h-[450px] md:py-16">
      <div className="absolute inset-0">
        <img loading="lazy" decoding="async" src={img} alt="Voiture de sport blanche photographiée dans l’atelier" className="w-full h-full object-cover object-[center_40%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30"></div>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="flex-1">
            <SectionTagline text="Passez à l'action" light center={false} />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-4">
              VOTRE VÉHICULE MÉRITE<br className="hidden sm:block" /> LE MEILLEUR TRAITEMENT
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl">
              Contactez Perfecteinte dès aujourd'hui pour obtenir une soumission personnalisée.
            </p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-4 sm:w-auto sm:flex-row">
            <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/rendez-vous"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-[#1b1b1b] px-8 py-4 rounded-md font-semibold text-lg transition-colors w-full sm:w-auto"
              >
                Obtenir une soumission
              </Link>
            </motion.div>
            <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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
