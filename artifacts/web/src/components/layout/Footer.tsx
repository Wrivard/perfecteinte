import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@assets/425261687_389413763697862_6688968440363193968_n-removebg-previ_1774531438969.png";

export function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <img src={logo} alt="Esthétique Auto PP" className="h-20 brightness-0 invert opacity-90" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              L'excellence en esthétique automobile à Québec. Protection céramique, correction de peinture et detailing professionnel pour préserver l'éclat de votre véhicule.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6 uppercase tracking-wider relative inline-block">
              Liens Rapides
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {['Accueil', 'Services', 'Processus', 'Galerie', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
                    <span className="text-accent/50 text-xs">▹</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6 uppercase tracking-wider relative inline-block">
              Coordonnées
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Québec, QC<br/>(Sur rendez-vous uniquement)</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:4186701613" className="hover:text-white transition-colors">418-670-1613</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@esthetiqueautopp.com" className="hover:text-white transition-colors">info@esthetiqueautopp.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Esthétique Auto Pascal Pilote Inc. Tous droits réservés.
          </p>
          <div className="text-gray-500 text-sm flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Termes et conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
