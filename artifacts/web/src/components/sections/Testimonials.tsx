import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "@assets/515464037_717072027598699_7656154476338834597_n_1774531645510.jpg";
import img2 from "@assets/532949601_746227078016527_8012720562132951420_n_1774531645511.jpg";
import img3 from "@assets/535472325_752143490758219_186388118827140535_n_1774531645511.jpg";
import img4 from "@assets/481287887_624839100155326_2322975325486587163_n_1774531645509.jpg";
import img5 from "@assets/552939218_780287794610455_6908565764177471907_n_1774531645511.jpg";
import img6 from "@assets/566216853_802767049029196_5018593656071286537_n_1774531645512.jpg";

const testimonials = [
  {
    quote: "Chaque détail compte, et Pascal le comprend parfaitement.",
    author: "Éric Laforce",
    image: img1,
  },
  {
    quote: "Un service qui transforme littéralement l'apparence de mon véhicule.",
    author: "Caroline Tremblay",
    image: img2,
  },
  {
    quote: "La précision et le professionnalisme sont au cœur de leur travail.",
    author: "Michel Bouchard",
    image: img3,
  },
  {
    quote: "Résultats impeccables à chaque visite. Mon véhicule n'a jamais été aussi beau.",
    author: "Sophie Dubois",
    image: img4,
  },
  {
    quote: "Le meilleur service de détailing de la région. Hautement recommandé!",
    author: "Martin Côté",
    image: img5,
  },
  {
    quote: "Pascal a un œil exceptionnel pour la finition. Résultat au-delà de mes attentes.",
    author: "Julie Gagnon",
    image: img6,
  },
];

export function Testimonials() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const currentItems = testimonials.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <section id="testimonials" className="py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            className="text-3xl md:text-[40px] font-display font-bold text-[#1a1a1a] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent">TÉMOIGNAGES</span> DE NOS CLIENTS
          </motion.h2>
          <motion.p
            className="text-lg text-gray-500 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            L'excellence de notre travail racontée par ceux qui nous font confiance
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentItems.map((t, i) => (
            <motion.div
              key={`${page}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative h-[420px] rounded-md overflow-hidden group"
            >
              <img
                src={t.image}
                alt={t.author}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex gap-1 text-accent mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-white text-lg leading-relaxed mb-6">"{t.quote}"</p>
                <p className="text-white font-semibold">{t.author}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setPage(Math.max(0, page - 1))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-light transition-colors disabled:opacity-40"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === page ? "bg-[#1a1a1a]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
            disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-light transition-colors disabled:opacity-40"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
