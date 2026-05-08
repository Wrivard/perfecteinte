import { motion } from "framer-motion";
import { Award } from "lucide-react";
import labocosmetica from "@assets/nobg_labo_1774964289735.png";
import legend from "@assets/nobg_1774965084556.png";
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
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          className="text-center text-[11px] uppercase tracking-[0.25em] font-semibold text-gray-400 mb-6 md:mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Nos partenaires de confiance
        </motion.p>

        <motion.div
          className="grid grid-cols-4 items-center gap-3 sm:gap-8 md:gap-14 lg:gap-20 mb-6 md:mb-10"
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
                loading="lazy"
                decoding="async"
                src={partner.logo}
                alt={partner.name}
                className="h-7 sm:h-10 md:h-12 w-auto max-w-full object-contain brightness-0 opacity-40 hover:opacity-70 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mx-auto max-w-md sm:max-w-none w-fit flex items-center justify-center gap-3 sm:gap-4 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full border border-gray-200 bg-gray-50/80"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
            <Award className="w-4 h-4 text-accent" />
          </div>
          <p className="text-[11px] sm:text-xs font-semibold text-gray-700 leading-tight">
            Certifié installateur PPF par
          </p>
          <img
            loading="lazy"
            decoding="async"
            src={labocosmetica}
            alt="Labocosmetica"
            className="h-5 sm:h-6 w-auto object-contain brightness-0 opacity-80"
          />
        </motion.div>
      </div>
    </section>
  );
}
