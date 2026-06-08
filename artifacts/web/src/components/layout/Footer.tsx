import { Link } from "wouter";
import { Facebook } from "lucide-react";
import logo from "@/assets/logo-av.png";
import kuaLogo from "@assets/black-letter-kua-logo_1775680036268.png";

export function Footer() {
  return (
    <footer className="bg-[#1b1b1b] pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16 mb-10 md:mb-12">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <img loading="lazy" decoding="async" src={logo} alt="Esthétique Auto A.V" className="h-16 md:h-20" />
            <div>
              <h4 className="text-sm font-semibold text-white mb-1">Adresse</h4>
              <p className="text-sm text-gray-300 leading-relaxed">20 Rue de la Montagne, porte 2,<br />Sainte-Claire, QC G0R 2V0</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-1">Contact</h4>
              <p className="text-sm text-gray-300">(418) 957-8168</p>
              <p className="text-sm text-gray-300 break-all">esthetiquea.v@gmail.com</p>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/profile.php?id=100078877238175" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase">Navigation</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-gray-300 hover:text-accent transition-colors">Accueil</Link></li>
              <li><Link href="/a-propos" className="text-sm text-gray-300 hover:text-accent transition-colors">À Propos</Link></li>
              <li><Link href="/galerie" className="text-sm text-gray-300 hover:text-accent transition-colors">Galerie</Link></li>
              <li><Link href="/rendez-vous" className="text-sm text-gray-300 hover:text-accent transition-colors">Prendre un rendez-vous</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/lavage" className="text-sm text-gray-300 hover:text-accent transition-colors">Lavage</Link></li>
              <li><Link href="/services/scellant" className="text-sm text-gray-300 hover:text-accent transition-colors">Scellant</Link></li>
              <li><Link href="/services/nano-ceramique" className="text-sm text-gray-300 hover:text-accent transition-colors">Nanocéramique</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Esthétique Auto A.V. Tous droits réservés
          </p>
          <a href="https://kua.quebec" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs md:text-sm text-gray-500 hover:text-gray-300 transition-colors">
            <span>Fait localement par</span>
            <img loading="lazy" decoding="async" src={kuaLogo} alt="Küa" className="h-4 md:h-5 brightness-0 invert opacity-70" />
          </a>
          <div className="text-xs md:text-sm text-gray-400">
            <Link href="/politique-de-confidentialite" className="hover:text-accent transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
