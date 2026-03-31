import { motion } from "framer-motion";
import { Link } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageLayout } from "@/components/layout/PageLayout";
import { Partners } from "@/components/sections/Partners";
import { Sparkles, Check } from "lucide-react";
import { Testimonials } from "@/components/sections/Testimonials";
import { useState } from "react";
import { AccordionItem } from "@/components/ui/accordion-custom";
import heroImg from "@assets/526235082_739427715363130_6055039976108673408_n_1774531645511.jpg";
import img1 from "@assets/532291985_746493491323219_5990593213632343471_n_1774531645511.jpg";
import img2 from "@assets/518400891_721263007179601_8348639493355995469_n_1774531645510.jpg";

const steps = [
  { step: "01", title: "Inspection", description: "Analyse complète de l'état de la peinture avec un éclairage spécialisé pour identifier chaque imperfection." },
  { step: "02", title: "Préparation", description: "Lavage minutieux et décontamination chimique et mécanique de la surface pour un résultat optimal." },
  { step: "03", title: "Polissage", description: "Correction des défauts avec des machines orbitales professionnelles et des pâtes de polissage adaptées." },
  { step: "04", title: "Nano-Céramique", description: "Application du revêtement céramique en couches pour une protection durable et un éclat incomparable." },
];

const features = [
  "Correction des micro-rayures et swirls",
  "Élimination des marques d'oxydation",
  "Revêtement nano-céramique haute performance",
  "Protection UV et chimique longue durée",
  "Effet hydrophobe supérieur",
  "Facilité d'entretien accrue",
  "Brillance profonde et durable",
  "Protection jusqu'à 5 ans",
];

const faqs = [
  { q: "Quelle est la différence entre polissage et cirage ?", a: "Le polissage corrige les défauts de la peinture (rayures, swirls, oxydation) en enlevant une infime couche de vernis. Le cirage est simplement une couche protectrice temporaire. La nano-céramique offre une protection bien supérieure au cirage traditionnel." },
  { q: "Combien de temps dure un traitement nano-céramique ?", a: "Un traitement nano-céramique professionnel dure de 2 à 5 ans selon le produit utilisé et l'entretien régulier. Nous recommandons un lavage périodique avec des produits compatibles céramique." },
  { q: "Le polissage abîme-t-il la peinture ?", a: "Non, un polissage professionnel réalisé avec les bons outils et techniques n'abîme pas la peinture. Nous mesurons l'épaisseur du vernis avant de commencer pour garantir un travail sécuritaire." },
  { q: "Puis-je laver mon véhicule après un traitement céramique ?", a: "Il faut attendre au moins 7 jours après l'application avant le premier lavage. Ensuite, nous recommandons un lavage à la main avec des produits pH neutre compatibles céramique." },
];


export default function ServicePolissage() {
  usePageMeta("Polissage & Nano-Céramique", "Correction de peinture et revêtement nano-céramique pour une protection durable jusqu'à 5 ans. Service professionnel à La Malbaie, Charlevoix.");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PageLayout>
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[280px] sm:min-h-[350px] flex items-center overflow-hidden -mt-[120px] pt-[120px]">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Polissage automobile" className="w-full h-full object-cover" />
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
              POLISSAGE &<br /><span className="text-blue-400">NANO-CÉRAMIQUE</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mt-4 max-w-xl">
              Correction de peinture et protection céramique pour un éclat incomparable.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                ÉCLAT <span className="text-accent">INCOMPARABLE</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Le polissage corrige les imperfections de la peinture — micro-rayures, swirls, oxydation — pour retrouver une surface lisse et brillante. La nano-céramique scelle ensuite cette perfection avec une protection durable qui repousse l'eau, la saleté et les contaminants.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/rendez-vous" className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors">
                Prendre un rendez-vous
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-md overflow-hidden">
              <img src={img1} alt="Polissage en cours" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 leading-tight">
              NOTRE <span className="text-accent">PROCESSUS</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Un processus rigoureux en 4 étapes pour des résultats professionnels.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-md p-6 md:p-8 shadow-sm border border-gray-100 text-center">
                <span className="text-4xl md:text-5xl font-display font-extrabold text-accent/20">{s.step}</span>
                <h3 className="text-lg md:text-xl font-display font-bold text-gray-900 mt-3 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{s.description}</p>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
              VOYEZ LA <span className="text-blue-400">DIFFÉRENCE</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-xl mb-6">
              Un polissage professionnel et un traitement nano-céramique qui transforment l'apparence de votre véhicule de façon spectaculaire.
            </p>
            <Link href="/rendez-vous" className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-md font-semibold hover:bg-accent-hover transition-colors">
              Réserver votre traitement
            </Link>
          </motion.div>
        </div>
      </section>

      <Partners />

      <Testimonials />

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
              <span className="text-gray-900">FOIRE AUX </span><span className="text-accent">QUESTIONS</span>
            </h2>
          </motion.div>
          <div>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} question={faq.q} answer={faq.a} isOpen={openIndex === index} onClick={() => setOpenIndex(openIndex === index ? null : index)} />
            ))}
          </div>
          <div className="border-t border-gray-200 mt-12 pt-12 text-center">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900">PRÊT POUR UN ÉCLAT PARFAIT ?</h3>
            <p className="text-gray-700 mt-3">Réservez votre traitement de polissage et nano-céramique.</p>
            <Link href="/rendez-vous" className="inline-block mt-6 bg-accent text-white px-8 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors">
              Prendre un rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
