import { Link } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageLayout } from "@/components/layout/PageLayout";
import { FileText, Home } from "lucide-react";

export default function NotFound() {
  usePageMeta("Page introuvable", "La page que vous cherchez n'existe pas ou a été déplacée.");

  return (
    <PageLayout>
      <section className="py-20 md:py-32 bg-[#f9fafb]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-[120px] sm:text-[160px] font-display font-extrabold text-accent/15 leading-none select-none">
            404
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mt-2">
            Page <span className="text-accent">introuvable</span>
          </h1>
          <p className="text-gray-600 text-lg mt-4 max-w-md mx-auto">
            La page que vous cherchez n'existe pas ou a été déplacée.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/"
              className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-md bg-accent px-5 py-3.5 font-semibold text-[#1b1b1b] transition-colors hover:bg-accent-hover sm:w-auto sm:px-8"
            >
              <Home className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            <Link
              href="/rendez-vous"
              className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-md border-2 border-gray-300 px-5 py-3.5 font-semibold text-gray-700 transition-colors hover:border-accent hover:text-accent sm:w-auto sm:px-8"
            >
              <FileText className="w-4 h-4" />
              Obtenir une soumission
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
