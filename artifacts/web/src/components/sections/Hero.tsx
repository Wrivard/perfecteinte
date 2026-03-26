import { motion } from "framer-motion";
import { Link } from "wouter";
import bgImage from "@assets/570606844_804977075474860_4894531562783451229_n_1774531645512.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Esthétique Automobile"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 w-full">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold text-white leading-[1.05] uppercase tracking-[-1px] md:tracking-[-2px]">
            REDONNEZ DE L'ÉCLAT À VOTRE VÉHICULE
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-100 mt-6 max-w-[550px] font-light leading-relaxed">
            Des services professionnels de détail automobile qui transforment et protègent votre véhicule. Nous combinons passion et expertise pour un résultat impeccable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/rendez-vous"
                className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-accent-hover transition-all shadow-lg w-full sm:w-auto"
              >
                Prendre un rendez-vous
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="tel:4186655871"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                (418) 665-5871
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
