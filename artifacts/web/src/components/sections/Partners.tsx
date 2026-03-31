import { motion } from "framer-motion";
import labocosmetica from "@assets/nobg_labo_1774964289735.png";
import legend from "@assets/Legend-car-protection-film-scaled_1774963789970.png";
import carpro from "@assets/logo-carpro_1774963789970.png";
import maxshine from "@assets/maxshine_1774963789970.png";

const partners = [
  { name: "Labocosmetica", logo: labocosmetica },
  { name: "Legend Paint Protection Film", logo: legend },
  { name: "CarPro", logo: carpro },
  { name: "MaxShine", logo: maxshine },
];

export function Partners() {
  return (
    <section className="py-10 md:py-14 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          className="text-center text-[11px] uppercase tracking-[0.25em] font-semibold text-gray-500 mb-8 md:mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Nos partenaires de confiance
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-10 md:gap-14 lg:gap-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
