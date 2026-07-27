import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import ArrowIcon from "../icons/ArrowIcon.jsx";
import { fadeUp, viewportOnce } from "../../lib/motion.js";

const TESTIMONIALS = [
  {
    quote:
      "סבלתי ממיגרנות כמעט כל שבוע במשך שנתיים. הייתי אצל נוירולוג, לקחתי כדורים, כלום לא ממש עזר לאורך זמן. אחרי בערך חודש וחצי של דיקור אצל מעיין שמתי לב שעברו שבועיים שלמים בלי התקף.",
  },
  {
    quote:
      "הגעתי שבורה מעייפות. שלוש שנים בלי חופש אמיתי, כל הזמן בתפקוד. הטיפול הראשון בשיאצו היה הפעם הראשונה שהרשיתי לעצמי פשוט לשכב ולא לעשות כלום. בכיתי קצת בסוף ולא ידעתי בכלל למה.",
  },
  {
    quote:
      "אנחנו בטיפולי פוריות כבר שנה וחצי, וההחלטה לשלב דיקור לצד הטיפולים הרפואיים הייתה אחת ההחלטות הטובות שעשיתי. זה לא מבטיח שום דבר, אבל זה נותן לי תחושה שאני עושה משהו בשביל הגוף שלי.",
  },
  {
    quote:
      "נכנסתי לטיפול סאונד הילינג בעיקר מתוך סקרנות, לא חשבתי שזה יעשה לי משהו מיוחד. באמצע הטיפול פשוט התחלתי לבכות בלי סיבה ברורה. מעיין אמרה שזה קורה, שהגוף משחרר מה שהוא צריך.",
  },
  {
    quote:
      "באתי בעיקר בגלל לחץ בעבודה, בלי ציפיות גדולות. אני אחת שתמיד אמרה שמחטים זה לא בשבילי. אחרי הטיפול הראשון פשוט נרדמתי באוטו בחניה, וזה לא קרה לי שנים.",
  },
  {
    quote:
      "אחרי הלידה הגוף שלי הרגיש לי זר, כאילו הוא שייך למישהי אחרת. השיאצו אצל מעיין עזר לי לחזור פנימה, לא במילים גדולות, פשוט מגע איטי ובטוח.",
  },
  {
    quote:
      "המחזורים שלי היו פרועים לגמרי, אף פעם לא ידעתי מתי משהו יקרה. אחרי כמה חודשים של ליווי אצל מעיין הגוף שלי התחיל להתנהג בצורה הרבה יותר צפויה. זה נשמע קטן, אבל בשבילי זה שינה הכל.",
  },
  {
    quote:
      "סבלתי מנדודי שינה כרוניים, שנים של תרופות שעוזרות חצי חצי. אחרי טיפול סאונד הילינג ישנתי באותו לילה שינה שלמה בפעם הראשונה מזמן.",
  },
  {
    quote:
      "התרגלתי לחיות עם בעיות עיכול ונדודי שינה, חשבתי שזה פשוט אני. מעיין שאלה אותי שאלות שאף רופא לא שאל, על השינה, על המחזור, על איך אני מתפקדת ביום רגיל. הגוף שלי היום פשוט רגוע יותר.",
  },
  {
    quote:
      "אני בדרך כלל לא אוהבת שנוגעים בי, גם עיסויים רגילים מלחיצים אותי. עם מעיין זה שונה. היא שואלת, מסבירה, נותנת לי להרגיש שאני שולטת בכל רגע.",
  },
  {
    quote:
      "הכי קשה בתהליך הפוריות זה לא הגוף, זה הראש. מעיין הייתה המקום היחיד שבו יכולתי לבכות בלי להסביר, לכעוס בלי להצטדק. הטיפול עצמו עזר, אבל ההקשבה שלה עזרה לא פחות.",
  },
  {
    quote:
      "קשה לי להסביר את התחושה הפיזית, זה כמו רטט שעובר בכל הגוף ואיכשהו מרגיע אותך מבפנים. אחרי הטיפול הרגשתי כאילו חזרתי לגוף שלי אחרי שנים שהייתי מנותקת ממנו.",
  },
];

const AUTOPLAY_MS = 7000;

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const next = useCallback(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);

  useEffect(() => {
    if (prefersReducedMotion || paused) return undefined;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [index, next, prefersReducedMotion, paused]);

  const current = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="scroll-mt-24 bg-cream-200 px-6 py-24 sm:px-10 md:scroll-mt-28 md:py-36">
      <motion.div
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
        variants={prefersReducedMotion ? undefined : fadeUp}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-[40px] leading-tight text-taupe-600">המילים שלכן</h2>
        <div className="mx-auto mt-8 h-px w-10 bg-terracotta-300" />

        <div className="relative mt-10 rounded-[28px] border border-terracotta-300/50 px-6 py-8">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-4 right-4 select-none font-display text-2xl leading-none text-terracotta-500 sm:text-3xl"
          >
            &ldquo;
          </span>

          <div className="relative min-h-[17rem] sm:min-h-[11rem] md:min-h-[10rem]">
            <AnimatePresence>
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: prefersReducedMotion ? 0.2 : 0.9, ease: "easeInOut" }}
                className="absolute inset-x-0 top-3 bottom-0"
              >
                <p className="font-display text-xl font-light leading-[1.7] text-taupe-600 md:text-2xl">
                  {current.quote}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-4 left-4 select-none font-display text-2xl leading-none text-terracotta-500 sm:text-3xl"
          >
            &rdquo;
          </span>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="העדות הקודמת"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-taupe-300/50 text-taupe-400 transition duration-200 hover:border-terracotta-500 hover:text-terracotta-600 active:scale-90"
          >
            <ArrowIcon direction="start" className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="העדות הבאה"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-taupe-300/50 text-taupe-400 transition duration-200 hover:border-terracotta-500 hover:text-terracotta-600 active:scale-90"
          >
            <ArrowIcon direction="end" className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default Testimonials;
