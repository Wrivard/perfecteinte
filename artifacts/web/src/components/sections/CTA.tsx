import img from "@assets/518400891_721263007179601_8348639493355995469_n_1774531645510.jpg";

export function CTA() {
  return (
    <section className="relative min-h-[300px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={img} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl md:text-[42px] font-display font-bold text-white leading-tight">
              VOTRE VÉHICULE MÉRITE L'EXCELLENCE
            </h2>
            <p className="text-lg text-white/90 mt-4">
              Transformez l'apparence et la protection de votre automobile avec un service sur mesure et professionnel.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <a
              href="#contact"
              className="bg-accent text-white px-8 py-4 rounded-md font-semibold hover:bg-accent-hover transition-colors"
            >
              Réserver
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
