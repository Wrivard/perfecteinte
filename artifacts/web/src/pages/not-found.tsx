import { Link } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  usePageMeta("Page introuvable", "La page que vous cherchez n'existe pas ou a été déplacée.");

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f9fafb] px-6">
      <div className="text-center max-w-md">
        <span className="text-8xl font-display font-extrabold text-accent/20">404</span>
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mt-4">
          Page introuvable
        </h1>
        <p className="text-gray-600 mt-3">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
