import { useState } from "react";
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
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[900px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[40px] font-display font-bold text-[#1a1a1a] leading-tight">
            FOIRE AUX <span className="text-accent">QUESTIONS</span>
          </h2>
          <p className="text-lg text-gray-500 mt-4">
            Découvrez les réponses aux questions fréquentes sur nos services de rénovation.
          </p>
        </div>

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
          <h3 className="text-2xl md:text-[28px] font-display font-bold text-[#1a1a1a]">
            VOUS AVEZ D'AUTRES QUESTIONS ?
          </h3>
          <p className="text-gray-500 mt-3">Nous sommes là pour vous aider.</p>
          <a
            href="#contact"
            className="inline-block mt-6 border-2 border-gray-300 text-[#1a1a1a] px-8 py-3 rounded-md font-semibold hover:border-accent hover:text-accent transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
