import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { AccordionItem } from "@/components/ui/accordion-custom";
import { SectionTagline } from "@/components/ui/SectionTagline";

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
    a: "Oui, nous vous recommandons de prendre rendez-vous à l'avance pour assurer un service optimal. Vous pouvez réserver directement en ligne via notre formulaire de rendez-vous, ou nous contacter par téléphone au (418) 957-8168."
  },
  {
    q: "Le polissage peut-il enlever toutes les égratignures ?",
    a: "Le polissage peut éliminer la majorité des micro-rayures, swirls et défauts de surface. Cependant, les rayures profondes qui ont pénétré au-delà de la couche de vernis nécessitent parfois des traitements complémentaires. Nous évaluons chaque véhicule individuellement."
  },
  {
    q: "Offrez-vous un service mobile à domicile ?",
    a: "Actuellement, nos services sont offerts exclusivement dans notre atelier situé au 20 Rue de la Montagne, porte 2 à Sainte-Claire. Notre environnement contrôlé nous permet de garantir les meilleurs résultats possibles."
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTagline text="FAQ" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 leading-tight">
            <span className="text-gray-900">FOIRE AUX </span>
            <span className="text-accent">QUESTIONS</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
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
              isLast={index === faqs.length - 1}
            />
          ))}
        </div>

        <div className="mt-12 md:mt-16 pt-12 md:pt-16 text-center">
          <h3 className="text-xl sm:text-2xl md:text-[28px] font-display font-bold text-gray-900">
            VOUS AVEZ D'AUTRES QUESTIONS ?
          </h3>
          <p className="text-gray-700 mt-3">Nous sommes là pour vous aider.</p>
          <Link
            href="/rendez-vous"
            className="inline-block mt-6 bg-accent text-[#1b1b1b] px-8 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors"
          >
            Prendre un rendez-vous
          </Link>
        </div>
      </div>
    </section>
  );
}
