import { GraduationCap, MessageCircle, Phone } from "lucide-react";

import { consultationWhatsAppLink, telHref } from "./utils";

export function BranchQuickContactBar({
  phone,
  whatsAppE164,
}: {
  phone: string;
  whatsAppE164: string;
}) {
  return (
    <div
      id="quick-contact"
      className="sticky top-20 z-40 border-b border-[#0B2D5C]/10 bg-white/95 shadow-sm backdrop-blur-md"
    >
      <div className="container-main flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <p className="text-center text-sm font-semibold text-[#0B2D5C] md:text-left">Need Help? Talk to Us Instantly</p>
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
          <a
            href={telHref(phone)}
            className="inline-flex items-center gap-2 rounded-full bg-[#0B2D5C] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#133e78] md:text-sm"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <a
            href={`https://wa.me/${whatsAppE164}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#0B2D5C]/20 bg-[#F5F9FF] px-4 py-2 text-xs font-semibold text-[#0B2D5C] transition hover:bg-white md:text-sm"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            WhatsApp
          </a>
          <a
            href={consultationWhatsAppLink(whatsAppE164)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#C8102E]/30 bg-[#C8102E]/10 px-4 py-2 text-xs font-semibold text-[#C8102E] transition hover:bg-[#C8102E]/15 md:text-sm"
          >
            <GraduationCap className="h-4 w-4" />
            Get Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
