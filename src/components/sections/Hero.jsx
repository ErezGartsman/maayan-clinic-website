import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import WhatsAppIcon from "../icons/WhatsAppIcon.jsx";
import { WHATSAPP_HREF } from "../../lib/whatsapp.js";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const SLIDES = [
  { src: "/Acupuncture.jpg", alt: "דיקור סיני" },
  { src: "/Sound%20Healing.png", alt: "סאונד הילינג" },
  { src: "/Fertility.jpg", alt: "ליווי פוריות" },
  { src: "/Shiatsu.png", alt: "שיאצו" },
];

const SLIDE_MS = 4000;

const NBSP = " ";

const CONCERNS = [
  `חוסר${NBSP}איזון${NBSP}הורמונלי`,
  `בעיות${NBSP}פוריות`,
  `סטרס${NBSP}וחרדה`,
  `כאבי${NBSP}מחזור`,
  "אנדומטריוזיס",
  `גיל${NBSP}המעבר`,
];

function Hero({ revealed = true }) {
  const prefersReducedMotion = useReducedMotion();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    const id = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), SLIDE_MS);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  const current = SLIDES[slide];

  return (
    <section className="relative flex min-h-[75vh] w-full items-center overflow-hidden md:min-h-screen">
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.3 : 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={current.src}
              alt={current.alt}
              className="h-full w-full object-cover object-center saturate-[0.9] contrast-[0.97]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 bg-[#EF8486]/20" />

      <div className="relative w-full px-6 py-24 text-center sm:px-10 md:px-12 lg:px-16 xl:px-24">
        <motion.div
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          animate={revealed ? "visible" : "hidden"}
          className="mx-auto max-w-6xl"
        >
          <motion.h1
            variants={prefersReducedMotion ? undefined : itemVariants}
            className="text-[50px] leading-tight text-cream-100 drop-shadow-lg md:text-[60px]"
          >
            דיקור, מגע עמוק, תזונה והקשבה{NBSP}לנפש
          </motion.h1>

          <motion.p
            variants={prefersReducedMotion ? undefined : itemVariants}
            className="mx-auto mt-6 max-w-2xl text-[20px] font-light leading-snug text-cream-100/95 drop-shadow-md md:text-[30px]"
          >
            טיפול שמגיע לשורש הבעיה, מתוך רוך, דיוק והקשבה.
          </motion.p>

          <motion.p
            variants={prefersReducedMotion ? undefined : itemVariants}
            className="mx-auto mt-8 max-w-full text-center text-xl font-medium tracking-wide text-cream-200/85 xl:whitespace-nowrap"
          >
            {CONCERNS.join(" • ")}
          </motion.p>

          <motion.div variants={prefersReducedMotion ? undefined : itemVariants} className="mt-10 flex justify-center">
            <motion.a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
              className="inline-flex min-h-[44px] items-center gap-2.5 rounded-full bg-[#EF8486]/80 px-6 py-3 text-[13px] font-medium tracking-wide text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-[#EF8486]"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              לתיאום פגישה בוואטסאפ
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
