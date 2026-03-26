import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import img1 from "@assets/481210775_625629666742936_5403171954558065410_n_1774531645509.jpg";
import img2 from "@assets/481287105_622811947024708_4552150963501534299_n_1774531645509.jpg";
import img3 from "@assets/481287887_624839100155326_2322975325486587163_n_1774531645509.jpg";
import img4 from "@assets/485048289_636737895632113_6749648947738676055_n_1774531645510.jpg";
import img5 from "@assets/496493881_674438051862097_5255794160296938583_n_1774531645510.jpg";
import img6 from "@assets/518400891_721263007179601_8348639493355995469_n_1774531645510.jpg";
import img7 from "@assets/559679573_796705672968667_6667683747001719488_n_1774531645511.jpg";
import img8 from "@assets/560145854_793100139995887_2888064327822015612_n_1774531645512.jpg";
import img9 from "@assets/532291985_746493491323219_5990593213632343471_n_1774531645511.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              <span className="text-accent">TRANSFORMATION </span>
              <span className="text-white">VISUELLE</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-8 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightboxImage}
              alt="Vue agrandie"
              className="max-w-full max-h-full object-contain"
            />
            <button
              className="absolute top-8 right-8 text-white hover:text-accent transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
            >
              <X size={40} strokeWidth={2} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
