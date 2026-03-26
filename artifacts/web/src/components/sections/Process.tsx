import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Évaluation",
    desc: "Inspection complète de votre véhicule sous éclairage spécifique pour déterminer l'état exact et les traitements nécessaires."
  },
  {
    num: "02",
    title: "Préparation",
    desc: "Lavage minutieux, décontamination chimique et mécanique pour préparer parfaitement les surfaces à traiter."
  },
  {
    num: "03",
    title: "Application",
    desc: "Correction et application professionnelle des traitements (céramique, PPF) avec des produits certifiés haut de gamme."
  },
  {
    num: "04",
    title: "Livraison",
    desc: "Inspection finale rigoureuse et livraison de votre véhicule dans un état impeccable, avec conseils d'entretien."
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-light/50 -skew-x-12 transform origin-top hidden lg:block"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <span className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-2 block">Méthodologie</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">Notre Processus</h2>
          <div className="w-24 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] bg-gray-100 z-0">
                  <div className="h-full bg-accent w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              )}
              
              <div className="relative z-10 mb-6">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-light flex items-center justify-center shadow-lg group-hover:border-accent transition-colors duration-300">
                  <span className="text-3xl font-display font-bold text-navy/20 group-hover:text-accent transition-colors duration-300">
                    {step.num}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
