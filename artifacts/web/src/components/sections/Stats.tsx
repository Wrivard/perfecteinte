import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Award, UserCheck } from "lucide-react";
import { SectionTagline } from "@/components/ui/SectionTagline";

const reasons = [
  {
    icon: ShieldCheck,
    title: "PROTECTION NANO-CÉRAMIQUE",
    description: "Une protection durable et un éclat qui dure dans le temps.",
  },
  {
    icon: Sparkles,
    title: "PRODUITS PROFESSIONNELS",
    description: "Des produits haut de gamme pour des résultats supérieurs.",
  },
  {
    icon: Award,
    title: "RÉSULTATS HAUT DE GAMME",
    description: "Une finition impeccable, jusque dans les moindres détails.",
  },
  {
    icon: UserCheck,
    title: "SERVICE PERSONNALISÉ",
    description: "Une attention particulière portée à chaque véhicule.",
  },
];

export function Stats() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTagline text="Pourquoi nous choisir" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            L'EXCELLENCE EN ESTHÉTIQUE<br className="hidden sm:block" /> AUTOMOBILE
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="text-center bg-white rounded-md p-6 md:p-8 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent/10 text-accent mb-4 md:mb-6">
                <reason.icon className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 uppercase tracking-wide mb-2 md:mb-3">
                {reason.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
