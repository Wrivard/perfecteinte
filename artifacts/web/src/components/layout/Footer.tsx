import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@assets/425261687_389413763697862_6688968440363193968_n-removebg-previ_1774531438969.png";

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          <div className="space-y-4">
            <img src={logo} alt="Esthétique Auto PP" className="h-20" />
            <div>
              <h4 className="text-sm font-semibold text-[#1a1a1a] mb-1">Adresse</h4>
              <p className="text-sm text-gray-500 leading-relaxed">2535 boulevard Comporté,<br />La Malbaie, Québec</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1a1a1a] mb-1">Contact</h4>
              <p className="text-sm text-gray-500">(418) 665-5871</p>
              <p className="text-sm text-gray-500">info@esthetiqueautopascalpilote.ca</p>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-500 hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-accent transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#1a1a1a] mb-4 uppercase">Navigation</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-gray-500 hover:text-accent transition-colors">Accueil</Link></li>
              <li><Link href="/a-propos" className="text-sm text-gray-500 hover:text-accent transition-colors">À Propos</Link></li>
              <li><Link href="/galerie" className="text-sm text-gray-500 hover:text-accent transition-colors">Galerie</Link></li>
              <li><Link href="/rendez-vous" className="text-sm text-gray-500 hover:text-accent transition-colors">Prendre un rendez-vous</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#1a1a1a] mb-4 uppercase">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-sm text-gray-500 hover:text-accent transition-colors">Lavage & Entretien esthétique</Link></li>
              <li><Link href="/services" className="text-sm text-gray-500 hover:text-accent transition-colors">Protection de peinture (PPF)</Link></li>
              <li><Link href="/services" className="text-sm text-gray-500 hover:text-accent transition-colors">Polissage & Nano-céramique</Link></li>
            </ul>
          </div>

          <div></div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Esthétique Auto Pascal Pilote. Tous droits réservés
          </p>
          <div className="text-sm text-gray-400 flex gap-4">
            <a href="#" className="hover:text-accent transition-colors">Politique de confidentialité</a>
            <span>|</span>
            <a href="#" className="hover:text-accent transition-colors">Conditions de service</a>
            <span>|</span>
            <a href="#" className="hover:text-accent transition-colors">Paramètres des cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
