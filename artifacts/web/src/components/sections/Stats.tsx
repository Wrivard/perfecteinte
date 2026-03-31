import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { SectionTagline } from "@/components/ui/SectionTagline";

const stats = [
  { value: 10, suffix: "+", label: "ANNÉES D'EXPÉRIENCE" },
  { value: 100, suffix: "%", label: "PRODUIT DE QUALITÉ" },
  { value: 1500, suffix: "+", label: "LAVAGES COMPLÉTÉS" },
];

export function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTagline text="Résultats" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            PERFORMANCE ET PRÉCISION EN<br className="hidden sm:block" /> DÉTAIL AUTOMOBILE
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-3 gap-4 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-accent leading-none mb-2 md:mb-4">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <p className="text-xs sm:text-sm md:text-lg lg:text-xl font-semibold text-gray-900 uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
