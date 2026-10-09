import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { X } from "lucide-react";
import { SectionTagline } from "@/components/ui/SectionTagline";

import { perfecteinteImageAlts, perfecteinteImages } from "@/assets/perfecteinteGallery";

export function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const closeLightbox = useCallback(() => setLightboxImage(null), []);
  const renderGalleryImages = (isDuplicate: boolean) => (
    <div
      className="gallery-marquee-group flex shrink-0 gap-3 pr-3 md:gap-4 md:pr-4"
      aria-hidden={isDuplicate}
    >
      {perfecteinteImages.map((src, index) => {
        const alt = perfecteinteImageAlts[index];

        return (
          <button
            key={`${isDuplicate ? "duplicate" : "original"}-${index}`}
            type="button"
            tabIndex={isDuplicate ? -1 : 0}
            aria-label={`Agrandir : ${alt}`}
            onClick={() => setLightboxImage(src)}
            className="group relative h-48 w-[82vw] shrink-0 overflow-hidden rounded-md sm:h-[clamp(190px,20vw,300px)] sm:w-[max(220px,27vw)]"
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading={!isDuplicate && index < 5 ? "eager" : "lazy"}
              decoding="async"
            />
          </button>
        );
      })}
    </div>
  );

  return (
    <>
      <section id="galerie" className="scroll-mt-24 md:scroll-mt-32 overflow-hidden bg-[#1a1a1a] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="mb-8 text-center md:mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTagline text="Galerie" light />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 leading-tight">
              <span className="text-accent">TRANSFORMATION </span>
              <span className="text-white">VISUELLE</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Chaque véhicule raconte une histoire de renaissance et de précision
            </p>
          </motion.div>
        </div>

        <div
          className="gallery-marquee-viewport relative left-1/2 w-screen -translate-x-1/2 overflow-hidden"
          role="region"
          aria-label="Réalisations photographiques"
        >
          <div className="gallery-marquee-track flex w-max">
            {renderGalleryImages(false)}
            {renderGalleryImages(true)}
          </div>
        </div>

        <div className="mt-8 text-center md:mt-10">
            <Link
              href="/rendez-vous"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-[#1b1b1b] px-8 py-4 rounded-md font-semibold text-base transition-colors"
            >
              Obtenir une soumission
            </Link>
        </div>
      </section>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightboxImage}
              alt="Vue agrandie"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white hover:text-accent transition-colors p-2"
              aria-label="Fermer la photo"
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            >
              <X size={32} strokeWidth={2} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
