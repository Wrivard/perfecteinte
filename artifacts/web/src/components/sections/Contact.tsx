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
              PRÊT À <span className="text-[#D4AF37]">BRILLER</span>
            </h2>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-lg">
              Votre véhicule mérite le meilleur traitement. Parlons de comment nous pouvons redonner de l'éclat à votre automobile.
            </p>

            <div className="space-y-6 md:space-y-8 mt-8 md:mt-12">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold block mb-1">Courriel</span>
                  <a href="mailto:esthetiquea.v@gmail.com" className="text-white text-base md:text-lg font-medium hover:text-[#D4AF37] transition-colors break-all">
                    esthetiquea.v@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold block mb-1">Téléphone</span>
                  <a href="tel:4189578168" className="text-white text-base md:text-lg font-medium hover:text-[#D4AF37] transition-colors">
                    (418) 957-8168
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold block mb-1">Adresse</span>
                  <p className="text-white text-base md:text-lg font-medium">
                    20 Rue de la Montagne, porte 2,<br />Sainte-Claire, QC G0R 2V0
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-10">
              <Link
                href="/rendez-vous"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-[#1b1b1b] px-8 py-4 rounded-md font-semibold text-base transition-colors"
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
              src="https://www.google.com/maps?q=20+Rue+de+la+Montagne,+Sainte-Claire,+QC+G0R+2V0&hl=fr&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte Sainte-Claire"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
