import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageLayout } from "@/components/layout/PageLayout";
import { Partners } from "@/components/sections/Partners";
import { User, Check, Star } from "lucide-react";
import { useState } from "react";
import { AccordionItem } from "@/components/ui/accordion-custom";
import heroImg from "@assets/485048289_636737895632113_6749648947738676055_n_1774531645510.jpg";
import img1 from "@assets/552939218_780287794610455_6908565764177471907_n_1774531645511.jpg";
import img2 from "@assets/566216853_802767049029196_5018593656071286537_n_1774531645512.jpg";
import img3 from "@assets/481287887_624839100155326_2322975325486587163_n_1774531645509.jpg";
import tImg1 from "@assets/515464037_717072027598699_7656154476338834597_n_1774531645510.jpg";
import tImg2 from "@assets/532949601_746227078016527_8012720562132951420_n_1774531645511.jpg";
import tImg3 from "@assets/535472325_752143490758219_186388118827140535_n_1774531645511.jpg";

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
  { title: "Expertise", description: "Des années d'expérience et de formation continue pour maîtriser les dernières techniques." },
  { title: "Perfectionnisme", description: "Aucun compromis sur la qualité. Chaque détail compte pour un résultat impeccable." },
  { title: "Confiance", description: "Une relation de confiance bâtie avec chaque client, un véhicule à la fois." },
];

const faqs = [
  { q: "Qui est Pierre ?", a: "Pierre est un membre clé de notre équipe, reconnu pour son expertise exceptionnelle et son souci du détail incomparable. Il apporte une touche personnelle et un savoir-faire unique à chaque véhicule qu'il traite." },
  { q: "Quels services Pierre offre-t-il ?", a: "Pierre offre l'ensemble de nos services de détailing : lavage de luxe, polissage, nano-céramique et installation de PPF. Sa spécialité est la correction de peinture et les finitions haut de gamme." },
  { q: "Peut-on demander Pierre spécifiquement ?", a: "Oui, vous pouvez demander que Pierre s'occupe personnellement de votre véhicule lors de la prise de rendez-vous. Selon la disponibilité, nous ferons notre possible pour répondre à votre demande." },
  { q: "Quelle est l'expérience de Pierre ?", a: "Pierre cumule plusieurs années d'expérience dans le domaine du détailing automobile. Il est formé aux techniques les plus avancées et utilise les produits les plus performants du marché." },
];

const testimonials = [
  { quote: "Pierre a un œil exceptionnel pour la finition. Mon véhicule n'a jamais été aussi beau.", author: "Sophie Dubois", image: tImg1 },
  { quote: "Le travail de Pierre est tout simplement impeccable. Je ne fais confiance qu'à lui.", author: "Martin Côté", image: tImg2 },
  { quote: "Pierre prend le temps de bien faire les choses. Résultat au-delà de mes attentes.", author: "Julie Gagnon", image: tImg3 },
];

export default function ServiceParPierre() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PageLayout>
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[280px] sm:min-h-[350px] flex items-center overflow-hidden -mt-[120px] pt-[120px]">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Par Pierre" className="w-full h-full object-cover" />
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
              PAR <span className="text-blue-400">PIERRE</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mt-4 max-w-xl">
              Un service personnalisé par un expert passionné du détailing automobile.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                L'EXPERTISE <span className="text-accent">PERSONNALISÉE</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Pierre incarne la passion et le perfectionnisme qui définissent Esthétique Auto Pascal Pilote. Avec son expertise pointue et son attention méticuleuse aux détails, il offre un service sur mesure qui transforme chaque véhicule.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                Que ce soit pour un lavage de luxe, une correction de peinture ou une protection céramique, Pierre apporte un savoir-faire unique et une touche personnelle à chaque projet.
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
                Réserver avec Pierre
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-md overflow-hidden">
              <img src={img1} alt="Travail de Pierre" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 leading-tight">
              SES <span className="text-accent">VALEURS</span>
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

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative h-[250px] sm:h-[300px] md:h-[350px] rounded-md overflow-hidden">
              <img src={img2} alt="Réalisation de Pierre" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative h-[250px] sm:h-[300px] md:h-[350px] rounded-md overflow-hidden">
              <img src={img3} alt="Finition par Pierre" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <Partners />

      <section className="py-16 md:py-20 lg:py-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
              <span className="text-accent">TÉMOIGNAGES</span> <span className="text-gray-900">CLIENTS</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative h-[350px] sm:h-[380px] md:h-[420px] rounded-md overflow-hidden">
                <img src={t.image} alt={t.author} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex gap-1 text-blue-400 mb-3">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 md:w-5 md:h-5 fill-current" />)}
                  </div>
                  <p className="text-white text-base md:text-lg leading-relaxed mb-4">"{t.quote}"</p>
                  <p className="text-white font-semibold text-sm md:text-base">{t.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900">ENVIE DE L'EXPERTISE DE PIERRE ?</h3>
            <p className="text-gray-700 mt-3">Réservez votre rendez-vous personnalisé dès maintenant.</p>
            <Link href="/rendez-vous" className="inline-block mt-6 bg-accent text-white px-8 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors">
              Réserver avec Pierre
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
