import { motion } from "framer-motion";
import { Link } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageLayout } from "@/components/layout/PageLayout";
import { Partners } from "@/components/sections/Partners";
import { SectionTagline } from "@/components/ui/SectionTagline";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { Testimonials } from "@/components/sections/Testimonials";
import { User, Check } from "lucide-react";
import { useState } from "react";
import { AccordionItem } from "@/components/ui/accordion-custom";
import heroImg from "@assets/485048289_636737895632113_6749648947738676055_n_1774531645510.jpg";
import img1 from "@assets/552939218_780287794610455_6908565764177471907_n_1774531645511.jpg";
import img2 from "@assets/566216853_802767049029196_5018593656071286537_n_1774531645512.jpg";

const services = [
  "Lavage complet intérieur et extérieur",
  "Polissage et correction de peinture",
  "Application de nano-céramique",
  "Installation de pellicule PPF",
  "Traitement de cuir et tissus",
  "Restauration de phares",
  "Décontamination complète",
  "Traitement anti-odeur",
];

const values = [
  { title: "Passion", description: "Chaque véhicule est traité avec la même passion et le même dévouement qu'au premier jour." },
  { title: "Expertise", description: "Plus de 10 ans d'expérience dans le milieu automobile et une formation continue pour maîtriser les dernières techniques." },
  { title: "Perfectionnisme", description: "Aucun compromis sur la qualité. Chaque détail compte pour un résultat impeccable." },
  { title: "Confiance", description: "Une relation de confiance bâtie avec chaque client, un véhicule à la fois." },
];

const faqs = [
  { q: "En quoi consiste le service pare-pierre ?", a: "Le service pare-pierre est un traitement de protection haut de gamme qui protège votre carrosserie contre les éclats de pierre, les débris de route et les rayures. Chaque véhicule bénéficie d'une attention méticuleuse et d'un savoir-faire unique." },
  { q: "Quels services sont inclus ?", a: "Ce service couvre l'ensemble de nos prestations de détailing : lavage de luxe, polissage, nano-céramique et installation de PPF. La spécialité est la correction de peinture et les finitions haut de gamme." },
  { q: "Comment réserver ce service ?", a: "Vous pouvez demander le service pare-pierre lors de la prise de rendez-vous. Selon la disponibilité, nous ferons notre possible pour répondre à votre demande." },
  { q: "Quelle est l'expérience derrière ce service ?", a: "Notre équipe cumule plus de 10 ans d'expérience dans le milieu automobile. Nous sommes formés aux techniques les plus avancées et utilisons les produits les plus performants du marché." },
];

export default function ServiceParPierre() {
  usePageMeta("Service Pare-Pierre", "Service personnalisé de pare-pierre pour protéger votre véhicule contre les éclats et les débris. Spécialiste en protection haut de gamme à La Malbaie.");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PageLayout>
      <FAQSchema faqs={faqs} />
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[280px] sm:min-h-[350px] flex items-center overflow-hidden -mt-[120px] pt-[120px]">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Service personnalisé de détailing automobile par Pierre" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-md flex items-center justify-center">
                <User className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white uppercase leading-tight">
              PARE-<span className="text-blue-400">PIERRE</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mt-4 max-w-xl">
              Un service personnalisé par notre expert passionné du détailing automobile.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionTagline text="Expertise" center={false} />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                L'EXPERTISE <span className="text-accent">PERSONNALISÉE</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Le service pare-pierre incarne la passion et le perfectionnisme qui définissent Esthétique Auto Pascal Pilote. Avec une expertise pointue et une attention méticuleuse aux détails, notre équipe offre un service sur mesure qui protège chaque véhicule.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                Que ce soit pour un lavage de luxe, une correction de peinture ou une protection céramique, ce service apporte un savoir-faire unique et une touche personnelle à chaque projet.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {services.map((s, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">{s}</span>
                  </li>
                ))}
              </ul>
              <Link href="/rendez-vous" className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors">
                Prendre un rendez-vous
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-md overflow-hidden">
              <img src={img1} alt="Détailing automobile personnalisé par notre expert" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionTagline text="Nos valeurs" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 leading-tight">
              NOS <span className="text-accent">VALEURS</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-md p-6 md:p-8 shadow-sm border border-gray-100 text-center">
                <h3 className="text-lg md:text-xl font-display font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[300px] sm:h-[350px] md:h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={img2} alt="Finition haut de gamme sur véhicule de luxe" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionTagline text="Détailing" light center={false} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
              CHAQUE DÉTAIL <span className="text-blue-400">COMPTE</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-xl mb-6">
              Notre équipe apporte un œil expert et une touche personnelle à chaque projet. Un service sur mesure pour des résultats exceptionnels.
            </p>
            <Link href="/rendez-vous" className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-md font-semibold hover:bg-accent-hover transition-colors">
              Prendre un rendez-vous
            </Link>
          </motion.div>
        </div>
      </section>

      <Partners />

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
            <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900">ENVIE D'UN SERVICE PERSONNALISÉ ?</h3>
            <p className="text-gray-700 mt-3">Réservez votre rendez-vous dès maintenant.</p>
            <Link href="/rendez-vous" className="inline-block mt-6 bg-accent text-white px-8 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors">
              Prendre un rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
