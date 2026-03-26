import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bgImage from "@assets/481470256_625629676742935_425209047766152406_n_1774531645510.jpg"; // Black Porsche Cayman front

export function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Esthétique Automobile" 
          className="w-full h-full object-cover object-center scale-105 transform"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-white/90 text-xs font-semibold uppercase tracking-widest">Excellence à Québec</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-tight mb-6">
            ESTHÉTIQUE AUTOMOBILE <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-400">PROFESSIONNELLE</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed">
            Spécialiste en <strong className="text-white font-semibold">protection céramique</strong>, correction de peinture et detailing complet. Redonnez à votre véhicule son éclat d'origine.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="accent" className="group" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
              Prendre rendez-vous
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy" onClick={() => document.getElementById('services')?.scrollIntoView()}>
              Nos services
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-white/60 text-xs uppercase tracking-widest">Découvrir</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-accent rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
