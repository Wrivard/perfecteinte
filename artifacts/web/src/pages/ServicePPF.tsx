import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageLayout } from "@/components/layout/PageLayout";
import { Shield, Check, Star } from "lucide-react";
import { useState } from "react";
import { AccordionItem } from "@/components/ui/accordion-custom";
import heroImg from "@assets/570606844_804977075474860_4894531562783451229_n_1774531645512.jpg";
import img1 from "@assets/559679573_796705672968667_6667683747001719488_n_1774531645511.jpg";
import img2 from "@assets/560145854_793100139995887_2888064327822015612_n_1774531645512.jpg";
import img3 from "@assets/558612629_793100233329211_2137356822840990595_n_1774533881229.jpg";
import tImg1 from "@assets/481287887_624839100155326_2322975325486587163_n_1774531645509.jpg";
import tImg2 from "@assets/552939218_780287794610455_6908565764177471907_n_1774531645511.jpg";
import tImg3 from "@assets/566216853_802767049029196_5018593656071286537_n_1774531645512.jpg";

const benefits = [
  { title: "Protection invisible", description: "Film transparent qui préserve l'apparence d'origine de votre peinture." },
  { title: "Auto-cicatrisant", description: "Les micro-rayures disparaissent avec la chaleur du soleil ou de l'eau chaude." },
  { title: "Résistance aux éclats", description: "Protège contre les éclats de pierre, les débris routiers et les insectes." },
  { title: "Durabilité supérieure", description: "Protection garantie jusqu'à 10 ans avec un entretien approprié." },
  { title: "Valeur préservée", description: "Maintient la peinture d'origine intacte, préservant la valeur de revente." },
  { title: "Installation certifiée", description: "Posé par des techniciens formés et certifiés pour un résultat parfait." },
];

const faqs = [
  { q: "Qu'est-ce que le PPF exactement ?", a: "Le PPF (Paint Protection Film) est un film de polyuréthane transparent appliqué sur la carrosserie de votre véhicule. Il protège la peinture contre les éclats de pierre, les rayures, les débris routiers et les intempéries." },
  { q: "Combien de temps dure l'installation ?", a: "L'installation complète prend généralement entre 2 et 5 jours selon la couverture choisie (partielle ou complète). Un travail minutieux est essentiel pour un résultat impeccable." },
  { q: "Le PPF change-t-il la couleur de ma peinture ?", a: "Non, le film PPF de qualité professionnelle est pratiquement invisible une fois installé. Il offre même un léger effet brillant qui rehausse l'apparence de la peinture." },
  { q: "Peut-on retirer le PPF sans endommager la peinture ?", a: "Oui, le PPF peut être retiré proprement sans endommager la peinture d'origine, à condition d'être retiré par un professionnel qualifié." },
  { q: "Quelle est la garantie sur le PPF ?", a: "Nous offrons une garantie allant jusqu'à 10 ans selon le produit choisi, couvrant le jaunissement, le craquelage et le décollement du film." },
];

const testimonials = [
  { quote: "Le PPF a complètement protégé mon capot d'un gros éclat de pierre. Investissement rentabilisé!", author: "Sophie Dubois", image: tImg1 },
  { quote: "Installation impeccable, on ne voit absolument pas le film. Travail de pro!", author: "Martin Côté", image: tImg2 },
  { quote: "Après 3 ans, la peinture sous le PPF est comme neuve. Extraordinaire.", author: "Julie Gagnon", image: tImg3 },
];

export default function ServicePPF() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PageLayout>
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[280px] sm:min-h-[350px] flex items-center overflow-hidden -mt-[120px] pt-[120px]">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Protection de peinture PPF" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-md flex items-center justify-center">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white uppercase leading-tight">
              PROTECTION DE<br /><span className="text-blue-400">PEINTURE PPF</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mt-4 max-w-xl">
              La meilleure protection invisible pour préserver l'intégrité de votre peinture.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                UNE PROTECTION <span className="text-accent">INVISIBLE</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                La pellicule de protection de peinture (PPF) est la solution ultime pour protéger votre véhicule contre les agressions quotidiennes de la route. Ce film de polyuréthane transparent, auto-cicatrisant et résistant aux UV, préserve l'éclat de votre peinture d'origine tout en étant pratiquement invisible.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                Notre équipe certifiée utilise les meilleurs films PPF du marché pour une installation sans défaut, adaptée à chaque modèle de véhicule.
              </p>
              <Link href="/rendez-vous" className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors">
                Demander une soumission
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-md overflow-hidden">
              <img src={img1} alt="Application PPF" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 leading-tight">
              POURQUOI <span className="text-accent">LE PPF ?</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-md p-6 md:p-8 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-accent/10 rounded-md flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative h-[250px] sm:h-[300px] md:h-[350px] rounded-md overflow-hidden">
              <img src={img2} alt="Résultat PPF" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative h-[250px] sm:h-[300px] md:h-[350px] rounded-md overflow-hidden">
              <img src={img3} alt="PPF installé" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

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
            <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900">PRÊT À PROTÉGER VOTRE VÉHICULE ?</h3>
            <p className="text-gray-700 mt-3">Contactez-nous pour une soumission personnalisée.</p>
            <Link href="/rendez-vous" className="inline-block mt-6 bg-accent text-white px-8 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors">
              Prendre un rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
