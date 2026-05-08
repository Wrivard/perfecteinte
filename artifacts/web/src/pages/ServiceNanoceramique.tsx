import { motion } from "framer-motion";
import { Link } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageLayout } from "@/components/layout/PageLayout";
import { Partners } from "@/components/sections/Partners";
import { SectionTagline } from "@/components/ui/SectionTagline";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { Shield, Check, Gem, ShieldCheck, Wrench, BadgeCheck, Settings2 } from "lucide-react";
import { Testimonials } from "@/components/sections/Testimonials";
import { useState } from "react";
import { AccordionItem } from "@/components/ui/accordion-custom";
import heroImg from "@/assets/optimized-photos/IMG_9584.webp";
import img1 from "@/assets/optimized-photos/IMG_4953.webp";
import img2 from "@/assets/optimized-photos/IMG_6900.webp";
import imgNano from "@/assets/optimized-photos/IMG_4953.webp";
import imgPPF from "@assets/img-1647-01_1778252857606.webp";

const subServices = [
  {
    title: "Polissage & Nano Céramique",
    description: "La combinaison ultime : un polissage complet pour corriger toutes les imperfections, suivi d'un revêtement nanocéramique qui offre une protection d'une durabilité exceptionnelle, un effet hydrophobe supérieur et un éclat inégalé.",
    Icon: Gem,
    image: imgNano,
    alt: "Application de revêtement nanocéramique",
    features: [
      "Polissage multi-étapes complet",
      "Revêtement nanocéramique professionnel",
      "Protection jusqu'à 5 ans",
      "Effet hydrophobe supérieur",
      "Résistance aux rayures légères",
      "Brillance profonde et durable",
    ],
  },
  {
    title: "Installation de pare-pierre (PPF)",
    description: "La pellicule de protection de peinture (PPF) est la solution ultime contre les éclats de pierre, les débris routiers et les rayures. Film auto-cicatrisant et pratiquement invisible, installé par notre technicien certifié par Labocosmetica.",
    Icon: ShieldCheck,
    image: imgPPF,
    alt: "Installation de pare-pierre PPF",
    features: [
      "Film transparent auto-cicatrisant",
      "Protection contre les éclats de pierre",
      "Pratiquement invisible",
      "Garantie longue durée",
      "Valeur de revente préservée",
      "Certifié installateur par Labocosmetica",
    ],
  },
];

const benefits = [
  {
    Icon: Shield,
    title: "Protection maximale",
    description: "La combinaison PPF + nanocéramique offre la protection la plus complète disponible sur le marché — une barrière physique contre les éclats et chimique contre les contaminants.",
  },
  {
    Icon: BadgeCheck,
    title: "Technicien certifié",
    description: "Notre installateur est certifié pare-pierre (PPF) par Labocosmetica, gage absolu de qualité, de précision et d'expertise reconnue à l'international.",
  },
  {
    Icon: Settings2,
    title: "Technologie avancée",
    description: "Nous travaillons exclusivement avec des films premium et des céramiques de dernière génération, sélectionnés pour leur durabilité et leur transparence.",
  },
  {
    Icon: Wrench,
    title: "Sur mesure",
    description: "Chaque installation est planifiée et adaptée à votre véhicule : zones partielles ou véhicule complet, selon le niveau de protection souhaité.",
  },
];

const faqs = [
  { q: "Qu'est-ce que la nanocéramique ?", a: "Un revêtement nanocéramique est une couche de protection liquide qui se lie chimiquement à la peinture de votre véhicule. Une fois durci, il crée une surface ultra-dure, hydrophobe et résistante qui protège pendant des années." },
  { q: "Qu'est-ce que le PPF (pare-pierre) ?", a: "Le PPF (Paint Protection Film) est un film de polyuréthane transparent appliqué sur la carrosserie. Il protège la peinture contre les éclats de pierre, les rayures et les débris routiers tout en étant pratiquement invisible." },
  { q: "Peut-on combiner le PPF et la nanocéramique ?", a: "Absolument ! C'est même la combinaison recommandée. Le PPF protège contre les impacts physiques, et la nanocéramique est appliquée par-dessus pour une protection chimique et une facilité d'entretien maximale." },
  { q: "Combien de temps dure l'installation du PPF ?", a: "L'installation de pare-pierre varie selon la surface à couvrir (zones partielles ou véhicule complet). Comptez généralement 1 à plusieurs jours selon votre véhicule." },
  { q: "Est-ce que le PPF change l'apparence de ma voiture ?", a: "Non, le PPF est pratiquement invisible une fois installé. Il offre même un léger effet brillant qui rehausse l'apparence naturelle de votre peinture." },
  { q: "Quelle est la garantie sur ces services ?", a: "Les garanties varient selon les produits et films utilisés. Contactez-nous pour discuter des options spécifiques à votre véhicule et à vos besoins de protection." },
];

export default function ServiceNanoceramique() {
  usePageMeta("Nanocéramique", "Polissage & nano-céramique et installation de pare-pierre (PPF) à La Malbaie. Technicien certifié par Labocosmetica. Protection maximale pour votre véhicule.");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PageLayout>
      <FAQSchema faqs={faqs} />
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[280px] sm:min-h-[350px] flex items-center overflow-hidden -mt-[120px] pt-[120px]">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Nanocéramique et pare-pierre PPF" className="w-full h-full object-cover" />
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
              NANOCÉRAMIQUE<br /><span className="text-blue-400">& PARE-PIERRE</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mt-4 max-w-xl">
              La protection la plus avancée pour votre véhicule — par un technicien certifié.
            </p>
          </motion.div>
        </div>
      </section>

      <Partners />

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionTagline text="Protection avancée" center={false} />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                LA PROTECTION <span className="text-accent">ULTIME</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                La nanocéramique et le pare-pierre (PPF) représentent le sommet de la protection automobile. Ensemble, ils offrent une barrière complète contre les éclats, les rayures, les UV, la pollution et les contaminants chimiques.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                Notre technicien est certifié installateur pare-pierre par <strong>Labocosmetica</strong>, garantissant une installation sans défaut et des résultats durables.
              </p>
              <Link href="/rendez-vous" className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors">
                Obtenir une soumission
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-md overflow-hidden">
              <img src={img1} alt="Installation PPF pare-pierre" className="w-full h-full object-cover" />
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
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionTagline text="Notre engagement" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 leading-tight">
              POURQUOI <span className="text-accent">NOUS CHOISIR</span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              Quatre raisons pour lesquelles nos clients nous confient leurs véhicules les plus précieux.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((b, i) => {
              const Icon = b.Icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#f9fafb] rounded-md p-6 md:p-8 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-md flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-accent" strokeWidth={1.75} />
                  </div>
                  <h4 className="text-lg md:text-xl font-display font-bold text-gray-900 mb-3">{b.title}</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{b.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative h-[300px] sm:h-[350px] md:h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={img2} alt="Véhicule protégé par pare-pierre" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionTagline text="Investissement" light center={false} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
              PROTÉGEZ VOTRE <span className="text-blue-400">INVESTISSEMENT</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-xl mb-6">
              Un film invisible et une céramique durable qui préservent la beauté et la valeur de votre véhicule pour des années à venir.
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
