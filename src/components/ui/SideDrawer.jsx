import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ArrowIcon from "../icons/ArrowIcon.jsx";
import { SERVICES } from "../../lib/services.js";
import { useDrawer } from "../../lib/DrawerContext.jsx";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const inputClasses =
  "mt-2 w-full min-h-[48px] border-0 border-b border-taupe-300 bg-transparent px-0 py-3 text-lg text-taupe-600 outline-none transition-colors duration-200 placeholder:text-taupe-300 focus:border-terracotta-500";

function SideDrawer() {
  const { open, closeDrawer } = useDrawer();
  const panelRef = useRef(null);
  const titleId = useId();
  const prefersReducedMotion = useReducedMotion();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState("");
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!open) return undefined;

    const previouslyFocused = document.activeElement;
    panelRef.current?.focus();
    document.body.style.overflow = "hidden";
    setName("");
    setPhone("");
    setTreatment("");
    setStatus("idle");

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeDrawer();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [open, closeDrawer]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const treatmentLabel =
      SERVICES.find((service) => service.slug === treatment)?.title ??
      "עוד לא יודעת — מבקשת להתייעץ";

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name, phone, treatment: treatmentLabel },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const isSending = status === "sending";

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[110] bg-taupe-900/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
            onClick={closeDrawer}
            aria-hidden="true"
          />

          <motion.div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ x: prefersReducedMotion ? 0 : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: prefersReducedMotion ? 0 : "-100%" }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 left-0 z-[120] flex w-full max-w-[400px] flex-col overflow-hidden rounded-l-none rounded-r-[20px] bg-cream-50 shadow-soft focus:outline-none"
          >
            <div className="relative shrink-0 rounded-tr-[20px] bg-[#EF8486] px-6 py-7 text-center">
              <button
                type="button"
                onClick={closeDrawer}
                aria-label="סגירה"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-taupe-700 transition duration-200 hover:bg-cream-100 active:scale-90"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
              <h2 id={titleId} className="font-display text-3xl font-medium text-white">
                {status === "success" ? "תודה רבה!" : "הזמנת טיפול"}
              </h2>
              <p className="mt-2 text-base leading-relaxed text-white/85">
                {status === "success"
                  ? "הפרטים נשלחו בהצלחה"
                  : "מלאי את הפרטים ואחזור אלייך לאישור ההזמנה"}
              </p>
            </div>

            <div className="flex flex-1 flex-col overflow-y-auto px-8 py-5 sm:px-10">
              {status === "success" ? (
                <div className="flex flex-1 flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-100 text-terracotta-600">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="mt-4 text-sm leading-[1.8] text-taupe-500">
                    קיבלתי את הפרטים שלך{name ? `, ${name}` : ""}. אחזור אלייך בהקדם לתיאום מועד
                    הטיפול. מחכה לפגוש אותך במרחב 🧡
                  </p>
                  <button
                    type="button"
                    onClick={closeDrawer}
                    className="mt-6 inline-flex min-h-[44px] items-center justify-center gap-2.5 self-start rounded-full bg-terracotta-600 px-7 py-3.5 text-[13px] font-medium tracking-wide text-cream-100 transition-colors duration-[400ms] hover:bg-terracotta-700"
                  >
                    סגירה
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-1 flex-col justify-between">
                  <div className="space-y-6">
                    <label className="block text-base font-medium text-taupe-500">
                      שם פרטי<span className="text-terracotta-600">*</span>
                      <input
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        disabled={isSending}
                        className={inputClasses}
                      />
                    </label>

                    <label className="block text-base font-medium text-taupe-500">
                      טלפון<span className="text-terracotta-600">*</span>
                      <input
                        required
                        type="tel"
                        inputMode="tel"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        disabled={isSending}
                        className={inputClasses}
                      />
                    </label>
                  </div>

                  <fieldset disabled={isSending}>
                    <legend className="text-base font-medium text-taupe-500">איזה סוג טיפול את מעוניינת בו?</legend>
                    <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3">
                      {SERVICES.map((service) => (
                        <label key={service.slug} className="flex items-center gap-2 text-sm text-taupe-600">
                          <input
                            type="radio"
                            name="treatment"
                            value={service.slug}
                            checked={treatment === service.slug}
                            onChange={() => setTreatment(service.slug)}
                            className="h-4 w-4 shrink-0 accent-terracotta-600"
                          />
                          <span className="truncate">{service.title}</span>
                        </label>
                      ))}
                      <label className="col-span-2 flex items-center gap-2 text-sm text-taupe-600">
                        <input
                          type="radio"
                          name="treatment"
                          value=""
                          checked={treatment === ""}
                          onChange={() => setTreatment("")}
                          className="h-4 w-4 shrink-0 accent-terracotta-600"
                        />
                        עוד לא יודעת, אשמח להתייעץ
                      </label>
                    </div>
                  </fieldset>

                  <div>
                    <motion.button
                      type="submit"
                      disabled={isSending}
                      whileHover={prefersReducedMotion || isSending ? undefined : { scale: 1.01 }}
                      whileTap={prefersReducedMotion || isSending ? undefined : { scale: 0.98 }}
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#EF8486] px-7 py-3 text-[13px] font-medium tracking-wide text-[#EF8486] transition-colors duration-[400ms] hover:bg-[#EF8486] hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSending ? (
                        "שולחת…"
                      ) : (
                        <>
                          שליחה
                          <ArrowIcon direction="end" className="h-4 w-4 shrink-0" />
                        </>
                      )}
                    </motion.button>

                    {status === "error" && (
                      <p className="mt-3 text-sm leading-relaxed text-terracotta-700">
                        השליחה נכשלה. אפשר לנסות שוב, או לפנות אליי ישירות בוואטסאפ.
                      </p>
                    )}

                    <p className="mt-3 text-xs leading-relaxed text-taupe-300">
                      *זוהי אינה מערכת תורים, לאחר שליחת ההזמנה אחזור אלייך שנאשר סופית את יום הטיפול
                      והשעה
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default SideDrawer;
