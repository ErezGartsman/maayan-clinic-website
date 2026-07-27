import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion.js";

function Bio() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="scroll-mt-24 bg-cream-200 px-6 py-24 sm:px-10 md:scroll-mt-28 md:px-12 md:py-32 lg:px-16 xl:px-24">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-12 lg:gap-20">
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={prefersReducedMotion ? undefined : fadeUp}
          className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm shadow-soft md:mx-0 md:max-w-none"
        >
          <img
            src="/portrait.PNG"
            alt="מעיין ווקסלמן בקליניקה"
            className="h-full w-full object-cover object-top"
          />
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={prefersReducedMotion ? undefined : staggerContainer}
          className="max-w-md"
        >
          <motion.h2
            variants={prefersReducedMotion ? undefined : fadeUp}
            className="text-[40px] leading-tight text-taupe-600"
          >
            הגישה שלי
          </motion.h2>

          <motion.h3
            variants={prefersReducedMotion ? undefined : fadeUp}
            className="mt-3 text-2xl font-normal leading-snug text-taupe-500"
          >
            רפואה סינית, דרך הבנה מערבית עמוקה.
          </motion.h3>

          <motion.p
            variants={prefersReducedMotion ? undefined : fadeUp}
            className="mt-6 text-base font-light leading-[1.9] text-taupe-500"
          >
            שמי מעיין ווקסלמן, ואני מאמינה שלכל אחת מאיתנו מגיע להרגיש בבית בתוך הגוף של עצמה. המסע
            שלי התחיל בכלל בלימודי רפואה מערבית בהונגריה. חוויתי על בשרי מה זה מתח, לחץ וניתוק מהגוף.
            כשהגעתי לטיפול דיקור בפעם הראשונה, משהו נפתח. הבנתי שחסר לי המגע וההקשבה לנפש. היום,
            הקליניקה שלי היא ה-'Happy Place' של המטופלות שלי. מקום שלא באים אליו רק כדי לכבות שריפות,
            אלא כדי לטפל בשורש, להחזיר את הזרימה, ולשלב ידע קליני רחב של 14 שנות טיפול, יחד עם רפואה
            שרואה אותך באמת.
          </motion.p>

          <motion.div variants={prefersReducedMotion ? undefined : fadeUp} className="mt-8">
            <Link to="/about" className="text-taupe-600 transition-colors hover:text-terracotta-600">
              להמשך קריאה &gt;
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Bio;
