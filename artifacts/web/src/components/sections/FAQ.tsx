import { useState } from "react";
import { AccordionItem } from "@/components/ui/accordion-custom";

const faqs = [
  {
    q: "Combien de temps dure la protection céramique?",
    a: "La durée de la protection céramique varie de 2 à 5 ans selon le produit choisi et l'entretien du véhicule. Nous offrons différents forfaits adaptés à vos besoins."
  },
  {
    q: "Quelle est la différence entre la cire et la céramique?",
    a: "La cire offre une protection temporaire de quelques semaines, tandis que la céramique crée une liaison chimique permanente avec la peinture, offrant une protection supérieure pendant des années contre les UV, produits chimiques et micro-rayures."
  },
  {
    q: "Combien de temps prend un service complet?",
    a: "Un detailing complet prend généralement entre 1 et 3 jours selon l'état initial du véhicule et les services demandés. La protection céramique nécessite un temps de cure supplémentaire dans notre atelier avant la livraison."
  },
  {
    q: "Offrez-vous un service mobile?",
    a: "Actuellement, nos services sont offerts exclusivement dans notre atelier à Québec, où nous disposons de l'éclairage, de l'équipement et de l'environnement contrôlé (température/humidité) nécessaires pour garantir des résultats optimaux, particulièrement pour la céramique."
  },
  {
    q: "Quels produits utilisez-vous?",
    a: "Nous utilisons exclusivement des produits professionnels haut de gamme reconnus dans l'industrie, incluant des revêtements céramiques certifiés et des pâtes de correction de peinture de qualité supérieure pour assurer une finition miroir."
  },
  {
    q: "Comment prendre rendez-vous?",
    a: "Vous pouvez nous contacter par téléphone au 418-670-1613 ou via notre page Facebook pour planifier votre évaluation et votre rendez-vous. Nous vous recommandons de réserver à l'avance, surtout en haute saison."
  },
  {
    q: "Acceptez-vous les paiements par carte?",
    a: "Oui, nous acceptons les paiements par carte de crédit, carte de débit, virement Interac et argent comptant pour votre commodité."
  },
  {
    q: "Offrez-vous une garantie?",
    a: "Oui, tous nos traitements de protection céramique sont accompagnés d'une garantie. La durée de cette garantie varie selon le forfait choisi et est valide sous réserve d'un entretien adéquat du véhicule."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-2 block">Informations</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            Questions Fréquentes
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
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
      </div>
    </section>
  );
}
