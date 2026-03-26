import { motion } from "framer-motion";
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

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-[42px] font-display font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            NOS <span className="text-accent">SOLUTIONS</span>
          </motion.h2>
          <motion.p
            className="text-lg text-white/80 mt-4 max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Des solutions techniques qui transforment et préservent l'intégrité de votre automobile.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative h-[450px] md:h-[550px] rounded-md overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-xs uppercase tracking-widest text-white/70 mb-2 block">
                  {service.label}
                </span>
                <h3 className="text-2xl md:text-[28px] font-bold text-white leading-tight whitespace-pre-line">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
