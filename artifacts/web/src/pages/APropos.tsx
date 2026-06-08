import { motion } from "framer-motion";
import { Link } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageLayout } from "@/components/layout/PageLayout";
import { Partners } from "@/components/sections/Partners";
import { Testimonials } from "@/components/sections/Testimonials";
import { SectionTagline } from "@/components/ui/SectionTagline";
import { Shield, Award, Heart, Wrench } from "lucide-react";
import heroImg from "@/assets/optimized-photos/IMG_3898.webp";
import img1 from "@/assets/optimized-photos/IMG_9142.webp";
import img2 from "@/assets/optimized-photos/IMG_8023.webp";
import ctaImg from "@/assets/optimized-photos/IMG_9345.webp";

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
    description: "Un savoir-faire qui se perfectionne à chaque véhicule, pour des résultats toujours à la hauteur de vos attentes.",
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
  usePageMeta("À propos", "Découvrez l'histoire et les valeurs d'Esthétique Auto A.V, spécialiste du détailing automobile à Sainte-Claire et dans la région de Bellechasse.");
  return (
    <PageLayout>
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[280px] sm:min-h-[350px] flex items-center overflow-hidden -mt-[120px] pt-[120px]">
        <div className="absolute inset-0">
          <img src={heroImg} alt="L'équipe d'Esthétique Auto A.V à Sainte-Claire" className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white uppercase leading-tight">
              À <span className="text-[#D4AF37]">Propos</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mt-4 max-w-xl">
              Découvrez l'histoire et les valeurs qui animent Esthétique Auto A.V.
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
                Passionnée par l'automobile et le souci du détail, l'équipe d'Esthétique Auto A.V offre des services professionnels de remise à neuf esthétique pour tous types de véhicules.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                Chaque intervention est réalisée avec précision afin de restaurer, protéger et mettre en valeur votre investissement. De la correction de peinture à la protection nano-céramique, nous traitons chaque automobile avec une attention méticuleuse.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                Située au 20 Rue de la Montagne, porte 2 à Sainte-Claire, notre équipe dessert les régions de Bellechasse, Lévis, Québec, la Beauce et Montmagny.
              </p>
              <Link
                href="/rendez-vous"
                className="inline-flex items-center bg-accent text-[#1b1b1b] px-6 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors"
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
              <img loading="lazy" decoding="async" src={img1} alt="Atelier d'Esthétique Auto A.V" className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-md" />
              <img loading="lazy" decoding="async"
                src={img2}
                alt="Travail en détail"
                className="absolute -bottom-8 -left-8 w-40 h-40 md:w-48 md:h-48 object-cover rounded-md border-4 border-white shadow-xl hidden lg:block"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Partners />

      <section className="py-16 md:py-20 lg:py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-4 md:gap-12 text-center">
            {[
              { value: "Précision", label: "Un travail méticuleux à chaque étape" },
              { value: "Protection", label: "Des traitements durables et performants" },
              { value: "Passion", label: "L'amour du détail dans chaque véhicule" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-extrabold text-accent leading-none mb-2 md:mb-4">
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white tracking-wide">{stat.label}</p>
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

      <section className="relative h-[320px] sm:h-[380px] md:h-[440px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy" decoding="async" src={ctaImg} alt="Service d'esthétique automobile à Sainte-Claire" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionTagline text="Confiez-nous votre véhicule" light center={false} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight max-w-2xl">
              VIVEZ L'EXPÉRIENCE <span className="text-[#D4AF37]">A.V</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-xl mb-6 md:mb-8">
              La même passion, la même précision et le même souci du détail pour chaque véhicule qui passe entre nos mains.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/rendez-vous" className="inline-flex items-center justify-center bg-accent text-[#1b1b1b] px-8 py-4 rounded-md font-semibold hover:bg-accent-hover transition-colors">
                Prendre un rendez-vous
              </Link>
              <a href="tel:+14189578168" className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-md font-semibold hover:bg-white/20 transition-colors">
                (418) 957-8168
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Testimonials />
    </PageLayout>
  );
}
