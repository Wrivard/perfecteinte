import { motion } from "framer-motion";
import { Link } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageLayout } from "@/components/layout/PageLayout";
import { Partners } from "@/components/sections/Partners";
import { Droplets, Shield, Sparkles, User, ArrowRight } from "lucide-react";
import heroImg from "@assets/526235082_739427715363130_6055039976108673408_n_1774531645511.jpg";
import img1 from "@assets/526917186_739427728696462_1785754575991955122_n_1774531645511.jpg";
import img2 from "@assets/570606844_804977075474860_4894531562783451229_n_1774531645512.jpg";
import img3 from "@assets/485048289_636737895632113_6749648947738676055_n_1774531645510.jpg";
import img4 from "@assets/532291985_746493491323219_5990593213632343471_n_1774531645511.jpg";

const services = [
  {
    icon: Droplets,
    image: img1,
    title: "Lavage Auto & Entretien Esthétique de Luxe",
    description: "Un nettoyage complet qui va bien au-delà du simple lavage. Nous traitons chaque surface avec des produits professionnels pour un résultat impeccable.",
    href: "/services/lavage",
    features: [
      "Lavage extérieur à la main",
      "Nettoyage intérieur complet",
      "Traitement des cuirs et plastiques",
      "Décontamination de la carrosserie",
    ],
  },
  {
    icon: Shield,
    image: img2,
    title: "Protection de Peinture PPF",
    description: "La pellicule de protection de peinture (PPF) protège votre véhicule contre les éclats de pierre, les rayures et les débris de la route.",
    href: "/services/ppf",
    features: [
      "Film transparent haute performance",
      "Protection contre les éclats de pierre",
      "Auto-cicatrisant à la chaleur",
      "Garantie longue durée",
    ],
  },
  {
    icon: User,
    image: img3,
    title: "Par Pierre",
    description: "Un service personnalisé par notre expert passionné du détailing automobile. Un savoir-faire unique et une attention méticuleuse aux détails pour chaque véhicule.",
    href: "/services/par-pierre",
    features: [
      "Service sur mesure personnalisé",
      "Expertise pointue en finition",
      "Attention aux moindres détails",
      "Résultats d'exception garantis",
    ],
  },
  {
    icon: Sparkles,
    image: img4,
    title: "Polissage & Nano-Céramique",
    description: "Le polissage corrige les imperfections et la nano-céramique offre une protection durable avec un éclat incomparable.",
    href: "/services/polissage",
    features: [
      "Correction des micro-rayures",
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
  usePageMeta("Nos services", "Lavage de luxe, protection PPF, polissage, nano-céramique et service par Pierre. Découvrez tous nos services d'esthétique automobile à La Malbaie.");
  return (
    <PageLayout>
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[280px] sm:min-h-[350px] flex items-center overflow-hidden -mt-[120px] pt-[120px]">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white uppercase leading-tight">
              NOS <span className="text-blue-400">SERVICES</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mt-4 max-w-xl">
              Des solutions professionnelles pour chaque besoin automobile.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              NOS <span className="text-accent">SOLUTIONS</span>
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Des solutions techniques qui transforment et préservent l'intégrité de votre automobile.
            </motion.p>
          </div>

          <motion.div
            className="space-y-16 md:space-y-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <Link href={service.href} className="block">
                    <div className="relative h-[280px] sm:h-[320px] md:h-[450px] rounded-md overflow-hidden group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-md flex items-center justify-center mb-4 md:mb-6">
                    <service.icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-gray-900 mb-3 md:mb-4">{service.title}</h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">{service.description}</p>
                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                        </div>
                        <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors"
                    >
                      En savoir plus <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/rendez-vous"
                      className="inline-flex items-center gap-2 border-2 border-accent text-accent px-6 py-3 rounded-md font-semibold hover:bg-accent hover:text-white transition-colors"
                    >
                      Prendre un rendez-vous
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Partners />
    </PageLayout>
  );
}
