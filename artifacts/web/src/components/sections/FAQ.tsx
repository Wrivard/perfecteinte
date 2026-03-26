import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { AccordionItem } from "@/components/ui/accordion-custom";

const faqs = [
  {
    q: "Combien de temps dure un traitement nano-céramique ?",
    a: "Un traitement nano-céramique professionnel peut durer de 2 à 5 ans selon le produit utilisé et l'entretien régulier du véhicule. Nous recommandons un entretien périodique pour maximiser la durabilité de la protection."
  },
  {
    q: "Est-ce que la pellicule pare-pierre change l'apparence de la peinture ?",
    a: "Non, la pellicule de protection de peinture (PPF) est pratiquement invisible une fois appliquée. Elle protège contre les éclats de pierre, les débris et les rayures légères tout en préservant l'apparence originale de votre véhicule."
  },
  {
    q: "Dois-je prendre rendez-vous pour un lavage ?",
    a: "Oui, nous vous recommandons de prendre rendez-vous à l'avance pour assurer un service optimal. Contactez-nous par téléphone au (418) 665-5871 pour réserver votre créneau."
  },
  {
    q: "Le polissage peut-il enlever toutes les égratignures ?",
    a: "Le polissage peut éliminer la majorité des micro-rayures, swirls et défauts de surface. Cependant, les rayures profondes qui ont pénétré au-delà de la couche de vernis nécessitent parfois des traitements complémentaires. Nous évaluons chaque véhicule individuellement."
  },
  {
    q: "Offrez-vous un service mobile à domicile ?",
    a: "Actuellement, nos services sont offerts exclusivement dans notre atelier situé au 2535 boulevard Comporté à La Malbaie. Notre environnement contrôlé nous permet de garantir les meilleurs résultats possibles."
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            <span className="text-gray-900">FOIRE AUX </span>
            <span className="text-accent">QUESTIONS</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Découvrez les réponses aux questions fréquentes sur nos services de rénovation.
          </p>
        </motion.div>

        <div>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="border-t border-gray-200 mt-16 pt-16 text-center">
          <h3 className="text-2xl md:text-[28px] font-display font-bold text-gray-900">
            VOUS AVEZ D'AUTRES QUESTIONS ?
          </h3>
          <p className="text-gray-700 mt-3">Nous sommes là pour vous aider.</p>
          <Link
            href="/rendez-vous"
            className="inline-block mt-6 border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-md font-semibold hover:border-accent hover:text-accent transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
