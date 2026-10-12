import { motion } from "framer-motion";
import { Link } from "wouter";
import { Phone, MapPin, Shield, Clock } from "lucide-react";
import { SectionTagline } from "@/components/ui/SectionTagline";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTagline text="Contact" light center={false} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4">
              PRÊT À <span className="text-accent">PROTÉGER</span>
            </h2>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-lg">
              Du véhicule du quotidien aux sportives et exotiques, nous accueillons tous les véhicules pour le PPF et les vitres teintées.
            </p>

            <div className="space-y-6 md:space-y-8 mt-8 md:mt-12">
              <div className="flex items-start gap-4">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-accent shrink-0 mt-1" />
                <div>
                  <span className="text-accent text-xs uppercase tracking-widest font-semibold block mb-1">Expertise</span>
                  <p className="text-white text-base md:text-lg font-medium">Plus de 30 ans d'expérience</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-accent shrink-0 mt-1" />
                <div>
                  <span className="text-accent text-xs uppercase tracking-widest font-semibold block mb-1">Téléphone</span>
                  <a href="tel:4184503990" className="text-white text-base md:text-lg font-medium hover:text-accent transition-colors">
                    (418) 450-3990
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-accent shrink-0 mt-1" />
                <div>
                  <span className="text-accent text-xs uppercase tracking-widest font-semibold block mb-1">Adresse</span>
                  <p className="text-white text-base md:text-lg font-medium">
                    1950 Boulevard St-Jude,<br />Alma, QC
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-accent shrink-0 mt-1" />
                <div>
                  <span className="text-accent text-xs uppercase tracking-widest font-semibold block mb-1">Heures d’ouverture</span>
                  <p className="text-white text-base md:text-lg font-medium">Lundi au jeudi : 8 h à 17 h</p>
                  <p className="text-gray-300 text-sm md:text-base">Vendredi : 8 h à 12 h</p>
                  <p className="text-gray-300 text-sm md:text-base">Samedi et dimanche : fermé</p>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-10">
              <Link
                href="/rendez-vous"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-[#1b1b1b] px-8 py-4 rounded-md font-semibold text-base transition-colors"
              >
                Obtenir une soumission
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="rounded-md overflow-hidden min-h-[300px] sm:min-h-[350px] lg:min-h-[500px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <iframe
              data-cookieconsent="ignore"
              src="https://www.google.com/maps?q=1950+Boulevard+St-Jude,+Alma,+QC&hl=fr&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte de Perfecteinte à Alma"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
