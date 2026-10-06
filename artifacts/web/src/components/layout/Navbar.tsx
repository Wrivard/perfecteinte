import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/perfecteinte-logo.png";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "À Propos", href: "/a-propos" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Galerie", href: "/galerie" },
];

const serviceLinks = [
  { name: "PPF — Pare-pierre", href: "/services/ppf" },
  { name: "Vitres teintées", href: "/services/vitres-teintees" },
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
      <div className="bg-[#1b1b1b] h-10 hidden md:block border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-6 text-white text-sm">
            <a href="tel:4184503990" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>(418) 450-3990</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>1950 Boulevard St-Jude, Alma, QC</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/profile.php?id=100078877238175" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-accent transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "transition-all duration-300",
          isScrolled
            ? "bg-[#1b1b1b]/95 backdrop-blur-md shadow-lg py-2 md:py-3"
            : "bg-[#1b1b1b] py-3 md:py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Perfecteinte — Vitres teintées et pare-pierre"
                decoding="async"
                className={cn(
                  "transition-all duration-300",
                  isScrolled ? "w-[190px] sm:w-[235px] md:w-[285px]" : "w-[215px] sm:w-[270px] md:w-[320px]"
                )}
                style={{ height: "auto" }}
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={cn(
                      "text-[15px] font-medium transition-colors flex items-center gap-1 relative",
                      location === link.href || (link.hasDropdown && location.startsWith("/services")) ? "text-accent" : "text-white hover:text-accent",
                      "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300",
                      location === link.href ? "after:w-full" : "after:w-0 hover:after:w-full"
                    )}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  {link.hasDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-52 bg-[#1b1b1b] rounded-md shadow-lg border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {serviceLinks.map((sl) => (
                          <Link
                            key={sl.name}
                            href={sl.href}
                            className="block px-4 py-3 text-sm text-gray-200 hover:bg-white/5 hover:text-accent transition-colors"
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
                className="bg-accent text-[#1b1b1b] px-6 py-3 rounded-md font-semibold text-sm hover:bg-accent-hover transition-colors"
              >
                Obtenir une soumission
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
                    "block h-[2px] w-6 bg-white rounded-full transition-all duration-300 origin-center",
                    mobileMenuOpen && "translate-y-[9px] rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "block h-[2px] w-6 bg-white rounded-full transition-all duration-300",
                    mobileMenuOpen && "opacity-0 scale-x-0"
                  )}
                />
                <span
                  className={cn(
                    "block h-[2px] w-6 bg-white rounded-full transition-all duration-300 origin-center",
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
            className="fixed inset-0 bg-black/50 lg:hidden z-30"
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
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#1b1b1b] shadow-2xl lg:hidden z-40 flex flex-col"
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
                            "w-full flex items-center justify-between py-3.5 text-lg font-semibold transition-colors border-b border-white/10",
                            location.startsWith("/services") ? "text-accent" : "text-white"
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
                                      "block py-3 pl-4 text-[15px] transition-colors border-b border-white/5",
                                      location === sl.href ? "text-accent font-medium" : "text-gray-300 hover:text-accent"
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
                          "block py-3.5 text-lg font-semibold transition-colors border-b border-white/10",
                          location === link.href ? "text-accent" : "text-white hover:text-accent"
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
                  className="block w-full text-center bg-accent text-[#1b1b1b] py-3.5 rounded-md font-semibold text-base hover:bg-accent-hover transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Obtenir une soumission
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                <a
                  href="tel:4184503990"
                  className="flex items-center gap-3 text-gray-200 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-[15px] font-medium">(418) 450-3990</span>
                </a>
                <div className="flex items-center gap-3 text-gray-200">
                  <MapPin className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-[15px]">1950 Boulevard St-Jude, Alma, QC</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <a href="https://www.facebook.com/profile.php?id=100078877238175" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-200 hover:bg-accent hover:text-[#1b1b1b] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
