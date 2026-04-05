import { motion } from "framer-motion";
import { Link } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageLayout } from "@/components/layout/PageLayout";
import { Partners } from "@/components/sections/Partners";
import { Testimonials } from "@/components/sections/Testimonials";
import { SectionTagline } from "@/components/ui/SectionTagline";
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
    description: "Plus de 10 ans d'expérience dans le milieu automobile et 4 ans à la tête de notre entreprise — un savoir-faire qui se perfectionne chaque jour.",
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
  usePageMeta("À propos", "Découvrez l'histoire et les valeurs d'Esthétique Auto Pascal Pilote, spécialiste du détailing automobile à La Malbaie depuis plus de 10 ans.");
  return (
    <PageLayout>
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[280px] sm:min-h-[350px] flex items-center overflow-hidden -mt-[120px] pt-[120px]">
        <div className="absolute inset-0">
          <img src={heroImg} alt="L'équipe d'Esthétique Auto Pascal Pilote à La Malbaie" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white uppercase leading-tight">
              À <span className="text-blue-400">Propos</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mt-4 max-w-xl">
              Découvrez l'histoire et les valeurs qui animent Esthétique Auto Pascal Pilote.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTagline text="Notre histoire" center={false} />
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                NOTRE <span className="text-accent">HISTOIRE</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-4 md:mb-6">
                Fils d'un garagiste, Pascal Pilote a grandi entouré d'automobiles. Cette passion, ancrée depuis l'enfance, ne l'a jamais quitté.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                Après plus de 10 ans dans le milieu automobile, Pascal a fondé Esthétique Auto Pascal Pilote il y a 4 ans à La Malbaie. Amoureux de l'automobile et perfectionniste dans l'âme, notre équipe offre des services de détailing de qualité supérieure dans la région de Charlevoix. Chaque véhicule qui passe entre nos mains reçoit un traitement personnalisé avec une attention méticuleuse aux détails.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                Notre atelier, situé au 2535 boulevard Comporté, est équipé des dernières technologies en matière de protection et de restauration automobile. Avec plus de 1 500 lavages complétés, notre expertise parle d'elle-même.
              </p>
              <Link
                href="/rendez-vous"
                className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors"
              >
                Prendre un rendez-vous
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img src={img1} alt="Atelier Pascal Pilote" className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-md" />
              <img
                src={img2}
                alt="Travail en détail"
                className="absolute -bottom-8 -left-8 w-40 h-40 md:w-48 md:h-48 object-cover rounded-md border-4 border-white shadow-xl hidden lg:block"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-4 md:gap-12 text-center">
            {[
              { value: "10+", label: "Années d'expérience" },
              { value: "4", label: "Ans d'entreprise" },
              { value: "1500+", label: "Lavages complétés" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-accent leading-none mb-2 md:mb-4">
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm md:text-lg lg:text-xl font-semibold text-white uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionTagline text="Nos valeurs" />
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              NOS <span className="text-accent">VALEURS</span>
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Les principes qui guident notre travail au quotidien
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 md:p-8 rounded-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-md flex items-center justify-center mb-4 md:mb-6">
                  <value.icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold text-gray-900 mb-2 md:mb-3">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Partners />
      <Testimonials />
    </PageLayout>
  );
}
