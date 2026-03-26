import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageLayout } from "@/components/layout/PageLayout";
import { Calendar, Phone, Mail, MapPin, Clock } from "lucide-react";
import heroImg from "@assets/535472325_752143490758219_186388118827140535_n_1774531645511.jpg";

export default function RendezVous() {
  return (
    <PageLayout>
      <section className="relative h-[50vh] min-h-[350px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white uppercase leading-tight">
              PRENDRE UN <span className="text-accent">RENDEZ-VOUS</span>
            </h1>
            <p className="text-xl text-white/80 mt-4 max-w-xl">
              Réservez votre créneau directement en ligne pour un service rapide et personnalisé.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#1a1a1a] mb-4 leading-tight">
                  RÉSERVEZ EN <span className="text-accent">LIGNE</span>
                </h2>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                  Choisissez la date et l'heure qui vous conviennent le mieux.
                </p>
              </motion.div>

              <motion.div
                className="bg-[#f9fafb] rounded-md border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3 bg-accent text-white px-6 py-4">
                  <Calendar className="w-6 h-6" />
                  <span className="font-semibold text-lg">Calendrier de réservation</span>
                </div>

                <div className="flex flex-col items-center justify-center min-h-[500px] p-8 text-center">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    <Calendar className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#1a1a1a] mb-3">
                    Google Calendar
                  </h3>
                  <p className="text-gray-500 text-lg max-w-md mb-6">
                    L'intégration Google Calendar sera disponible ici pour vous permettre de réserver directement votre rendez-vous en ligne.
                  </p>
                  <div className="bg-white border border-dashed border-accent/40 rounded-md p-6 w-full max-w-lg">
                    <p className="text-sm text-gray-400 font-mono">
                      &lt;iframe src="https://calendar.google.com/calendar/appointments/..." /&gt;
                    </p>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    Embed Google Calendar — à configurer prochainement
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div
                className="bg-[#1a1a1a] rounded-md p-8 text-white"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-display font-bold mb-6">
                  PRÊT À <span className="text-accent">BRILLER</span> ?
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <span className="text-accent text-xs uppercase tracking-widest font-semibold block mb-1">Téléphone</span>
                      <a href="tel:4186655871" className="text-white font-medium hover:text-accent transition-colors">
                        (418) 665-5871
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <span className="text-accent text-xs uppercase tracking-widest font-semibold block mb-1">Courriel</span>
                      <a href="mailto:Pascal.1993@live.ca" className="text-white font-medium hover:text-accent transition-colors">
                        Pascal.1993@live.ca
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <span className="text-accent text-xs uppercase tracking-widest font-semibold block mb-1">Adresse</span>
                      <p className="text-white font-medium">2535 boulevard Comporté,<br />La Malbaie, Québec</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <span className="text-accent text-xs uppercase tracking-widest font-semibold block mb-1">Horaires</span>
                      <p className="text-white font-medium">Lun - Ven: 8h - 17h</p>
                      <p className="text-white/70 text-sm">Sam: Sur rendez-vous</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-[#f9fafb] rounded-md p-8 border border-gray-200"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <h3 className="text-lg font-display font-bold text-[#1a1a1a] mb-3">Préférez appeler ?</h3>
                <p className="text-gray-500 mb-4 leading-relaxed">
                  Si vous préférez nous parler directement, n'hésitez pas à nous contacter par téléphone.
                </p>
                <a
                  href="tel:4186655871"
                  className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-md font-semibold text-sm hover:bg-accent-hover transition-colors w-full justify-center"
                >
                  <Phone className="w-4 h-4" />
                  Appeler maintenant
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
