import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import BookTreatmentButton from "../ui/BookTreatmentButton.jsx";

const NAV_LINKS_START = [
  { label: "אודות", to: "/about" },
  { label: "תחומי טיפול", to: "/#treatments" },
];

const NAV_LINKS_END = [
  { label: "התהליך", to: "/process" },
  { label: "שאלות נפוצות", to: "/faq" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const { pathname } = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 0);
  });

  const overDarkHero = pathname === "/" && !scrolled && !mobileOpen;
  const textColorClass = overDarkHero ? "text-cream-100" : "text-taupe-700";
  const iconColorClass = overDarkHero ? "bg-cream-100" : "bg-taupe-700";
  const navLinkClasses = `text-base font-medium tracking-wide transition-colors duration-[400ms] hover:text-terracotta-600 ${textColorClass}`;
  const isHome = pathname === "/";

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-[400ms] ease-out",
        scrolled || mobileOpen ? "bg-white/40 shadow-sm backdrop-blur-md" : "bg-transparent",
      ].join(" ")}
    >
      <div className="relative mx-auto flex h-20 max-w-[1600px] items-center px-6 sm:px-10 md:grid md:h-auto md:grid-cols-[1fr_auto_1fr] md:gap-4 md:py-4 lg:px-16 xl:px-24">
        <nav className="hidden items-center gap-8 md:flex" aria-label="ניווט ראשי">
          {NAV_LINKS_START.map((link) => (
            <Link key={link.to} to={link.to} className={navLinkClasses}>
              {link.label}
            </Link>
          ))}
        </nav>

        {isHome ? (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute left-6 top-1/2 flex -translate-y-1/2 flex-col items-center transition-opacity duration-[400ms] hover:opacity-80 sm:left-10 md:static md:translate-y-0 md:justify-self-center lg:left-16 xl:left-24"
            aria-label="מעיין ווקסלמן — גלילה לראש העמוד"
          >
            <img src="/logo.png" alt="מעיין ווקסלמן" className="h-12 w-auto sm:h-14 md:h-16" />
            <span
              className={`mt-1 hidden text-sm font-light tracking-wide transition-colors duration-[400ms] md:block ${textColorClass}`}
            >
              ריפוי נשי מהשורש
            </span>
          </button>
        ) : (
          <Link
            to="/"
            className="absolute left-6 top-1/2 flex -translate-y-1/2 flex-col items-center transition-opacity duration-[400ms] hover:opacity-80 sm:left-10 md:static md:translate-y-0 md:justify-self-center lg:left-16 xl:left-24"
            aria-label="מעיין ווקסלמן — חזרה לראש העמוד"
          >
            <img src="/logo.png" alt="מעיין ווקסלמן" className="h-12 w-auto sm:h-14 md:h-16" />
            <span
              className={`mt-1 hidden text-sm font-light tracking-wide transition-colors duration-[400ms] md:block ${textColorClass}`}
            >
              ריפוי נשי מהשורש
            </span>
          </Link>
        )}

        <div className="flex items-center justify-end gap-6">
          <nav className="hidden items-center gap-8 md:flex" aria-label="ניווט משני">
            {NAV_LINKS_END.map((link) => (
              <Link key={link.to} to={link.to} className={navLinkClasses}>
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="absolute right-6 top-1/2 flex h-11 w-11 -translate-y-1/2 flex-col items-center justify-center gap-1.5 transition-transform duration-150 active:scale-90 sm:right-10 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "סגירת תפריט" : "פתיחת תפריט"}
          >
            <motion.span
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
              transition={{ duration: 0.3 }}
              className={`h-px w-6 transition-colors duration-[400ms] ${iconColorClass}`}
            />
            <motion.span
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className={`h-px w-6 transition-colors duration-[400ms] ${iconColorClass}`}
            />
            <motion.span
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
              transition={{ duration: 0.3 }}
              className={`h-px w-6 transition-colors duration-[400ms] ${iconColorClass}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-cream-200 md:hidden"
            aria-label="ניווט נייד"
          >
            <div className="flex flex-col px-6 pb-8 pt-2">
              {[...NAV_LINKS_START, ...NAV_LINKS_END].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-taupe-500/10 py-3.5 text-base font-medium text-taupe-600 transition-colors duration-150 active:bg-cream-300 last:border-b-0"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6">
                <BookTreatmentButton
                  variant="outline"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
