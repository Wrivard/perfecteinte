import { motion } from "framer-motion";

// Import all requested images
import img1 from '@assets/481210775_625629666742936_5403171954558065410_n_1774531645509.jpg';
import img2 from '@assets/481287105_622811947024708_4552150963501534299_n_1774531645509.jpg';
import img3 from '@assets/481287887_624839100155326_2322975325486587163_n_1774531645509.jpg';
import img4 from '@assets/485048289_636737895632113_6749648947738676055_n_1774531645510.jpg';
import img5 from '@assets/496493881_674438051862097_5255794160296938583_n_1774531645510.jpg';
import img6 from '@assets/515464037_717072027598699_7656154476338834597_n_1774531645510.jpg';
import img7 from '@assets/526235082_739427715363130_6055039976108673408_n_1774531645511.jpg';
import img8 from '@assets/532291985_746493491323219_5990593213632343471_n_1774531645511.jpg';
import img9 from '@assets/552939218_780287794610455_6908565764177471907_n_1774531645511.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-2 block">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Nos Réalisations
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="masonry-grid">
          {images.map((src, index) => (
            <motion.div 
              key={index}
              className="masonry-item relative overflow-hidden rounded-xl group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={src} 
                alt={`Réalisation esthétique auto ${index + 1}`} 
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-6">
                <span className="text-white font-semibold">Voir le résultat</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
