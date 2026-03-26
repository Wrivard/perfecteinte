import { motion } from "framer-motion";
import { Shield, Sparkles, Droplets, Maximize, Search, Car } from "lucide-react";

const services = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Protection Céramique",
    description: "Protection longue durée de 2 à 5 ans. Hydrophobicité exceptionnelle, résistance aux rayures légères et aux contaminants environnementaux.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Correction de Peinture",
    description: "Élimination des swirls, micro-rayures et défauts de peinture. Restauration de la brillance et de la profondeur d'origine de votre véhicule.",
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Detailing Intérieur Complet",
    description: "Nettoyage en profondeur, traitement du cuir, shampoing des tapis et sièges. Désinfection complète de l'habitacle pour un confort optimal.",
  },
  {
    icon: <Maximize className="w-8 h-8" />,
    title: "Pellicule de Protection (PPF)",
    description: "Film transparent haute performance pour protéger la peinture contre les éclats de pierre, débris de la route et rayures accidentelles.",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Lavage et Décontamination",
    description: "Lavage minutieux avec décontamination chimique et à la clay bar. Préparation idéale avant tout traitement de correction ou protection.",
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Restauration de Phares",
    description: "Polissage et restauration de phares jaunis, ternis ou oxydés. Amélioration de la visibilité nocturne et rajeunissement de l'esthétique.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-2 block">Nos Services</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            Des Services d'Excellence pour Votre Véhicule
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg shadow-black/5 border border-gray-100 hover:shadow-xl hover:border-accent/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-light flex items-center justify-center text-navy group-hover:bg-accent group-hover:text-white transition-colors duration-300 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
