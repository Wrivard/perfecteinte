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
import ctaImg from "@/assets/optimized-photos/IMG_5191.webp";

import newImg1 from "@assets/485077445_642811888504503_325527761917987874_n_1780951111840.jpg";
import newImg2 from "@assets/484579202_642806558505036_4164192967183294918_n_1780951111839.jpg";
import newImg3 from "@assets/484813297_644287891690236_147594783183215853_n_1780951111839.jpg";
import newImg4 from "@assets/485150908_644297641689261_4715788982551897010_n_1780951111841.jpg";
import newImg5 from "@assets/485158474_644297581689267_3518560219241088530_n_1780951111841.jpg";
import newImg6 from "@assets/484978617_644417801677245_5709279693467673838_n_1780951111840.jpg";
import newImg7 from "@assets/485012542_644422901676735_3255584034753389984_n_1780951111840.jpg";
import newImg8 from "@assets/485174268_642679441851081_2024101051486167124_n_1780951111841.jpg";

const allImages = [
  newImg1, newImg2, newImg3, newImg4, newImg5, newImg6, newImg7, newImg8,
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14, img15, img16, img17,
];

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
