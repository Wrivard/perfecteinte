import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { X } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageLayout } from "@/components/layout/PageLayout";
import { Partners } from "@/components/sections/Partners";
import { Testimonials } from "@/components/sections/Testimonials";
import { SectionTagline } from "@/components/ui/SectionTagline";
import { perfecteinteImageAlts, perfecteinteImages } from "@/assets/perfecteinteGallery";

const heroImg = perfecteinteImages[4];
const ctaImg = perfecteinteImages[5];

export default function GaleriePage() {
  usePageMeta("Galerie photos — Perfecteinte", "Découvrez les réalisations Perfecteinte en protection automobile, teintage et installations pare-pierre.");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const closeLightbox = useCallback(() => setLightboxImage(null), []);

  return (
    <PageLayout>
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[280px] sm:min-h-[350px] flex items-center overflow-hidden -mt-[120px] pt-[120px]">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Galerie de réalisations Perfecteinte" className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white uppercase leading-tight">
              <span className="text-accent">GALERIE</span> PHOTO
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mt-4 max-w-xl">
              Découvrez nos réalisations et la qualité de notre travail en images.
            </p>
          </motion.div>
        </div>
      </section>

      <Partners />

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionTagline text="Galerie" />
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent">TRANSFORMATION</span> VISUELLE
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Chaque véhicule raconte une histoire de renaissance et de précision
            </motion.p>
          </div>

          <div className="masonry-grid">
            {perfecteinteImages.map((src, index) => (
              <motion.div
                key={index}
                className="masonry-item relative overflow-hidden rounded-md group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setLightboxImage(src)}
              >
                <img
                  src={src}
                   alt={perfecteinteImageAlts[index]}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <section className="relative h-[320px] sm:h-[380px] md:h-[440px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy" decoding="async" src={ctaImg} alt="Atelier de protection automobile Perfecteinte" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionTagline text="Votre véhicule" light center={false} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight max-w-2xl">
              PRÊT À FAIRE PARTIE DE <span className="text-accent">NOTRE GALERIE</span> ?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-xl mb-6 md:mb-8">
              Confiez-nous votre véhicule et obtenez le même niveau de fini que vous voyez ci-dessus.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/rendez-vous" className="inline-flex items-center justify-center bg-accent text-[#1b1b1b] px-8 py-4 rounded-md font-semibold hover:bg-accent-hover transition-colors">
                Obtenir une soumission
              </Link>
              <a href="tel:+14184503990" className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-md font-semibold hover:bg-white/20 transition-colors">
                (418) 450-3990
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Testimonials />

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
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            >
              <X size={32} strokeWidth={2} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
