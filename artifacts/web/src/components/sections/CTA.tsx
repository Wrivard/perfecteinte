import { motion } from "framer-motion";
import { Link } from "wouter";
import img from "@assets/560145854_793100139995887_2888064327822015612_n_1774531645512.jpg";

export function CTA() {
  return (
    <section className="relative h-[400px] md:h-[450px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={img} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-4">
              VOTRE VÉHICULE MÉRITE<br />L'EXCELLENCE
            </h2>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl">
              Transformez l'apparence et la protection de votre automobile avec un service sur mesure et professionnel.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/rendez-vous"
                className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
              >
                Réserver
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="tel:4186655871"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Contactez-nous
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
