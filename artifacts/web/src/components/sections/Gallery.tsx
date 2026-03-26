import { motion } from "framer-motion";

import img1 from '@assets/481210775_625629666742936_5403171954558065410_n_1774531645509.jpg';
import img2 from '@assets/481287105_622811947024708_4552150963501534299_n_1774531645509.jpg';
import img3 from '@assets/481287887_624839100155326_2322975325486587163_n_1774531645509.jpg';
import img4 from '@assets/485048289_636737895632113_6749648947738676055_n_1774531645510.jpg';
import img5 from '@assets/496493881_674438051862097_5255794160296938583_n_1774531645510.jpg';
import img6 from '@assets/518400891_721263007179601_8348639493355995469_n_1774531645510.jpg';
import img7 from '@assets/559679573_796705672968667_6667683747001719488_n_1774531645511.jpg';
import img8 from '@assets/560145854_793100139995887_2888064327822015612_n_1774531645512.jpg';
import img9 from '@assets/532291985_746493491323219_5990593213632343471_n_1774531645511.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-[42px] font-display font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent">TRANSFORMATION</span> VISUELLE
          </motion.h2>
          <motion.p
            className="text-lg text-white/80 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Chaque véhicule raconte une histoire de renaissance et de précision
          </motion.p>
        </div>

        <div className="masonry-grid">
          {images.map((src, index) => (
            <motion.div 
              key={index}
              className="masonry-item relative overflow-hidden rounded-md group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
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
  );
}
