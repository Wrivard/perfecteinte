import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, Shield, Sun } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageLayout } from "@/components/layout/PageLayout";
import { SectionTagline } from "@/components/ui/SectionTagline";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { AccordionItem } from "@/components/ui/accordion-custom";
import { perfecteinteImages } from "@/assets/perfecteinteGallery";

const serviceDetails = {
  ppf: {
    title: "PPF — Pare-pierre",
    metaDescription: "Installation de pellicule pare-pierre PPF à Alma, Québec. Demandez une soumission à Perfecteinte.",
    eyebrow: "Protection de la peinture",
    heading: <>PELLICULE <span className="text-accent">PARE-PIERRE</span></>,
    description: "La pellicule pare-pierre (PPF) est une pellicule transparente appliquée sur la carrosserie pour aider à protéger la peinture contre les éclats de pierre et les débris routiers.",
    image: perfecteinteImages[3],
    imageAlt: "Toyota Supra rouge dans l'atelier Perfecteinte",
    icon: Shield,
    features: [
      "Protection contre les éclats de pierre et les débris routiers",
      "Finition transparente qui préserve l'apparence du véhicule",
      "Zones à couvrir déterminées selon votre véhicule",
    ],
    questions: [
      { q: "Qu'est-ce que le PPF ?", a: "Le PPF (Paint Protection Film), aussi appelé pellicule pare-pierre, est un film transparent appliqué sur la carrosserie pour aider à protéger la peinture contre les impacts et les débris routiers." },
      { q: "Quelles parties du véhicule peuvent être protégées ?", a: "Les zones à couvrir sont déterminées avec vous selon votre véhicule et les endroits que vous souhaitez protéger." },
      { q: "Le PPF est-il visible une fois installé ?", a: "La pellicule est transparente et conçue pour préserver l'apparence de la peinture." },
      { q: "Comment obtenir une soumission ?", a: "Appelez-nous au (418) 450-3990 ou remplissez le formulaire de soumission en ligne." },
    ],
  },
  tint: {
    title: "Vitres teintées",
    metaDescription: "Teintage de vitres automobiles à Alma, Québec. Demandez une soumission à Perfecteinte.",
    eyebrow: "Confort et intimité",
    heading: <>VITRES <span className="text-accent">TEINTÉES</span></>,
    description: "La pose de pellicule teintée contribue au confort et à l'intimité dans l'habitacle, tout en ajoutant une finition soignée à votre véhicule.",
    image: perfecteinteImages[3],
    imageAlt: "Vitres teintées sur une voiture sport",
    icon: Sun,
    features: [
      "Aide à réduire la chaleur et les rayons UV",
      "Intimité accrue dans l'habitacle",
      "Choix de teinte discuté selon le véhicule",
    ],
    questions: [
      { q: "Quels sont les avantages des vitres teintées ?", a: "Le teintage peut améliorer le confort en réduisant la chaleur et les rayons UV dans l'habitacle, tout en ajoutant de l'intimité et du style." },
      { q: "Puis-je choisir le niveau de teinte ?", a: "Nous discutons des options avec vous et tenons compte de votre véhicule et des exigences applicables." },
      { q: "Combien de temps prend l'installation ?", a: "La durée dépend du véhicule et du nombre de vitres à teinter. Contactez-nous pour une estimation adaptée." },
      { q: "Comment obtenir une soumission ?", a: "Appelez-nous au (418) 450-3990 ou remplissez le formulaire de soumission en ligne." },
    ],
  },
} as const;

type ServiceKey = keyof typeof serviceDetails;

export function ServiceDetails({ service }: { service: ServiceKey }) {
  const details = serviceDetails[service];
  const Icon = details.icon;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  usePageMeta(details.title, details.metaDescription);

  return (
    <PageLayout>
      <FAQSchema faqs={[...details.questions]} />
      <section className="relative min-h-[360px] h-[45vh] md:h-[50vh] flex items-center overflow-hidden -mt-[120px] pt-[120px]">
        <div className="absolute inset-0">
          <img
            src={details.image}
            alt={details.imageAlt}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-accent/20 rounded-md flex items-center justify-center">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <span className="text-accent text-sm uppercase tracking-widest font-semibold">{details.eyebrow}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white uppercase leading-tight">
              {details.heading}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mt-4 max-w-2xl">{details.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionTagline text={details.eyebrow} center={false} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              {details.title}
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">{details.description}</p>
            <ul className="space-y-3 mb-8">
              {details.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="/rendez-vous" className="inline-flex items-center bg-accent text-[#1b1b1b] px-6 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors">
              Obtenir une soumission
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-md overflow-hidden">
            <img src={details.image} alt={details.imageAlt} className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#f9fafb]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="text-center mb-10 md:mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionTagline text="FAQ" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900">
              FOIRE AUX <span className="text-accent">QUESTIONS</span>
            </h2>
          </motion.div>
          {details.questions.map((faq, index) => (
            <AccordionItem
              key={faq.q}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              isLast={index === details.questions.length - 1}
            />
          ))}
          <div className="text-center mt-10">
            <Link href="/rendez-vous" className="inline-flex items-center bg-accent text-[#1b1b1b] px-8 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors">
              Demander une soumission
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
