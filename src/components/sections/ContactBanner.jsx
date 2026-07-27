import { motion, useReducedMotion } from "framer-motion";
import WhatsAppButton from "../ui/WhatsAppButton.jsx";
import BookTreatmentButton from "../ui/BookTreatmentButton.jsx";
import { fadeUp, viewportOnce } from "../../lib/motion.js";

function ContactBanner() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative flex min-h-[520px] items-center justify-center overflow-hidden px-6 py-24 text-center sm:px-10 md:min-h-[620px]"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img src="/background-info.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-taupe-900/35" />
      </div>

      <motion.div
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
        variants={prefersReducedMotion ? undefined : fadeUp}
        className="relative max-w-6xl"
      >
        <h2 className="text-cream-100">מעוניינת לקבוע טיפול או להתייעץ?</h2>
        <p className="mt-4 text-xl font-light text-cream-200/85">אני כאן בשבילכן</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <WhatsAppButton variant="light" className="!text-lg">
            דברי איתי בצ'אט
          </WhatsAppButton>
          <BookTreatmentButton variant="ghost" className="!text-lg" />
        </div>
      </motion.div>
    </section>
  );
}

export default ContactBanner;
