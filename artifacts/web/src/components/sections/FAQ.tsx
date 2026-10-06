import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { AccordionItem } from "@/components/ui/accordion-custom";
import { SectionTagline } from "@/components/ui/SectionTagline";

const faqs = [
  {
    q: "Pourquoi choisir une pellicule pare-pierre (PPF) ?",
    a: "La pellicule pare-pierre protège la peinture originale contre les impacts, les éclats et les débris routiers tout en conservant une finition transparente et haut de gamme."
  },
  {
    q: "Le PPF est-il visible une fois installé ?",
    a: "Non, la pellicule de protection est pratiquement invisible une fois installée. Elle préserve l'apparence originale du véhicule et peut même rehausser sa brillance."
  },
  {
    q: "Acceptez-vous tous les types de véhicules ?",
    a: "Oui. Nous prenons en charge tous les types de véhicules automobiles, des voitures du quotidien aux sportives et exotiques, pour le PPF comme pour les vitres teintées."
  },
  {
    q: "Depuis combien de temps Perfecteinte offre-t-elle ses services ?",
    a: "Perfecteinte s'appuie sur plus de 30 ans d'expérience dans le domaine des pellicules teintées et de la protection pare-pierre."
  },
  {
    q: "Comment obtenir une soumission ?",
    a: "Remplissez notre formulaire en ligne ou appelez-nous au (418) 450-3990. Nous discuterons de votre véhicule et de la protection qui correspond le mieux à vos besoins."
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
            Découvrez les réponses à vos questions sur le PPF et les vitres teintées.
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
            Obtenir une soumission
          </Link>
        </div>
      </div>
    </section>
  );
}
