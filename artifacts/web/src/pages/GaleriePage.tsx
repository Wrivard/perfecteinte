import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { X } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Partners } from "@/components/sections/Partners";
import heroImg from "@assets/532949601_746227078016527_8012720562132951420_n_1774531645511.jpg";

import img1 from "@assets/481210775_625629666742936_5403171954558065410_n_1774531645509.jpg";
import img2 from "@assets/481287105_622811947024708_4552150963501534299_n_1774531645509.jpg";
import img3 from "@assets/481287887_624839100155326_2322975325486587163_n_1774531645509.jpg";
import img4 from "@assets/485048289_636737895632113_6749648947738676055_n_1774531645510.jpg";
import img5 from "@assets/496493881_674438051862097_5255794160296938583_n_1774531645510.jpg";
import img6 from "@assets/515464037_717072027598699_7656154476338834597_n_1774531645510.jpg";
import img7 from "@assets/518400891_721263007179601_8348639493355995469_n_1774531645510.jpg";
import img8 from "@assets/526235082_739427715363130_6055039976108673408_n_1774531645511.jpg";
import img9 from "@assets/526917186_739427728696462_1785754575991955122_n_1774531645511.jpg";
import img10 from "@assets/532291985_746493491323219_5990593213632343471_n_1774531645511.jpg";
import img11 from "@assets/532949601_746227078016527_8012720562132951420_n_1774531645511.jpg";
import img12 from "@assets/535472325_752143490758219_186388118827140535_n_1774531645511.jpg";
import img13 from "@assets/552939218_780287794610455_6908565764177471907_n_1774531645511.jpg";
import img14 from "@assets/559679573_796705672968667_6667683747001719488_n_1774531645511.jpg";
import img15 from "@assets/560145854_793100139995887_2888064327822015612_n_1774531645512.jpg";
import img16 from "@assets/566216853_802767049029196_5018593656071286537_n_1774531645512.jpg";
import img17 from "@assets/570606844_804977075474860_4894531562783451229_n_1774531645512.jpg";

const allImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14, img15, img16, img17,
];

export default function GaleriePage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const closeLightbox = useCallback(() => setLightboxImage(null), []);

  return (
    <PageLayout>
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[280px] sm:min-h-[350px] flex items-center overflow-hidden -mt-[120px] pt-[120px]">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
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

      <Partners />

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
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
