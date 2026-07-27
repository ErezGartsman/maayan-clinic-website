import { Phone } from "lucide-react";
import { useLocation } from "react-router-dom";
import InstagramIcon from "../icons/InstagramIcon.jsx";
import WhatsAppIcon from "../icons/WhatsAppIcon.jsx";
import { WHATSAPP_HREF, WHATSAPP_PHONE } from "../../lib/whatsapp.js";

const ICON_LINK_CLASSES =
  "flex h-11 w-11 items-center justify-center text-taupe-400 transition duration-200 hover:text-terracotta-600 active:scale-90";

function FloatingSocials() {
  const { pathname } = useLocation();
  const mobileButtonSide = pathname === "/process" ? "left-6" : "right-6";

  return (
    <>
      <div className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex">
        <a
          href="https://www.instagram.com/maayan.vekselman/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="עמוד האינסטגרם של מעיין ווקסלמן"
          className={ICON_LINK_CLASSES}
        >
          <InstagramIcon className="h-5 w-5" />
        </a>
        <span aria-hidden="true" className="h-8 w-px bg-taupe-500/20" />
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="שליחת הודעת וואטסאפ למעיין"
          className={ICON_LINK_CLASSES}
        >
          <WhatsAppIcon className="h-5 w-5" />
        </a>
        <span aria-hidden="true" className="h-8 w-px bg-taupe-500/20" />
        <a
          href={`tel:+${WHATSAPP_PHONE}`}
          aria-label="התקשרות למעיין"
          className={ICON_LINK_CLASSES}
        >
          <Phone className="h-5 w-5" strokeWidth={1.5} />
        </a>
      </div>

      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="שליחת הודעת וואטסאפ למעיין"
        className={`fixed bottom-6 ${mobileButtonSide} z-40 flex h-14 w-14 items-center justify-center rounded-full bg-terracotta-600 text-cream-100 shadow-soft transition duration-200 hover:bg-terracotta-700 active:scale-90 md:hidden`}
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </>
  );
}

export default FloatingSocials;
