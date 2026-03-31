import { motion } from "framer-motion";
import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
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
              PRÊT À <span className="text-blue-400">BRILLER</span>
            </h2>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-lg">
              Votre véhicule mérite le meilleur traitement. Parlons de comment nous pouvons redonner de l'éclat à votre automobile.
            </p>

            <div className="space-y-6 md:space-y-8 mt-8 md:mt-12">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-400 shrink-0 mt-1" />
                <div>
                  <span className="text-blue-400 text-xs uppercase tracking-widest font-semibold block mb-1">Courriel</span>
                  <a href="mailto:Pascal.1993@live.ca" className="text-white text-base md:text-lg font-medium hover:text-blue-400 transition-colors break-all">
                    Pascal.1993@live.ca
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-400 shrink-0 mt-1" />
                <div>
                  <span className="text-blue-400 text-xs uppercase tracking-widest font-semibold block mb-1">Téléphone</span>
                  <a href="tel:4186655871" className="text-white text-base md:text-lg font-medium hover:text-blue-400 transition-colors">
                    (418) 665-5871
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-400 shrink-0 mt-1" />
                <div>
                  <span className="text-blue-400 text-xs uppercase tracking-widest font-semibold block mb-1">Adresse</span>
                  <p className="text-white text-base md:text-lg font-medium">
                    2535 boulevard Comporté,<br />La Malbaie, Québec
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-10">
              <Link
                href="/rendez-vous"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-md font-semibold text-base transition-colors"
              >
                Prendre un rendez-vous
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2654.8!2d-70.1536!3d47.6536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4c8a0e6f0f0f0f0f%3A0x0!2s2535+Boulevard+Comport%C3%A9%2C+La+Malbaie%2C+QC!5e0!3m2!1sfr!2sca!4v1700000000000!5m2!1sfr!2sca"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte La Malbaie"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
