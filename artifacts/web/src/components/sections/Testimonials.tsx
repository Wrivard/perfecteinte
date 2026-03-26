import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Service exceptionnel! Ma voiture brille comme jamais. L'équipe est professionnelle et minutieuse. Je ne confierais mon véhicule à personne d'autre.",
    author: "Jean Tremblay",
    location: "Québec",
  },
  {
    quote: "La protection céramique a transformé mon véhicule. L'eau perle instantanément et le nettoyage est devenu un jeu d'enfant. Le résultat est impressionnant et durable.",
    author: "Marie Bouchard",
    location: "Lévis",
  },
  {
    quote: "Excellent rapport qualité-prix. J'ai fait faire une correction de peinture avant la revente de mon auto et elle avait l'air neuve sortant du concessionnaire.",
    author: "Pierre Gagnon",
    location: "Beauport",
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-2 block">Avis</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-light" />
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 italic relative z-10 leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="font-bold text-navy font-display">{t.author}</p>
                <p className="text-sm text-gray-400">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
