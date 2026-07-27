import { Link } from "react-router-dom";
import EmailIcon from "../icons/EmailIcon.jsx";
import InstagramIcon from "../icons/InstagramIcon.jsx";
import WhatsAppIcon from "../icons/WhatsAppIcon.jsx";
import { WHATSAPP_HREF } from "../../lib/whatsapp.js";

const SITEMAP_LINKS = [
  { label: "ראשי", to: "/" },
  { label: "טיפולים", to: "/#treatments" },
  { label: "הסיפור שלי", to: "/about" },
  { label: "איך זה עובד?", to: "/process" },
  { label: "מילים של מטופלות", to: "/#testimonials" },
  { label: "שאלות נפוצות", to: "/faq" },
];

const GENERAL_LINKS = [
  { label: "תנאי שימוש", to: "/terms" },
  { label: "מדיניות ופרטיות", to: "/privacy" },
  { label: "צרי קשר", to: "/#contact" },
];

const LABEL_CLASSES = "text-[13px] font-medium tracking-[0.15em] text-taupe-600";
const LINK_CLASSES = "text-sm leading-relaxed text-taupe-500/70 transition-colors duration-[400ms] hover:text-terracotta-600";
const ICON_CIRCLE_CLASSES =
  "flex h-9 w-9 items-center justify-center rounded-full bg-terracotta-100 text-terracotta-600 transition-colors duration-200 hover:bg-terracotta-200";
const COLUMN_CLASSES = "text-center md:text-start";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream-200 px-6 pb-10 pt-16 sm:px-10 md:px-12 lg:px-16 xl:px-24">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-y-12 md:grid-cols-4 md:gap-x-8 md:gap-y-0">
        <nav aria-label="מפת אתר" className={COLUMN_CLASSES}>
          <p className={LABEL_CLASSES}>מפת אתר</p>
          <ul className="mt-5 space-y-3">
            {SITEMAP_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className={LINK_CLASSES}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="כללי" className={COLUMN_CLASSES}>
          <p className={LABEL_CLASSES}>כללי</p>
          <ul className="mt-5 space-y-3">
            {GENERAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className={LINK_CLASSES}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={COLUMN_CLASSES}>
          <p className={LABEL_CLASSES}>פרטי התקשרות</p>
          <address className="mt-5 space-y-3 text-sm not-italic leading-relaxed text-taupe-500/70">
            <p>תל אביב, ישראל</p>
            <p>052-437-4677</p>
          </address>
        </div>

        <div className={COLUMN_CLASSES}>
          <p className={LABEL_CLASSES}>שעות פעילות</p>
          <p className="mt-5 text-sm leading-relaxed text-taupe-500/70">א'-ו' 08:00-18:00</p>
          <div className="mt-5 flex items-center justify-center gap-3 md:justify-start">
            <Link to="/#contact" aria-label="יצירת קשר" className={ICON_CIRCLE_CLASSES}>
              <EmailIcon className="h-4 w-4" />
            </Link>
            <a
              href="https://www.instagram.com/maayan.vekselman/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="עמוד האינסטגרם של מעיין ווקסלמן"
              className={ICON_CIRCLE_CLASSES}
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="שליחת הודעת וואטסאפ למעיין"
              className={ICON_CIRCLE_CLASSES}
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[1600px] border-t border-taupe-500/10 pt-6 text-center md:text-start">
        <p className="text-xs text-taupe-500/50">© {year} מעיין ווקסלמן, כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
}

export default Footer;
