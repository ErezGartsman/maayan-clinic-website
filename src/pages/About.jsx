import { motion, useReducedMotion } from "framer-motion";
import ContactBanner from "../components/sections/ContactBanner.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import ImageStack from "../components/ui/image-stack.jsx";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion.js";

const CERTIFICATE_IMAGES = [
  "/cert-1.jpg",
  "/cert-2.jpg",
  "/cert-3.jpg",
  "/cert-4.jpg",
  "/cert-5.jpg",
  "/cert-6.jpg",
];

function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="bg-cream-200">
      <section className="relative flex min-h-[440px] items-center justify-center overflow-hidden px-6 py-28 text-center sm:px-10">
        <img
          src="/about-me-hero.png"
          alt="מעיין ווקסלמן"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-taupe-900/40" aria-hidden="true" />

        <motion.h1
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={prefersReducedMotion ? undefined : fadeUp}
          className="relative text-white drop-shadow-md"
        >
          הסיפור שלי
        </motion.h1>
      </section>

      <section className="px-6 py-16 sm:px-10 md:px-12 md:py-24 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
            variants={prefersReducedMotion ? undefined : fadeUp}
            className="mx-auto max-w-md md:mx-0"
          >
            <Eyebrow>הגישה שלי</Eyebrow>
            <h2 className="mt-5 text-taupe-600">רפואה סינית, דרך הבנה מערבית עמוקה</h2>
            <p className="mt-6 text-base font-light leading-[1.9] text-taupe-500">
              המסע שלי לא התחיל מרוחניות או מקריסטלים. הוא התחיל מפיקוד בצבא ולימודי רפואה מערבית
              בהונגריה. הייתי בטוחה שהמסלול שלי ברור, להיות רופאה קונבנציונלית, בדיוק כמו אבא שלי
              שהוא מנתח אורטופד. אבל בתוך הלחץ, האינטנסיביות והמרדף המערבי, הרגשתי שמשהו מהותי חסר
              שם, המגע, וההקשבה האמיתית לנפש.
            </p>
            <p className="mt-6 text-base font-light leading-[1.9] text-taupe-500">
              הגעתי לטיפול הדיקור הראשון שלי בגיל 27, כשהייתי בתקופה של עומס ומתח אדיר. שם גיליתי את
              החוליה החסרה. היום, הקליניקה שלי משלבת את שני העולמות יחד. אני כאן לא כדי להחליף את
              הרפואה המערבית או להילחם בה, אלא כדי להשלים אותה אל המקום השלם של הגוף שלך.
            </p>
          </motion.div>

          <motion.img
            src="/about-1.png"
            alt=""
            aria-hidden="true"
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
            variants={prefersReducedMotion ? undefined : fadeUp}
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-10 md:px-12 md:pb-28 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <motion.img
            src="/about-2.jpeg"
            alt=""
            aria-hidden="true"
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
            variants={prefersReducedMotion ? undefined : fadeUp}
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />

          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
            variants={prefersReducedMotion ? undefined : fadeUp}
            className="order-first mx-auto max-w-md md:order-none md:mx-0"
          >
            <h2 className="text-taupe-600">להחזיר לגוף שלך את האיזון שהוא צריך</h2>
            <p className="mt-6 text-base font-light leading-[1.9] text-taupe-500">
              אני מאמינה שהגוף שלנו הוא כמו מכונית טסלה – אנחנו לא יכולות לצפות ממנו לנסוע ולתפקד
              בצורה מושלמת אם אנחנו לא עוצרות להטעין אותו. במציאות שבה רובנו חיות על "כיבוי שריפות",
              פתולוגיות וכאבים לא מופיעים סתם ככה; הם תוצאה של תקיעות ושל שחיקה מתמשכת.
            </p>
            <p className="mt-6 text-base font-light leading-[1.9] text-taupe-500">
              הטיפול אצלי מתחיל לפני שהמחט הראשונה נכנסת. דרך מגע, סאונד הילינג ותדרים, הידיים שלי
              מספרות לגוף שלך שהוא בטוח עכשיו, ומכינות את מערכת העצבים לריפוי. המטרה שלי היא לא רק
              להעלים כאב נקודתי, אלא להיות ה-"Happy Place" שלך. המקום היחיד בשבוע שבו מותר לך להוריד
              את השריון, לשחרר, ולתת לגוף את התנאים שהוא צריך כדי לתקן את עצמו מהשורש.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-cream-300 px-6 py-24 text-center sm:px-10 md:py-32">
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={prefersReducedMotion ? undefined : staggerContainer}
          className="mx-auto max-w-2xl"
        >
          <motion.h2 variants={prefersReducedMotion ? undefined : fadeUp} className="text-taupe-600">
            המסלול המקצועי שלי
          </motion.h2>
          <motion.p
            variants={prefersReducedMotion ? undefined : fadeUp}
            className="mt-6 text-base font-light leading-[1.9] text-taupe-500"
          >
            מאחורי כל טיפול עומדות שעות של למידה, התמחות קלינית בארץ ובעולם (בבתי חולים בסין, ובלימודי
            המשך ביפן), והבנה מעמיקה של גוף האישה, תוך שילוב בין הרפואה המערבית למזרחית.
          </motion.p>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={prefersReducedMotion ? undefined : fadeUp}
          className="mt-16"
        >
          <ImageStack images={CERTIFICATE_IMAGES} />
        </motion.div>
      </section>

      <ContactBanner />
    </div>
  );
}

export default About;
