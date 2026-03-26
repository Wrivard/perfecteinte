import { motion } from "framer-motion";
import bgImage from "@assets/570606844_804977075474860_4894531562783451229_n_1774531645512.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Esthétique Automobile" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-display font-extrabold text-white leading-[1.1] uppercase tracking-[-1px]">
            REDONNEZ DE L'ÉCLAT À VOTRE VÉHICULE
          </h1>
          
          <p className="text-lg md:text-[18px] text-white/90 mt-6 max-w-[500px] font-light leading-relaxed">
            Des services professionnels de détail automobile qui transforment et protègent votre véhicule. Nous combinons passion et expertise pour un résultat impeccable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="#gallery"
              className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-accent-hover hover:scale-[1.02] transition-all shadow-lg"
            >
              Galerie
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-white/10 transition-all"
            >
              Contactez-nous
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
