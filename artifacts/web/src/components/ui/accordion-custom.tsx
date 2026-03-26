import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border border-gray-200 rounded-xl mb-4 overflow-hidden bg-white shadow-sm hover:border-accent/30 transition-colors">
      <button
        className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
        onClick={onClick}
      >
        <span className="font-bold text-navy pr-8">{question}</span>
        <div className={cn("shrink-0 w-8 h-8 rounded-full bg-light flex items-center justify-center transition-transform duration-300", isOpen && "rotate-180 bg-accent text-white")}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
