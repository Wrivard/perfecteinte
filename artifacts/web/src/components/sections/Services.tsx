import { motion } from "framer-motion";
import { Link } from "wouter";
import { SectionTagline } from "@/components/ui/SectionTagline";
import { perfecteinteImages } from "@/assets/perfecteinteGallery";

const services = [
  {
    image: perfecteinteImages[1],
    label: "Protection de la peinture",
    title: "PPF — PARE-PIERRE",
    description: "Une pellicule transparente qui protège la peinture contre les éclats de pierre et les débris de la route.",
    href: "/rendez-vous",
  },
  {
    image: perfecteinteImages[3],
    label: "Confort et intimité",
    title: "VITRES TEINTÉES",
    description: "Réduction de la chaleur, protection UV et allure sportive grâce à une installation professionnelle.",
    href: "/rendez-vous",
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

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 md:scroll-mt-32 py-20 md:py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTagline text="Services" light />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 leading-tight">
            <span className="text-white">NOS </span>
            <span className="text-accent">SOLUTIONS</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tous les véhicules sont les bienvenus, des voitures du quotidien aux sportives et exotiques. Choisissez le PPF ou les vitres teintées.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="block">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.4, ease: "easeOut" } }}
                className="relative h-[360px] sm:h-[400px] md:h-[460px] rounded-md overflow-hidden cursor-pointer group"
              >
                <div className="absolute inset-0">
                  <img loading="lazy" decoding="async"
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-colors duration-300"></div>
                </div>
                <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                  <p className="text-sm uppercase tracking-wider text-accent mb-3 font-semibold">
                    {service.label}
                  </p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
