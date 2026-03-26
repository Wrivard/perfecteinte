import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "ANNÉES D'EXPERTISE" },
  { value: "100%", label: "PRODUIT DE QUALITÉ" },
  { value: "350+", label: "LAVAGE COMPLÉTÉ" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Stats() {
  return (
    <section className="py-20 md:py-24 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#1a1a1a] mb-6 leading-tight">
            PERFORMANCE ET PRÉCISION EN<br />DÉTAIL AUTOMOBILE
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="text-center" variants={itemVariants}>
              <div className="text-7xl md:text-8xl font-display font-extrabold text-accent leading-none mb-4">
                {stat.value}
              </div>
              <p className="text-xl font-semibold text-[#1a1a1a] uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
