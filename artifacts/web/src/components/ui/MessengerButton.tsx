import { MessageCircle } from "lucide-react";

export function MessengerButton() {
  return (
    <a
      href="https://m.me/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur Messenger"
      className="fixed bottom-64 left-4 sm:bottom-6 sm:left-6 z-40 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#0084FF] text-white rounded-full shadow-lg hover:bg-[#006acc] hover:scale-110 transition-all duration-300"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
