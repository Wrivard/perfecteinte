import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { X } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageLayout } from "@/components/layout/PageLayout";
import { Partners } from "@/components/sections/Partners";
import { Testimonials } from "@/components/sections/Testimonials";
import { SectionTagline } from "@/components/ui/SectionTagline";
import heroImg from "@/assets/optimized-photos/IMG_5278.webp";

import img1 from "@/assets/optimized-photos/IMG_2992.webp";
import img2 from "@/assets/optimized-photos/IMG_8023.webp";
import img3 from "@/assets/optimized-photos/IMG_8781.webp";
import img4 from "@/assets/optimized-photos/IMG_7854.webp";
import img5 from "@/assets/optimized-photos/IMG_5134.webp";
import img6 from "@/assets/optimized-photos/IMG_1647.webp";
import img7 from "@/assets/optimized-photos/IMG_9142.webp";
import img8 from "@/assets/optimized-photos/IMG_3898.webp";
import img9 from "@/assets/optimized-photos/IMG_9304.webp";
import img10 from "@/assets/optimized-photos/IMG_4627.webp";
import img11 from "@/assets/optimized-photos/IMG_7529.webp";
import img12 from "@/assets/optimized-photos/IMG_8051.webp";
import img13 from "@/assets/optimized-photos/IMG_9370.webp";
import img14 from "@/assets/optimized-photos/IMG_8779.webp";
import img15 from "@/assets/optimized-photos/IMG_7859.webp";
import img16 from "@/assets/optimized-photos/IMG_5138.webp";
import img17 from "@/assets/optimized-photos/IMG_9584.webp";

const allImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14, img15, img16, img17,
];

export default function GaleriePage() {
  usePageMeta("Galerie photos — Détailing automobile", "Découvrez nos réalisations en esthétique automobile. Photos avant/après de nos services de lavage, PPF, polissage et nano-céramique à La Malbaie.");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const closeLightbox = useCallback(() => setLightboxImage(null), []);

  return (
    <PageLayout>
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[280px] sm:min-h-[350px] flex items-center overflow-hidden -mt-[120px] pt-[120px]">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Galerie de réalisations en esthétique automobile" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white uppercase leading-tight">
              <span className="text-blue-400">GALERIE</span> PHOTO
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mt-4 max-w-xl">
              Découvrez nos réalisations et la qualité de notre travail en images.
            </p>
          </motion.div>
        </div>
      </section>

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
            {allImages.map((src, index) => (
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
                  alt={`Réalisation ${index + 1}`}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/rendez-vous"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-md font-semibold text-base transition-colors"
            >
              Prendre un rendez-vous
            </Link>
          </div>
        </div>
      </section>

      <Partners />
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
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white hover:text-blue-400 transition-colors p-2"
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
