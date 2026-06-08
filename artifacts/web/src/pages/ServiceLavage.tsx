import { motion } from "framer-motion";
import { Link } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageLayout } from "@/components/layout/PageLayout";
import { Partners } from "@/components/sections/Partners";
import { SectionTagline } from "@/components/ui/SectionTagline";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { Droplets, Check, Brush, Sparkles, ShieldCheck } from "lucide-react";
import { Testimonials } from "@/components/sections/Testimonials";
import { useState } from "react";
import { AccordionItem } from "@/components/ui/accordion-custom";
import heroImg from "@/assets/optimized-photos/IMG_5191.webp";
import img1 from "@/assets/optimized-photos/IMG_3255.webp";
import img2 from "@/assets/optimized-photos/IMG_9345.webp";
import imgInt from "@/assets/optimized-photos/IMG_3255.webp";
import imgExt from "@/assets/optimized-photos/IMG_5246.webp";
import imgComplet from "@/assets/optimized-photos/IMG_8023.webp";
import imgDecont from "@/assets/optimized-photos/IMG_3308.webp";

const subServices = [
  {
    title: "Lavage intérieur",
    description: "Nettoyage complet de l'habitacle : aspiration, nettoyage des surfaces, traitement des cuirs et plastiques, vitres intérieures.",
    Icon: Brush,
    image: imgInt,
    alt: "Lavage intérieur d'un véhicule",
  },
  {
    title: "Lavage extérieur",
    description: "Lavage à la main avec produits professionnels, dégraissage, rinçage, séchage et traitement des jantes et pneus.",
    Icon: Droplets,
    image: imgExt,
    alt: "Lavage extérieur à la main",
  },
  {
    title: "Lavage intérieur & extérieur",
    description: "La combinaison complète : un véhicule impeccable de l'intérieur à l'extérieur pour un résultat optimal.",
    Icon: Sparkles,
    image: imgComplet,
    alt: "Véhicule lavé complètement",
  },
  {
    title: "Décontamination",
    description: "Élimination des contaminants ferreux et organiques incrustés dans la peinture. Idéal en complément du lavage extérieur pour une surface parfaitement saine.",
    Icon: ShieldCheck,
    image: imgDecont,
    alt: "Décontamination de la peinture",
  },
];

const features = [
  "Lavage à la main avec produits premium",
  "Nettoyage intérieur complet et minutieux",
  "Traitement des cuirs, plastiques et tissus",
  "Décontamination de la carrosserie",
  "Nettoyage des jantes et des pneus",
  "Traitement des vitres et rétroviseurs",
  "Aspiration complète et shampoing des tapis",
  "Séchage soigneux sans traces",
];

const faqs = [
  { q: "Quelle est la différence entre lavage intérieur et extérieur ?", a: "Le lavage intérieur comprend l'aspiration, le nettoyage des surfaces, cuirs, plastiques et vitres intérieures. Le lavage extérieur comprend le lavage à la main, les jantes, pneus et carrosserie. Vous pouvez choisir l'un ou l'autre, ou les deux ensemble." },
  { q: "Qu'est-ce que la décontamination ?", a: "La décontamination élimine les particules ferreuses (poussières de frein, rouille) et contaminants organiques incrustés dans la peinture que le lavage normal ne peut pas enlever. C'est une étape recommandée régulièrement pour préserver la santé de votre peinture." },
  { q: "Dois-je prendre rendez-vous ?", a: "Oui, nous recommandons fortement de prendre rendez-vous à l'avance pour vous garantir un créneau et un service optimal. Appelez-nous au (418) 957-8168 ou remplissez notre formulaire en ligne." },
  { q: "Quels produits utilisez-vous ?", a: "Nous utilisons exclusivement des produits professionnels haut de gamme, notamment de la gamme Labocosmetica et CarPro, respectueux de l'environnement et adaptés à chaque type de surface." },
  { q: "Est-ce que vous lavez aussi les VUS et camions ?", a: "Absolument ! Nous traitons tous types de véhicules : berlines, VUS, camions, véhicules de luxe et exotiques." },
];

export default function ServiceLavage() {
  usePageMeta("Lavage", "Service de lavage automobile intérieur, extérieur et décontamination à Sainte-Claire. Lavage à la main avec produits professionnels haut de gamme.");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PageLayout>
      <FAQSchema faqs={faqs} />
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[280px] sm:min-h-[350px] flex items-center overflow-hidden -mt-[120px] pt-[120px]">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Lavage automobile" className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-md flex items-center justify-center">
                <Droplets className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white uppercase leading-tight">
              LAVAGE<br /><span className="text-[#D4AF37]">AUTOMOBILE</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mt-4 max-w-xl">
              Un nettoyage complet qui va bien au-delà du simple lavage pour un résultat impeccable.
            </p>
          </motion.div>
        </div>
      </section>

      <Partners />

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionTagline text="Expertise" center={false} />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                UN LAVAGE <span className="text-accent">D'EXCEPTION</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Chez Esthétique Auto A.V, le lavage automobile est un art. Nous traitons chaque surface avec des produits professionnels haut de gamme pour un résultat qui dépasse vos attentes. Que ce soit pour un entretien régulier ou un nettoyage en profondeur, votre véhicule retrouvera son éclat d'origine.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/rendez-vous" className="inline-flex items-center bg-accent text-[#1b1b1b] px-6 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors">
                Prendre un rendez-vous
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-md overflow-hidden">
              <img loading="lazy" decoding="async" src={img1} alt="Lavage intérieur" className="w-full h-full object-cover" />
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
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Choisissez la formule qui correspond à vos besoins.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img loading="lazy" decoding="async" src={svc.image} alt={svc.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-md flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6 text-accent" strokeWidth={1.75} />
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">{svc.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-1">{svc.description}</p>
                    <Link href="/rendez-vous" className="inline-flex items-center justify-center w-full bg-accent text-[#1b1b1b] px-6 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors text-sm">
                      Obtenir une soumission
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative h-[300px] sm:h-[350px] md:h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy" decoding="async" src={img2} alt="Résultat lavage impeccable" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionTagline text="Garantie" light center={false} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
              UN RÉSULTAT <span className="text-[#D4AF37]">GARANTI</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-xl mb-6">
              Chaque véhicule est traité avec la même passion et le même souci du détail. Votre satisfaction est notre priorité.
            </p>
            <Link href="/rendez-vous" className="inline-flex items-center bg-accent text-[#1b1b1b] px-8 py-4 rounded-md font-semibold hover:bg-accent-hover transition-colors">
              Réserver votre lavage
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
            <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900">VOUS AVEZ D'AUTRES QUESTIONS ?</h3>
            <p className="text-gray-700 mt-3">Nous sommes là pour vous aider.</p>
            <Link href="/rendez-vous" className="inline-block mt-6 bg-accent text-[#1b1b1b] px-8 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors">
              Prendre un rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
