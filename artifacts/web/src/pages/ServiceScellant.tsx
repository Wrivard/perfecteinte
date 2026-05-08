import { motion } from "framer-motion";
import { Link } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageLayout } from "@/components/layout/PageLayout";
import { Partners } from "@/components/sections/Partners";
import { SectionTagline } from "@/components/ui/SectionTagline";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { Sparkles, Check, Layers, Disc3 } from "lucide-react";
import { Testimonials } from "@/components/sections/Testimonials";
import { useState } from "react";
import { AccordionItem } from "@/components/ui/accordion-custom";
import heroImg from "@/assets/optimized-photos/IMG_7930.webp";
import img1 from "@assets/img-1647-01_1778252857606.webp";
import img2 from "@/assets/optimized-photos/IMG_3303.webp";
import imgCires from "@/assets/optimized-photos/IMG_7694.webp";
import imgPolissage from "@/assets/optimized-photos/IMG_3303.webp";

const subServices = [
  {
    title: "Cires (scellant peinture)",
    description: "Application d'une cire de protection haute performance qui scelle et protège la peinture tout en lui donnant un éclat profond et durable. Idéal pour l'entretien régulier de votre carrosserie.",
    Icon: Layers,
    image: imgCires,
    alt: "Application de cire de protection",
    features: [
      "Protection contre les UV",
      "Éclat profond et lumineux",
      "Hydrophobicité améliorée",
      "Durabilité jusqu'à plusieurs mois",
    ],
  },
  {
    title: "Polissage",
    description: "Correction des imperfections de la peinture : micro-rayures, marques de lavage automatique, oxydation légère. Le polissage redonne à votre peinture sa profondeur et son éclat d'origine.",
    Icon: Disc3,
    image: imgPolissage,
    alt: "Polissage professionnel d'un véhicule",
    features: [
      "Correction des micro-rayures",
      "Élimination des tourbillons",
      "Restauration de la profondeur de couleur",
      "Surface parfaitement lisse",
    ],
  },
];

const benefits = [
  { title: "Peinture protégée", description: "Le scellant crée une barrière protectrice contre la pollution, les UV et les contaminants quotidiens." },
  { title: "Éclat retrouvé", description: "Le polissage élimine les imperfections et révèle la vraie beauté de votre peinture." },
  { title: "Valeur préservée", description: "Une peinture bien entretenue maintient la valeur de revente de votre véhicule." },
  { title: "Résultats durables", description: "Nos produits de qualité professionnelle assurent une protection longue durée entre chaque application." },
];

const faqs = [
  { q: "Quelle est la différence entre une cire et un scellant ?", a: "Une cire est souvent d'origine naturelle (carnauba) et offre un éclat chaud et profond. Un scellant synthétique offre une protection plus durable et plus résistante aux éléments. Nous utilisons des produits combinant les avantages des deux pour un résultat optimal." },
  { q: "Est-ce que le polissage endommage la peinture ?", a: "Non, entre les mains d'un professionnel expérimenté, le polissage est totalement sécuritaire. Nous évaluons l'épaisseur de la peinture et utilisons les abrasifs adaptés pour corriger uniquement ce qui est nécessaire." },
  { q: "À quelle fréquence devrais-je appliquer un scellant ?", a: "Cela dépend de l'utilisation et des conditions d'exposition de votre véhicule. En général, un scellant peinture se renouvelle tous les 3 à 6 mois pour maintenir une protection optimale." },
  { q: "Peut-on polir une voiture de n'importe quelle couleur ?", a: "Oui, toutes les couleurs peuvent être polies. Les peintures foncées (noir, bleu foncé) montrent davantage les imperfections et bénéficient particulièrement du polissage professionnel." },
  { q: "Combien de temps dure un traitement de polissage ?", a: "Un polissage prend en général une journée complète selon l'état de la peinture et la taille du véhicule. C'est un travail minutieux qui ne peut pas être précipité." },
];

export default function ServiceScellant() {
  usePageMeta("Scellant", "Service de cires, scellant peinture et polissage professionnel à La Malbaie. Correction des imperfections et protection durable de votre peinture.");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PageLayout>
      <FAQSchema faqs={faqs} />
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[280px] sm:min-h-[350px] flex items-center overflow-hidden -mt-[120px] pt-[120px]">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Polissage et scellant peinture automobile" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-md flex items-center justify-center">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white uppercase leading-tight">
              SCELLANT &<br /><span className="text-blue-400">POLISSAGE</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mt-4 max-w-xl">
              Protection et correction de peinture pour un éclat incomparable.
            </p>
          </motion.div>
        </div>
      </section>

      <Partners />

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionTagline text="Protection" center={false} />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                UNE FINITION <span className="text-accent">PARFAITE</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Nos services de scellant et polissage combinent protection et embellissement de votre peinture. Que votre véhicule ait besoin d'être protégé ou que vous vouliez corriger des années d'imperfections, nous avons la solution.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                Nous utilisons exclusivement des produits professionnels haut de gamme — Labocosmetica, CarPro, MaxShine — pour des résultats qui se voient et se sentent.
              </p>
              <Link href="/rendez-vous" className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors">
                Obtenir une soumission
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-md overflow-hidden">
              <img src={img1} alt="Mercedes SUV avec finition impeccable après scellant" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionTagline text="Nos services" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 leading-tight">
              CE QU'ON <span className="text-accent">OFFRE</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
            {subServices.map((svc, i) => {
              const Icon = svc.Icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white rounded-md overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <img src={svc.image} alt={svc.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-md flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6 text-accent" strokeWidth={1.75} />
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">{svc.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">{svc.description}</p>
                    <ul className="space-y-2 mb-6">
                      {svc.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-accent shrink-0" />
                          <span className="text-gray-700 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/rendez-vous" className="inline-flex items-center justify-center w-full bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors text-sm mt-auto">
                      Obtenir une soumission
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div className="text-center mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-8">
              POURQUOI <span className="text-accent">NOUS CHOISIR ?</span>
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-md p-6 shadow-sm border border-gray-100 text-center">
                <h4 className="text-base font-display font-bold text-gray-900 mb-2">{b.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[300px] sm:h-[350px] md:h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={img2} alt="Résultat polissage" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionTagline text="Résultat" light center={false} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
              VOTRE PEINTURE <span className="text-blue-400">SUBLIMÉE</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-xl mb-6">
              Un éclat incomparable et une protection durable — c'est notre promesse pour chaque véhicule.
            </p>
            <Link href="/rendez-vous" className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-md font-semibold hover:bg-accent-hover transition-colors">
              Obtenir une soumission
            </Link>
          </motion.div>
        </div>
      </section>

      <Testimonials />

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionTagline text="FAQ" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
              <span className="text-gray-900">FOIRE AUX </span><span className="text-accent">QUESTIONS</span>
            </h2>
          </motion.div>
          <div>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} question={faq.q} answer={faq.a} isOpen={openIndex === index} onClick={() => setOpenIndex(openIndex === index ? null : index)} isLast={index === faqs.length - 1} />
            ))}
          </div>
          <div className="mt-12 pt-12 text-center">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900">D'AUTRES QUESTIONS ?</h3>
            <p className="text-gray-700 mt-3">Contactez-nous — nous sommes là pour vous guider.</p>
            <Link href="/rendez-vous" className="inline-block mt-6 bg-accent text-white px-8 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors">
              Prendre un rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
