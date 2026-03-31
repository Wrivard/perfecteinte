import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@assets/425261687_389413763697862_6688968440363193968_n-removebg-previ_1774531438969.png";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "À Propos", href: "/a-propos" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Galerie", href: "/galerie" },
];

const serviceLinks = [
  { name: "Lavage Auto & Entretien de Luxe", href: "/services/lavage" },
  { name: "Protection de Peinture PPF", href: "/services/ppf" },
  { name: "Par Pierre", href: "/services/par-pierre" },
  { name: "Polissage & Nano-Céramique", href: "/services/polissage" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#1a1a1a] h-10 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-6 text-white text-sm">
            <a href="tel:4186655871" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>(418) 665-5871</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>2535 boulevard Comporté, La Malbaie</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2 md:py-3"
            : "bg-white py-3 md:py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 z-50">
              <img
                src={logo}
                alt="Esthétique Auto Pascal Pilote"
                className={cn(
                  "transition-all duration-300",
                  isScrolled ? "h-10 sm:h-12 md:h-14" : "h-12 sm:h-14 md:h-16"
                )}
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={cn(
                      "text-[15px] font-medium transition-colors flex items-center gap-1 relative",
                      location === link.href || (link.hasDropdown && location.startsWith("/services")) ? "text-accent" : "text-[#1a1a1a] hover:text-accent",
                      "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300",
                      location === link.href ? "after:w-full" : "after:w-0 hover:after:w-full"
                    )}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  {link.hasDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {serviceLinks.map((sl) => (
                          <Link
                            key={sl.name}
                            href={sl.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors"
                          >
                            {sl.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/rendez-vous"
                className="bg-accent text-white px-6 py-3 rounded-md font-semibold text-sm hover:bg-accent-hover transition-colors"
              >
                Prendre un rendez-vous
              </Link>
            </nav>

            <button
              className="lg:hidden z-50 p-2 text-[#1a1a1a]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-white flex flex-col items-center justify-center transition-all duration-300 lg:hidden z-40",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col items-center">
              <Link
                href={link.href}
                className={cn(
                  "text-2xl font-display font-bold transition-colors",
                  location === link.href || (link.hasDropdown && location.startsWith("/services")) ? "text-accent" : "text-[#1a1a1a] hover:text-accent"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
              {link.hasDropdown && (
                <div className="flex flex-col items-center gap-2 mt-2">
                  {serviceLinks.map((sl) => (
                    <Link
                      key={sl.name}
                      href={sl.href}
                      className={cn(
                        "text-base transition-colors",
                        location === sl.href ? "text-accent font-semibold" : "text-gray-500 hover:text-accent"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {sl.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="tel:4186655871"
            className="text-lg text-accent font-semibold"
          >
            (418) 665-5871
          </a>
          <Link
            href="/rendez-vous"
            className="mt-4 bg-accent text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-accent-hover transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Prendre un rendez-vous
          </Link>
        </nav>
      </div>
    </header>
  );
}
