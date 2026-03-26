import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 border border-white/10 p-10 md:p-14 rounded-3xl backdrop-blur-sm shadow-2xl">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Prêt à Transformer Votre Véhicule?
            </h2>
            <p className="text-gray-300 text-lg">
              Prenez rendez-vous dès aujourd'hui pour une évaluation et découvrez la différence d'un detailing professionnel.
            </p>
          </div>
          <div className="shrink-0">
            <Button size="lg" variant="accent" className="text-lg px-10 h-14" onClick={() => window.location.href = "tel:4186701613"}>
              418-670-1613
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
