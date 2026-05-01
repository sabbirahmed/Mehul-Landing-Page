export function telHref(phone: string) {
  return `tel:${phone.replace(/\D/g, "")}`;
}

export function consultationWhatsAppLink(whatsAppE164: string) {
  return `https://wa.me/${whatsAppE164}?text=${encodeURIComponent("Hello, I would like a free consultation.")}`;
}
