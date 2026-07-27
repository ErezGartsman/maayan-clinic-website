export const WHATSAPP_PHONE = "972524374677";

const WHATSAPP_MESSAGE =
  "היי מעיין הגעתי מהאתר שלך, אשמח לשמוע עוד על טיפול שיכול להתאים לי 🪷";

export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function buildWhatsAppHref(message) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
