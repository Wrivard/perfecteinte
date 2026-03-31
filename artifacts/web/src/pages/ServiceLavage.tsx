import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageLayout } from "@/components/layout/PageLayout";
import { Partners } from "@/components/sections/Partners";
import { Droplets, Check, Star } from "lucide-react";
import { useState } from "react";
import { AccordionItem } from "@/components/ui/accordion-custom";
import heroImg from "@assets/526917186_739427728696462_1785754575991955122_n_1774531645511.jpg";
import img1 from "@assets/481210775_625629666742936_5403171954558065410_n_1774531645509.jpg";
import img2 from "@assets/481287105_622811947024708_4552150963501534299_n_1774531645509.jpg";

import tImg1 from "@assets/515464037_717072027598699_7656154476338834597_n_1774531645510.jpg";
import tImg2 from "@assets/532949601_746227078016527_8012720562132951420_n_1774531645511.jpg";
import tImg3 from "@assets/535472325_752143490758219_186388118827140535_n_1774531645511.jpg";

const features = [
  "Lavage extérieur à la main avec produits premium",
  "Nettoyage intérieur complet et minutieux",
  "Traitement des cuirs, plastiques et tissus",
  "Décontamination de la carrosserie",
  "Protection des surfaces traitées",
  "Nettoyage des jantes et des pneus",
  "Traitement des vitres et rétroviseurs",
  "Aspiration complète et shampoing des tapis",
];

const packages = [
  {
    name: "Entretien Essentiel",
    description: "Un lavage complet à la main pour redonner de l'éclat à votre véhicule.",
    features: ["Lavage extérieur à la main", "Aspiration intérieure", "Nettoyage des vitres", "Traitement des pneus"],
  },
  {
    name: "Entretien Premium",
    description: "Un nettoyage approfondi intérieur et extérieur pour un véhicule impeccable.",
    features: ["Tout de l'Essentiel", "Shampoing des tapis et sièges", "Traitement des cuirs et plastiques", "Décontamination carrosserie", "Cire protectrice"],
  },
  {
    name: "Entretien de Luxe",
    description: "Le traitement ultime pour les propriétaires exigeants qui veulent le meilleur.",
    features: ["Tout du Premium", "Polissage léger", "Traitement nano-hydrophobe", "Protection longue durée", "Parfum d'ambiance premium", "Inspection complète des surfaces"],
  },
];

const faqs = [
  { q: "Combien de temps dure un lavage complet ?", a: "Un lavage complet prend entre 2 et 4 heures selon le forfait choisi et l'état du véhicule. Le forfait de luxe peut prendre jusqu'à une journée complète." },
  { q: "Dois-je prendre rendez-vous ?", a: "Oui, nous recommandons fortement de prendre rendez-vous à l'avance pour vous garantir un créneau et un service optimal. Appelez-nous au (418) 665-5871." },
  { q: "Quels produits utilisez-vous ?", a: "Nous utilisons exclusivement des produits professionnels haut de gamme, respectueux de l'environnement et adaptés à chaque type de surface." },
  { q: "Est-ce que vous lavez aussi les VUS et camions ?", a: "Absolument ! Nous traitons tous types de véhicules : berlines, VUS, camions, véhicules de luxe et exotiques." },
];

const testimonials = [
  { quote: "Mon véhicule n'a jamais été aussi propre. Un service exceptionnel du début à la fin.", author: "Éric Laforce", image: tImg1 },
  { quote: "Le forfait de luxe en vaut chaque dollar. Résultat spectaculaire!", author: "Caroline Tremblay", image: tImg2 },
  { quote: "Pascal et son équipe ont un souci du détail incroyable.", author: "Michel Bouchard", image: tImg3 },
];

export default function ServiceLavage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PageLayout>
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[280px] sm:min-h-[350px] flex items-center overflow-hidden -mt-[120px] pt-[120px]">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Lavage automobile" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-md flex items-center justify-center">
                <Droplets className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white uppercase leading-tight">
              LAVAGE AUTO &<br /><span className="text-blue-400">ENTRETIEN DE LUXE</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mt-4 max-w-xl">
              Un nettoyage complet qui va bien au-delà du simple lavage pour un résultat impeccable.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                UN LAVAGE <span className="text-accent">D'EXCEPTION</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Chez Esthétique Auto Pascal Pilote, le lavage automobile est un art. Nous traitons chaque surface avec des produits professionnels haut de gamme pour un résultat qui dépasse vos attentes. Que ce soit pour un entretien régulier ou un nettoyage en profondeur, votre véhicule retrouvera son éclat d'origine.
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
              <img src={img1} alt="Lavage intérieur" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 leading-tight">
              NOS <span className="text-accent">FORFAITS</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Choisissez le forfait qui correspond le mieux à vos besoins.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-md p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 text-sm md:text-base mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-gray-700 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/rendez-vous" className="inline-flex items-center justify-center w-full bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors text-sm">
                  Prendre un rendez-vous
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[300px] sm:h-[350px] md:h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={img2} alt="Résultat lavage impeccable" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
              UN RÉSULTAT <span className="text-blue-400">GARANTI</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-xl mb-6">
              Plus de 1 500 véhicules lavés avec la même passion et le même souci du détail. Votre satisfaction est notre priorité.
            </p>
            <Link href="/rendez-vous" className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-md font-semibold hover:bg-accent-hover transition-colors">
              Réserver votre lavage
            </Link>
          </motion.div>
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
            <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900">VOUS AVEZ D'AUTRES QUESTIONS ?</h3>
            <p className="text-gray-700 mt-3">Nous sommes là pour vous aider.</p>
            <Link href="/rendez-vous" className="inline-block mt-6 bg-accent text-white px-8 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors">
              Prendre un rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
