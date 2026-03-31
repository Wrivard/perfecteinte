import { motion } from "framer-motion";
import labocosmetica from "@assets/labocosmetica-logo-nobg.png";
import legend from "@assets/legend-ppf-nobg.png";
import carpro from "@assets/carpro-nobg.png";
import maxshine from "@assets/maxshine-nobg.png";

const partners = [
  { name: "Labocosmetica", logo: labocosmetica },
  { name: "Legend Paint Protection Film", logo: legend },
  { name: "CarPro", logo: carpro },
  { name: "MaxShine", logo: maxshine },
];

interface PartnersProps {
  variant?: "light" | "dark";
}

export function Partners({ variant = "light" }: PartnersProps) {
  const isDark = variant === "dark";

  return (
    <section className={isDark ? "py-12 md:py-16 bg-[#1a1a1a]" : "py-12 md:py-16 bg-[#f9fafb]"}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className={`text-xs uppercase tracking-[0.2em] font-semibold ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Nos partenaires de confiance
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16"
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
                className={`h-10 sm:h-12 md:h-14 w-auto object-contain transition-opacity duration-300 ${isDark ? "brightness-0 invert opacity-60 hover:opacity-100" : "opacity-50 hover:opacity-100 grayscale hover:grayscale-0"}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
