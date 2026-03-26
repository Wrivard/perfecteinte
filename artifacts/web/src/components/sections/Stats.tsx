import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "ANNÉES D'EXPERTISE" },
  { value: "100%", label: "PRODUIT DE QUALITÉ" },
  { value: "350+", label: "LAVAGE COMPLÉTÉ" },
];

export function Stats() {
  return (
    <section id="stats" className="py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-[40px] font-display font-bold text-[#1a1a1a] text-center mb-16 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          PERFORMANCE ET PRÉCISION EN<br />DÉTAIL AUTOMOBILE
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-6xl md:text-7xl font-display font-extrabold text-accent leading-none">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-[#1a1a1a] mt-2 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
