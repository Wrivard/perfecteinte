import { motion } from "framer-motion";
import { Link } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageLayout } from "@/components/layout/PageLayout";
import { Partners } from "@/components/sections/Partners";
import { Testimonials } from "@/components/sections/Testimonials";
import { SectionTagline } from "@/components/ui/SectionTagline";
import { Shield, Sun, ArrowRight } from "lucide-react";
import { perfecteinteImages } from "@/assets/perfecteinteGallery";

const heroImg = perfecteinteImages[4];
const img2 = perfecteinteImages[3];
const img3 = perfecteinteImages[1];

const services = [
  {
    icon: Shield,
    image: img3,
    title: "PPF — Pellicule pare-pierre",
    description: "Une pellicule transparente qui aide à protéger la peinture de votre véhicule contre les éclats et les débris routiers.",
    href: "/services/ppf",
    features: [
      "Protection contre les éclats de pierre",
      "Finition transparente",
      "Zones à protéger déterminées selon votre véhicule",
    ],
  },
  {
    icon: Sun,
    image: img2,
    title: "Vitres teintées",
    description: "Le teintage des vitres contribue au confort de l'habitacle et ajoute une touche de style à votre véhicule.",
    href: "/services/vitres-teintees",
    features: [
      "Réduction de la chaleur et des rayons UV",
      "Plus d'intimité dans l'habitacle",
      "Finition soignée adaptée au véhicule",
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
  usePageMeta("Nos services", "PPF pare-pierre et vitres teintées à Alma, Québec. Découvrez les deux services offerts par Perfecteinte.");
  return (
    <PageLayout>
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[280px] sm:min-h-[350px] flex items-center overflow-hidden -mt-[120px] pt-[120px]">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Services de protection automobile Perfecteinte à Alma" className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white uppercase leading-tight">
              NOS <span className="text-accent">SERVICES</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mt-4 max-w-xl">
              PPF et vitres teintées, à Alma.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionTagline text="Services" />
            </motion.div>
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
              Découvrez nos deux services automobiles.
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
                      <img loading="lazy" decoding="async"
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
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3 md:mb-4">{service.title}</h3>
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
                      className="inline-flex items-center gap-2 bg-accent text-[#1b1b1b] px-6 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors"
                    >
                      En savoir plus <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/rendez-vous"
                      className="inline-flex items-center gap-2 border-2 border-accent text-accent px-6 py-3 rounded-md font-semibold hover:bg-accent hover:text-[#1b1b1b] transition-colors"
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
      <Testimonials />
    </PageLayout>
  );
}
