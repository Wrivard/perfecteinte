import { Link } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageLayout } from "@/components/layout/PageLayout";
import { ArrowLeft, Home } from "lucide-react";

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
              className="inline-flex items-center gap-2 bg-accent text-[#1b1b1b] px-8 py-3.5 rounded-md font-semibold hover:bg-accent-hover transition-colors"
            >
              <Home className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-3.5 rounded-md font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voir nos services
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
