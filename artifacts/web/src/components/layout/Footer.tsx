import { Link } from "wouter";
import { Facebook, Instagram } from "lucide-react";
import logo from "@assets/425261687_389413763697862_6688968440363193968_n-removebg-previ_1774531438969.png";
import kuaLogo from "@assets/black-letter-kua-logo_1775680036268.png";

export function Footer() {
  return (
    <footer className="bg-white pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16 mb-10 md:mb-12">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <img src={logo} alt="Esthétique Auto PP" className="h-16 md:h-20" />
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-1">Adresse</h4>
              <p className="text-sm text-gray-700 leading-relaxed">2535 boulevard Comporté,<br />La Malbaie, Québec</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-1">Contact</h4>
              <p className="text-sm text-gray-700">(418) 665-5871</p>
              <p className="text-sm text-gray-700 break-all">Pascal.1993@live.ca</p>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/profile.php?id=100078877238175" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-600 hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-600 hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase">Navigation</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-gray-700 hover:text-accent transition-colors">Accueil</Link></li>
              <li><Link href="/a-propos" className="text-sm text-gray-700 hover:text-accent transition-colors">À Propos</Link></li>
              <li><Link href="/galerie" className="text-sm text-gray-700 hover:text-accent transition-colors">Galerie</Link></li>
              <li><Link href="/rendez-vous" className="text-sm text-gray-700 hover:text-accent transition-colors">Prendre un rendez-vous</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/lavage" className="text-sm text-gray-700 hover:text-accent transition-colors">Lavage</Link></li>
              <li><Link href="/services/scellant" className="text-sm text-gray-700 hover:text-accent transition-colors">Scellant</Link></li>
              <li><Link href="/services/nano-ceramique" className="text-sm text-gray-700 hover:text-accent transition-colors">Nanocéramique</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-gray-600 text-center md:text-left">
            &copy; {new Date().getFullYear()} Esthétique Auto Pascal Pilote. Tous droits réservés
          </p>
          <a href="https://kua.quebec" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs md:text-sm text-gray-500 hover:text-gray-700 transition-colors">
            <span>Fait localement par</span>
            <img src={kuaLogo} alt="Küa" className="h-4 md:h-5" />
          </a>
          <div className="text-xs md:text-sm text-gray-600">
            <Link href="/politique-de-confidentialite" className="hover:text-accent transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
