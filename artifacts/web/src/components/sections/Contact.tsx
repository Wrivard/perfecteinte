import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-2 block">Nous Joindre</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            Contact & Localisation
          </h2>
          <div className="w-24 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          
          {/* Info Side */}
          <div className="w-full lg:w-2/5 p-10 lg:p-14 bg-navy text-white flex flex-col justify-center">
            <h3 className="text-2xl font-display font-bold mb-8">Informations de Contact</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 font-semibold mb-1">Téléphone</h4>
                  <p className="text-lg font-bold"><a href="tel:4186701613" className="hover:text-accent transition-colors">418-670-1613</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 font-semibold mb-1">Courriel</h4>
                  <p className="text-lg font-bold"><a href="mailto:info@esthetiqueautopp.com" className="hover:text-accent transition-colors break-all">info@esthetiqueautopp.com</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 font-semibold mb-1">Adresse</h4>
                  <p className="text-lg font-bold">Québec, QC</p>
                  <p className="text-sm text-gray-300 mt-1">Sur rendez-vous uniquement</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 font-semibold mb-1">Heures d'ouverture</h4>
                  <ul className="text-base font-medium space-y-1">
                    <li className="flex justify-between w-48"><span>Lun - Ven:</span> <span>8h - 18h</span></li>
                    <li className="flex justify-between w-48"><span>Samedi:</span> <span>9h - 16h</span></li>
                    <li className="flex justify-between w-48 text-accent"><span>Dimanche:</span> <span>Fermé</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="w-full lg:w-3/5 min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174828.66579224855!2d-71.43981881512404!3d46.85698379654157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb8968a05db8893%3A0x8fc52d63f0e83a03!2sQuebec%20City%2C%20QC!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '100%' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte de Québec"
              className="grayscale-[20%] contrast-125"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
