import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageLayout } from "@/components/layout/PageLayout";
import { Partners } from "@/components/sections/Partners";
import { SectionTagline } from "@/components/ui/SectionTagline";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Phone, Mail, MapPin, Clock, Check, ChevronRight, ChevronLeft } from "lucide-react";
import { perfecteinteImages } from "@/assets/perfecteinteGallery";

const heroImg = perfecteinteImages[5];

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const SERVICES = [
  { id: "ppf", label: "Pellicule protectrice pare-pierre (PPF)", duration: "Selon le véhicule", category: "Protection" },
  { id: "teintage", label: "Teintage de vitres automobile", duration: "Selon le véhicule", category: "Personnalisation" },
  { id: "protection", label: "Protection automobile premium", duration: "Selon le véhicule", category: "Protection" },
  { id: "prestige", label: "Véhicule de prestige ou exotique", duration: "Sur mesure", category: "Applications spécialisées" },
  { id: "bateau", label: "Bateau ou véhicule récréatif", duration: "Sur mesure", category: "Applications spécialisées" },
  { id: "avion", label: "Avion ou application spécialisée", duration: "Sur mesure", category: "Applications spécialisées" },
];

const STEPS = [
  { num: 1, label: "Service" },
  { num: 2, label: "Véhicule" },
  { num: 3, label: "Coordonnées" },
  { num: 4, label: "Confirmation" },
];

interface FormData {
  services: string[];
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  vehicleColor: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

const EMPTY_FORM: FormData = {
  services: [],
  vehicleMake: "",
  vehicleModel: "",
  vehicleYear: "",
  vehicleColor: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
};

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8 md:mb-10">
      {STEPS.map((step, i) => (
        <div key={step.num} className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                current > step.num
                  ? "bg-accent text-[#1b1b1b]"
                  : current === step.num
                  ? "bg-accent text-[#1b1b1b] ring-4 ring-accent/20"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {current > step.num ? <Check className="w-4 h-4" /> : step.num}
            </div>
            <span className={`text-xs font-medium hidden sm:block transition-colors ${current >= step.num ? "text-accent" : "text-gray-400"}`}>
              {step.label}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div className={`w-8 sm:w-12 h-[2px] mb-4 transition-colors duration-300 ${current > step.num ? "bg-accent" : "bg-gray-200"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

function Step1({ form, setForm }: { form: FormData; setForm: (f: FormData) => void }) {
  const grouped = SERVICES.reduce<Record<string, typeof SERVICES>>((acc, s) => {
    if (!acc[s.category]) acc[s.category] = [];
    acc[s.category].push(s);
    return acc;
  }, {});

  const EXCLUSIVE_LAVAGE = ["lavage-int", "lavage-ext", "lavage-complet"];

  function toggle(id: string) {
    if (form.services.includes(id)) {
      setForm({ ...form, services: form.services.filter((s) => s !== id) });
    } else {
      const next = EXCLUSIVE_LAVAGE.includes(id)
        ? form.services.filter((s) => !EXCLUSIVE_LAVAGE.includes(s))
        : form.services;
      setForm({ ...form, services: [...next, id] });
    }
  }

  return (
    <fieldset aria-describedby="rdv-step1-error" aria-required="true">
      <legend className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-2">Quels services vous intéressent ?</legend>
      <p className="text-gray-600 text-sm mb-6">Sélectionnez un ou plusieurs services pour votre soumission. Vous pouvez combiner ce qui fait du sens pour vous.</p>
      <div className="space-y-5">
        {Object.entries(grouped).map(([category, services]) => (
          <div key={category}>
            <p className="text-xs uppercase tracking-widest text-accent font-bold mb-2">{category}</p>
            <div className="space-y-2">
              {services.map((svc) => {
                const checked = form.services.includes(svc.id);
                return (
                  <label
                    key={svc.id}
                    className={`flex items-start gap-3 p-3 sm:p-4 rounded-md border-2 cursor-pointer transition-all duration-200 ${
                      checked
                        ? "border-accent bg-accent/5"
                        : "border-gray-100 bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded border-2 shrink-0 flex items-center justify-center transition-colors mt-0.5 ${
                      checked ? "border-accent bg-accent" : "border-gray-300 bg-white"
                    }`}>
                      {checked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                    </div>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={checked}
                      onChange={() => toggle(svc.id)}
                    />
                    <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <span className="text-sm sm:text-base font-medium text-gray-800">{svc.label}</span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 bg-white border border-gray-200 rounded-full px-2.5 py-0.5 shrink-0">
                        <Clock className="w-3 h-3" />
                        {svc.duration}
                      </span>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {form.services.length > 0 && (
        <div className="mt-5 bg-accent/5 border border-accent/20 rounded-md px-4 py-3 flex items-center gap-2">
          <Check className="w-4 h-4 text-accent shrink-0" />
          <p className="text-sm text-gray-700">
            <span className="font-semibold">{form.services.length}</span> service{form.services.length > 1 ? "s" : ""} sélectionné{form.services.length > 1 ? "s" : ""}
          </p>
        </div>
      )}
    </fieldset>
  );
}

function Step2({ form, setForm }: { form: FormData; setForm: (f: FormData) => void }) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => String(currentYear - i));

  return (
    <div>
      <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-2">Votre véhicule</h3>
      <p className="text-gray-600 text-sm mb-6">Ces informations nous permettent de préparer une soumission précise.</p>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Marque <span className="text-accent">*</span></label>
            <input
              type="text"
              placeholder="Ex: Toyota, BMW, Ford..."
              value={form.vehicleMake}
              onChange={(e) => setForm({ ...form, vehicleMake: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Modèle <span className="text-accent">*</span></label>
            <input
              type="text"
              placeholder="Ex: Camry, M3, F-150..."
              value={form.vehicleModel}
              onChange={(e) => setForm({ ...form, vehicleModel: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Année <span className="text-accent">*</span></label>
            <select
              value={form.vehicleYear}
              onChange={(e) => setForm({ ...form, vehicleYear: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors bg-white"
            >
              <option value="">Sélectionner...</option>
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Couleur</label>
            <input
              type="text"
              placeholder="Ex: Noir, Blanc, Gris..."
              value={form.vehicleColor}
              onChange={(e) => setForm({ ...form, vehicleColor: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Step3({ form, setForm }: { form: FormData; setForm: (f: FormData) => void }) {
  return (
    <div>
      <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-2">Vos coordonnées</h3>
      <p className="text-gray-600 text-sm mb-6">Nous vous contacterons pour confirmer votre soumission.</p>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Prénom <span className="text-accent">*</span></label>
            <input
              type="text"
              placeholder="Jean"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nom <span className="text-accent">*</span></label>
            <input
              type="text"
              placeholder="Tremblay"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Téléphone <span className="text-accent">*</span></label>
          <input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(418) 555-1234"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })}
            maxLength={14}
            className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Courriel <span className="text-accent">*</span></label>
          <input
            type="email"
            placeholder="jean@exemple.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message (optionnel)</label>
          <textarea
            placeholder="Précisions supplémentaires sur votre véhicule ou votre demande..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={3}
            className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
          />
        </div>
      </div>
    </div>
  );
}

function Step4({ form }: { form: FormData }) {
  const selectedServices = SERVICES.filter((s) => form.services.includes(s.id));

  const rows = [
    { label: "Véhicule", value: [form.vehicleYear, form.vehicleMake, form.vehicleModel, form.vehicleColor].filter(Boolean).join(" ") },
    { label: "Nom", value: `${form.firstName} ${form.lastName}` },
    { label: "Téléphone", value: form.phone },
    { label: "Courriel", value: form.email },
    ...(form.message ? [{ label: "Message", value: form.message }] : []),
  ];

  return (
    <div>
      <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-2">Confirmer votre demande</h3>
      <p className="text-gray-600 text-sm mb-6">Vérifiez vos informations avant d'envoyer.</p>

      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
          Service{selectedServices.length > 1 ? "s" : ""} sélectionné{selectedServices.length > 1 ? "s" : ""}
        </p>
        <div className="bg-[#f9fafb] rounded-md border border-gray-200 overflow-hidden">
          {selectedServices.map((svc, i) => (
            <div key={svc.id} className={`flex items-center justify-between gap-3 px-4 py-3 ${i < selectedServices.length - 1 ? "border-b border-gray-200" : ""}`}>
              <span className="text-sm text-gray-800 font-medium">{svc.label}</span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 bg-white border border-gray-200 rounded-full px-2.5 py-0.5 shrink-0">
                <Clock className="w-3 h-3" />
                {svc.duration}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#f9fafb] rounded-md border border-gray-200 overflow-hidden mb-6">
        {rows.map((row, i) => (
          <div key={i} className={`flex gap-4 px-4 py-3 ${i < rows.length - 1 ? "border-b border-gray-200" : ""}`}>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide w-24 shrink-0 pt-0.5">{row.label}</span>
            <span className="text-sm text-gray-800 font-medium">{row.value}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500">
        En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe pour discuter de votre demande.
      </p>
    </div>
  );
}

function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-8"
    >
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
        <Check className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-3">Demande envoyée !</h3>
      <p className="text-gray-600 text-sm sm:text-base max-w-sm mx-auto leading-relaxed mb-2">
        Merci pour votre soumission. Notre équipe vous contactera dans les meilleurs délais pour confirmer votre rendez-vous.
      </p>
      <p className="text-gray-500 text-sm">
        Des questions ? Appelez-nous au{" "}
        <a href="tel:4184503990" className="text-accent font-semibold hover:underline">(418) 450-3990</a>
      </p>
    </motion.div>
  );
}

export default function RendezVous() {
  usePageMeta("Obtenir une soumission", "Obtenez une soumission pour votre projet de protection automobile chez Perfecteinte à Alma.");
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  function validate(s: number): string[] {
    const errs: string[] = [];
    if (s === 1 && form.services.length === 0) errs.push("Veuillez sélectionner au moins un service.");
    if (s === 2) {
      if (!form.vehicleMake.trim()) errs.push("La marque du véhicule est requise.");
      if (!form.vehicleModel.trim()) errs.push("Le modèle du véhicule est requis.");
      if (!form.vehicleYear) errs.push("L'année du véhicule est requise.");
    }
    if (s === 3) {
      if (!form.firstName.trim()) errs.push("Le prénom est requis.");
      if (!form.lastName.trim()) errs.push("Le nom est requis.");
      if (!form.phone.trim()) errs.push("Le téléphone est requis.");
      else if (form.phone.replace(/\D/g, "").length !== 10) errs.push("Le téléphone doit contenir 10 chiffres.");
      if (!form.email.trim()) errs.push("Le courriel est requis.");
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.push("Le courriel n'est pas valide.");
    }
    return errs;
  }

  function handleNext() {
    const errs = validate(step);
    if (errs.length > 0) {
      setErrors(errs);
      return;
    }
    setErrors([]);
    setStep((s) => s + 1);
  }

  function handleBack() {
    setErrors([]);
    setStep((s) => s - 1);
  }

  async function handleSubmit() {
    if (submitting) return;
    setErrors([]);
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setErrors([data.error || "Échec de l'envoi. Veuillez réessayer ou nous appeler au (418) 450-3990."]);
        setSubmitting(false);
        return;
      }
      setSubmitted(true);
    } catch {
      setErrors(["Erreur réseau. Veuillez vérifier votre connexion ou nous appeler au (418) 450-3990."]);
      setSubmitting(false);
    }
  }

  return (
    <PageLayout showContact={false}>
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[280px] sm:min-h-[350px] flex items-center overflow-hidden -mt-[120px] pt-[120px]">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Prenez rendez-vous pour votre esthétique automobile" className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white uppercase leading-tight">
              OBTENIR UNE <span className="text-accent">SOUMISSION</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mt-4 max-w-xl">
              Remplissez le formulaire ci-dessous et nous vous contacterons rapidement.
            </p>
          </motion.div>
        </div>
      </section>

      <Partners />

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <motion.div
                className="text-center mb-8 md:mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <SectionTagline text="Soumission" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                  VOTRE <span className="text-accent">DEMANDE</span>
                </h2>
                <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto">
                  Un processus simple en 4 étapes pour obtenir votre soumission.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-md border border-gray-200 overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="px-6 sm:px-8 pt-8 pb-6">
                  {submitted ? (
                    <SuccessState />
                  ) : (
                    <>
                      <StepIndicator current={step} />

                      <AnimatePresence mode="wait">
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.25 }}
                        >
                          {step === 1 && <Step1 form={form} setForm={setForm} />}
                          {step === 2 && <Step2 form={form} setForm={setForm} />}
                          {step === 3 && <Step3 form={form} setForm={setForm} />}
                          {step === 4 && <Step4 form={form} />}
                        </motion.div>
                      </AnimatePresence>

                      {errors.length > 0 && (
                        <motion.div
                          id="rdv-step1-error"
                          role="alert"
                          aria-live="polite"
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-5 bg-red-50 border border-red-200 rounded-md px-4 py-3"
                        >
                          {errors.map((e, i) => (
                            <p key={i} className="text-red-700 text-sm">{e}</p>
                          ))}
                        </motion.div>
                      )}

                      <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                        {step > 1 ? (
                          <button
                            onClick={handleBack}
                            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors"
                          >
                            <ChevronLeft className="w-4 h-4" /> Retour
                          </button>
                        ) : (
                          <div />
                        )}
                        {step < 4 ? (
                          <button
                            onClick={handleNext}
                            className="inline-flex items-center gap-2 bg-accent text-[#1b1b1b] px-6 py-3 rounded-md font-semibold text-sm hover:bg-accent-hover transition-colors"
                          >
                            Suivant <ChevronRight className="w-4 h-4" />
                          </button>
                        ) : (
                          <button
                            onClick={handleSubmit}
                            disabled={submitting}
                            className="inline-flex items-center gap-2 bg-accent text-[#1b1b1b] px-8 py-3 rounded-md font-semibold text-sm hover:bg-accent-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            {submitting ? "Envoi en cours…" : <>Envoyer ma demande <Check className="w-4 h-4" /></>}
                          </button>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <motion.div
                className="bg-[#1a1a1a] rounded-md p-6 md:p-8 text-white"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
              <h3 className="text-lg md:text-xl font-display font-bold mb-4 md:mb-6">
                  PRÊT À <span className="text-accent">PROTÉGER</span> ?
                </h3>

                <div className="space-y-5 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <span className="text-accent text-xs uppercase tracking-widest font-semibold block mb-1">Téléphone</span>
                    <a href="tel:4184503990" className="text-white font-medium hover:text-accent transition-colors text-sm md:text-base">
                        (418) 450-3990
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4">
                    <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <span className="text-accent text-xs uppercase tracking-widest font-semibold block mb-1">Courriel</span>
                      <p className="text-white font-medium text-sm md:text-base">Soumissions sur demande</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <span className="text-accent text-xs uppercase tracking-widest font-semibold block mb-1">Adresse</span>
                      <p className="text-white font-medium text-sm md:text-base">1950 Boulevard St-Jude,<br />Alma, QC</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4">
                    <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <span className="text-accent text-xs uppercase tracking-widest font-semibold block mb-1">Horaires</span>
                      <p className="text-white font-medium text-sm md:text-base">Lun - Ven: 8h - 17h</p>
                      <p className="text-gray-300 text-xs md:text-sm">Sam: Sur rendez-vous</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-[#f9fafb] rounded-md p-6 md:p-8 border border-gray-200"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <h3 className="text-base md:text-lg font-display font-bold text-gray-900 mb-2 md:mb-3">Préférez appeler ?</h3>
                <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                  Si vous préférez nous parler directement, n'hésitez pas à nous contacter par téléphone.
                </p>
                <a
                  href="tel:4184503990"
                  className="inline-flex items-center gap-2 bg-accent text-[#1b1b1b] px-6 py-3 rounded-md font-semibold text-sm hover:bg-accent-hover transition-colors w-full justify-center"
                >
                  <Phone className="w-4 h-4" />
                  Appeler maintenant
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Contact />
    </PageLayout>
  );
}
