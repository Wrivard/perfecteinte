import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@assets/425261687_389413763697862_6688968440363193968_n-removebg-previ_1774531438969.png";

const navLinks = [
  { name: "Accueil", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Processus", href: "#process" },
  { name: "Galerie", href: "#gallery" },
  { name: "Témoignages", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 z-50">
            <img 
              src={logo} 
              alt="Esthétique Auto Pascal Pilote" 
              className={cn(
                "transition-all duration-300",
                isScrolled ? "h-12 sm:h-14" : "h-16 sm:h-20 brightness-0 invert" // Make logo white when not scrolled if over dark bg
              )} 
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-semibold uppercase tracking-wider transition-colors hover:text-accent",
                  isScrolled ? "text-primary" : "text-white"
                )}
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="accent"
              className="gap-2"
              onClick={() => window.location.href = "tel:4186701613"}
            >
              <Phone className="w-4 h-4" />
              <span>418-670-1613</span>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden z-50 p-2",
              isScrolled ? "text-primary" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-navy/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-display font-bold text-white hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="accent"
            size="lg"
            className="mt-4 gap-2 text-lg"
            onClick={() => {
              window.location.href = "tel:4186701613";
              setMobileMenuOpen(false);
            }}
          >
            <Phone className="w-5 h-5" />
            <span>418-670-1613</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}
