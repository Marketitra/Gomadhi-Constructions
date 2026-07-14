import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

interface WhatsAppCTAProps {
  message?: string;
  className?: string;
}

export default function WhatsAppCTA({
  message = "Hi, I'd like to enquire about a construction project.",
  className = "",
}: WhatsAppCTAProps) {
  const url = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded border border-concrete-line px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-stone hover:bg-concrete ${className}`}
    >
      <MessageCircle size={16} className="text-gold" />
      Chat on WhatsApp
    </a>
  );
}
