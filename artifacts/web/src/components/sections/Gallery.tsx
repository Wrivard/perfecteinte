import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { X } from "lucide-react";
import { SectionTagline } from "@/components/ui/SectionTagline";

import img1 from "@/assets/optimized-photos/IMG_5278.webp";
import img2 from "@/assets/optimized-photos/IMG_2992.webp";
import img3 from "@/assets/optimized-photos/IMG_8023.webp";
import img4 from "@/assets/optimized-photos/IMG_8781.webp";
import img5 from "@/assets/optimized-photos/IMG_7854.webp";
import img6 from "@/assets/optimized-photos/IMG_5134.webp";
import img7 from "@/assets/optimized-photos/IMG_1647.webp";
import img8 from "@/assets/optimized-photos/IMG_9142.webp";
import img9 from "@/assets/optimized-photos/IMG_3898.webp";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const closeLightbox = useCallback(() => setLightboxImage(null), []);

  return (
    <>
      <section className="py-20 md:py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTagline text="Galerie" light />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 leading-tight">
              <span className="text-blue-400">TRANSFORMATION </span>
              <span className="text-white">VISUELLE</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Chaque véhicule raconte une histoire de renaissance et de précision
            </p>
          </motion.div>

          <div className="masonry-grid">
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="masonry-item relative overflow-hidden rounded-md group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setLightboxImage(src)}
              >
                <img
                  src={src}
                  alt={`Réalisation ${index + 1}`}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
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
    </>
  );
}
