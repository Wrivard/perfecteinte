import { motion } from "framer-motion";
import { Link } from "wouter";
import img from "@assets/558612629_793100233329211_2137356822840990595_n_1774533881229.jpg";

export function CTA() {
  return (
    <section className="relative h-[350px] sm:h-[400px] md:h-[450px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={img} alt="BMW dans l'atelier" className="w-full h-full object-cover object-[center_40%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-4">
              VOTRE VÉHICULE MÉRITE<br className="hidden sm:block" /> L'EXCELLENCE
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl">
              Transformez l'apparence et la protection de votre automobile avec un service sur mesure et professionnel.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/rendez-vous"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors w-full sm:w-auto"
              >
                Prendre un rendez-vous
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="tel:4186655871"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                (418) 665-5871
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
