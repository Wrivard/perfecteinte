import { motion } from "framer-motion";
import { Link } from "wouter";
import img1 from "@assets/526917186_739427728696462_1785754575991955122_n_1774531645511.jpg";
import img2 from "@assets/570606844_804977075474860_4894531562783451229_n_1774531645512.jpg";
import img3 from "@assets/526235082_739427715363130_6055039976108673408_n_1774531645511.jpg";

const services = [
  {
    image: img1,
    label: "Expertise",
    title: "LAVAGE &\nENTRETIEN\nESTHÉTIQUE",
  },
  {
    image: img2,
    label: "Innovation",
    title: "PROTECTION DE\nPEINTURE (PPF)",
  },
  {
    image: img3,
    label: "Finition",
    title: "POLISSAGE &\nNANO-\nCÉRAMIQUE",
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
    <section className="py-20 md:py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 leading-tight">
            <span className="text-white">NOS </span>
            <span className="text-blue-400">SOLUTIONS</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Des solutions techniques qui transforment et préservent l'intégrité de votre automobile.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <Link key={index} href="/rendez-vous" className="block">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.4, ease: "easeOut" } }}
                className="relative h-[380px] sm:h-[420px] md:h-[550px] rounded-md overflow-hidden cursor-pointer group"
              >
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-colors duration-300"></div>
                </div>
                <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                  <p className="text-sm uppercase tracking-wider text-blue-400 mb-3 font-semibold">
                    {service.label}
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight whitespace-pre-line">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
