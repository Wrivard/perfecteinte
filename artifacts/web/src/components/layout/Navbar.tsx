import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@assets/425261687_389413763697862_6688968440363193968_n-removebg-previ_1774531438969.png";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "À Propos", href: "/a-propos" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Galerie", href: "/galerie" },
];

const serviceLinks = [
  { name: "Lavage", href: "/services/lavage" },
  { name: "Scellant", href: "/services/scellant" },
  { name: "Nanocéramique", href: "/services/nano-ceramique" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
    setServicesOpen(false);
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
            <a href="https://www.facebook.com/profile.php?id=100078877238175" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
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
            <Link href="/" className="flex items-center gap-2">
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
                    <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-md shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
              className="lg:hidden z-50 relative w-10 h-10 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <span className="sr-only">{mobileMenuOpen ? "Fermer" : "Menu"}</span>
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={cn(
                    "block h-[2px] w-6 bg-[#1a1a1a] rounded-full transition-all duration-300 origin-center",
                    mobileMenuOpen && "translate-y-[9px] rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "block h-[2px] w-6 bg-[#1a1a1a] rounded-full transition-all duration-300",
                    mobileMenuOpen && "opacity-0 scale-x-0"
                  )}
                />
                <span
                  className={cn(
                    "block h-[2px] w-6 bg-[#1a1a1a] rounded-full transition-all duration-300 origin-center",
                    mobileMenuOpen && "-translate-y-[9px] -rotate-45"
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 lg:hidden z-30"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl lg:hidden z-40 flex flex-col"
          >
            <div className="h-16 flex items-center justify-end px-6 shrink-0" />

            <nav className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className={cn(
                            "w-full flex items-center justify-between py-3.5 text-lg font-semibold transition-colors border-b border-gray-100",
                            location.startsWith("/services") ? "text-accent" : "text-gray-900"
                          )}
                        >
                          {link.name}
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 text-gray-400 transition-transform duration-200",
                              servicesOpen && "rotate-180"
                            )}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {servicesOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              {serviceLinks.map((sl) => (
                                <li key={sl.name}>
                                  <Link
                                    href={sl.href}
                                    className={cn(
                                      "block py-3 pl-4 text-[15px] transition-colors border-b border-gray-50",
                                      location === sl.href ? "text-accent font-medium" : "text-gray-600 hover:text-accent"
                                    )}
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {sl.name}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          "block py-3.5 text-lg font-semibold transition-colors border-b border-gray-100",
                          location === link.href ? "text-accent" : "text-gray-900 hover:text-accent"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="/rendez-vous"
                  className="block w-full text-center bg-accent text-white py-3.5 rounded-md font-semibold text-base hover:bg-accent-hover transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Prendre un rendez-vous
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
                <a
                  href="tel:4186655871"
                  className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-[15px] font-medium">(418) 665-5871</span>
                </a>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-[15px]">2535 boulevard Comporté, La Malbaie</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <a href="https://www.facebook.com/profile.php?id=100078877238175" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-accent hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-accent hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
