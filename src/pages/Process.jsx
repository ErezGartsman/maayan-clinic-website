import { motion, useReducedMotion } from "framer-motion";
import ContactBanner from "../components/sections/ContactBanner.jsx";
import { EASE, fadeUp, viewportOnce } from "../lib/motion.js";

const STEPS = [
  {
    title: "הקשבה ואבחון",
    text: "לפני הכל, אנחנו יושבות לדבר. לא רק על מה שכואב, אלא על השינה, התזונה, העומס וההורמונים. נשלב כלים מעולם הרפואה הסינית יחד עם הבנה מערבית וקריאת בדיקות דם, כדי לאתר בדיוק איפה המערכת \"נתקעה\".",
  },
  {
    title: "בניית התוכנית הטיפולית",
    text: "ברגע שהבנו מה יצא מאיזון, אנחנו בונות את המפה שלך. נתאים פרוטוקול טיפולי אישי שיכול לשלב דיקור, שיאצו, תזונה וסאונד הילינג, כדי להתחיל להטעין את הגוף מחדש בצורה עמוקה.",
  },
  {
    title: "מתחילות להניע",
    text: "המפגשים עצמם. שעה שהיא ה-\"Happy Place\" שלך. דרך המגע והמחטים אנחנו מאותתות למערכת העצבים שהיא בטוחה עכשיו, ומחזירות את הדם והאנרגיה למקומות שהיו חסומים.",
  },
  {
    title: "דיוק ותחזוקה",
    text: "טיפול הוא תהליך חי. אנחנו בוחנות את השינויים, מעדכנות את הפרוטוקול תוך כדי תנועה, ומוודאות שהגוף שלך לומד לחזור לתפקוד טבעי ועצמאי, ולא רק מכבה שריפות.",
  },
];

function Process() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="bg-cream-200">
      <section className="relative overflow-hidden px-6 pb-16 pt-32 text-center sm:px-10 md:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-12 h-56 w-[28rem] -translate-x-1/2 rounded-full bg-blush-300/40 blur-3xl md:h-72 md:w-[36rem]"
        />

        <motion.h1
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={prefersReducedMotion ? undefined : fadeUp}
          className="relative text-taupe-600"
        >
          איך זה עובד?
        </motion.h1>

        <motion.p
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={prefersReducedMotion ? undefined : fadeUp}
          className="relative mx-auto mt-10 max-w-2xl font-light leading-[1.9] text-taupe-500"
        >
          למי זה מתאים, ואיך נראה התהליך מהפנייה הראשונה ועד הליווי המתמשך.
        </motion.p>
      </section>

      <section className="px-6 pb-24 sm:px-10 md:px-12 md:pb-32 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-2xl">
          <div className="relative border-r-2 border-dashed border-[#EF8486]/30 pr-8 sm:pr-12">
            <div className="space-y-16">
              {STEPS.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className="relative"
                >
                  <div className="absolute -right-[38px] top-1 flex h-7 w-7 items-center justify-center rounded-full border border-[#EF8486] bg-cream-200 text-sm font-medium text-[#EF8486] sm:-right-[46px]">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-medium text-taupe-600">{step.title}</h3>
                  <p className="mt-3 font-light leading-[1.9] text-taupe-500">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactBanner />
    </div>
  );
}

export default Process;
