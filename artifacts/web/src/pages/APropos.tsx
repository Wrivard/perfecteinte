import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout/PageLayout";
import { Shield, Award, Heart, Wrench } from "lucide-react";
import heroImg from "@assets/518400891_721263007179601_8348639493355995469_n_1774531645510.jpg";
import img1 from "@assets/560145854_793100139995887_2888064327822015612_n_1774531645512.jpg";
import img2 from "@assets/559679573_796705672968667_6667683747001719488_n_1774531645511.jpg";

const values = [
  {
    icon: Shield,
    title: "Protection",
    description: "Nous utilisons les meilleurs produits du marché pour protéger votre véhicule contre les éléments et l'usure quotidienne.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Chaque véhicule reçoit le même niveau d'attention méticuleuse, peu importe la taille du projet.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "L'esthétique automobile est plus qu'un métier pour nous — c'est une véritable passion qui guide chacune de nos actions.",
  },
  {
    icon: Wrench,
    title: "Expertise",
    description: "Plus de 15 ans d'expérience dans le domaine nous permettent de maîtriser les techniques les plus avancées.",
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

export default function APropos() {
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
              À <span className="text-accent">Propos</span>
            </h1>
            <p className="text-xl text-white/80 mt-4 max-w-xl">
              Découvrez l'histoire et les valeurs qui animent Esthétique Auto Pascal Pilote.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#1a1a1a] mb-6 leading-tight">
                NOTRE <span className="text-accent">HISTOIRE</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-6">
                Fondée il y a plus de 15 ans à La Malbaie, Esthétique Auto Pascal Pilote est née d'une passion profonde pour l'automobile.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                Pascal Pilote a transformé sa passion en entreprise, offrant des services de détailing automobile de qualité supérieure dans la région de Charlevoix. Avec une attention méticuleuse aux détails et un engagement envers l'excellence, chaque véhicule qui passe entre nos mains reçoit un traitement personnalisé.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Notre atelier, situé au 2535 boulevard Comporté, est équipé des dernières technologies en matière de protection et de restauration automobile. Nous investissons constamment dans notre formation et nos équipements pour vous offrir le meilleur service possible.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img src={img1} alt="Atelier Pascal Pilote" className="w-full h-[400px] object-cover rounded-md" />
              <img
                src={img2}
                alt="Travail en détail"
                className="absolute -bottom-8 -left-8 w-48 h-48 object-cover rounded-md border-4 border-white shadow-xl hidden lg:block"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#1a1a1a] mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              NOS <span className="text-accent">VALEURS</span>
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Les principes qui guident notre travail au quotidien
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-md flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold text-[#1a1a1a] mb-3">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { value: "15+", label: "Années d'expertise" },
              { value: "100%", label: "Produit de qualité" },
              { value: "350+", label: "Lavages complétés" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-accent leading-none mb-4">
                  {stat.value}
                </div>
                <p className="text-xl font-semibold text-white uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
