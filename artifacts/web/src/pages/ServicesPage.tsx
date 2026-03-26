import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageLayout } from "@/components/layout/PageLayout";
import { Droplets, Shield, Sparkles, Check } from "lucide-react";
import heroImg from "@assets/526235082_739427715363130_6055039976108673408_n_1774531645511.jpg";
import img1 from "@assets/526917186_739427728696462_1785754575991955122_n_1774531645511.jpg";
import img2 from "@assets/570606844_804977075474860_4894531562783451229_n_1774531645512.jpg";
import img3 from "@assets/532291985_746493491323219_5990593213632343471_n_1774531645511.jpg";

const services = [
  {
    icon: Droplets,
    image: img1,
    title: "Lavage & Entretien Esthétique",
    description: "Un nettoyage complet qui va bien au-delà du simple lavage. Nous traitons chaque surface avec des produits professionnels pour un résultat impeccable.",
    features: [
      "Lavage extérieur à la main",
      "Nettoyage intérieur complet",
      "Traitement des cuirs et plastiques",
      "Décontamination de la carrosserie",
      "Protection des surfaces traitées",
    ],
  },
  {
    icon: Shield,
    image: img2,
    title: "Protection de Peinture (PPF)",
    description: "La pellicule de protection de peinture (PPF) protège votre véhicule contre les éclats de pierre, les rayures et les débris de la route.",
    features: [
      "Film transparent haute performance",
      "Protection contre les éclats de pierre",
      "Auto-cicatrisant à la chaleur",
      "Préservation de la valeur du véhicule",
      "Garantie longue durée",
    ],
  },
  {
    icon: Sparkles,
    image: img3,
    title: "Polissage & Nano-Céramique",
    description: "Le polissage corrige les imperfections et la nano-céramique offre une protection durable avec un éclat incomparable.",
    features: [
      "Correction des micro-rayures",
      "Élimination des swirls",
      "Revêtement nano-céramique",
      "Protection jusqu'à 5 ans",
      "Effet hydrophobe supérieur",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <section className="relative h-[50vh] min-h-[350px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white uppercase leading-tight">
              NOS <span className="text-accent">SERVICES</span>
            </h1>
            <p className="text-xl text-white/80 mt-4 max-w-xl">
              Des solutions professionnelles pour chaque besoin automobile.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#1a1a1a] mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              NOS <span className="text-accent">SOLUTIONS</span>
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Des solutions techniques qui transforment et préservent l'intégrité de votre automobile.
            </motion.p>
          </div>

          <motion.div
            className="space-y-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-[350px] md:h-[450px] rounded-md overflow-hidden group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-14 h-14 bg-accent/10 rounded-md flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-[#1a1a1a] mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-500 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/rendez-vous"
                    className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors"
                  >
                    Prendre rendez-vous
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative h-[350px] md:h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
                PRÊT À TRANSFORMER<br />VOTRE VÉHICULE ?
              </h2>
              <p className="text-lg text-white/90 mt-4">Contactez-nous pour un devis personnalisé.</p>
            </div>
            <div className="flex gap-4 shrink-0">
              <Link
                href="/rendez-vous"
                className="bg-accent text-white px-8 py-4 rounded-md font-semibold hover:bg-accent-hover transition-colors"
              >
                Réserver
              </Link>
              <a
                href="tel:4186655871"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors"
              >
                Appeler
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
