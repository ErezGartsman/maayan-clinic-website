import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion.js";

function FaqSection({ title, description, items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-cream-200 px-6 pb-24 pt-32 sm:px-10 md:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-12 h-56 w-[28rem] -translate-x-1/2 rounded-full bg-blush-300/40 blur-3xl md:h-72 md:w-[36rem]"
      />

      <motion.div
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
        variants={prefersReducedMotion ? undefined : fadeUp}
        className="relative mx-auto max-w-2xl text-center"
      >
        <h1 className="text-taupe-600">{title}</h1>
        {description && (
          <p className="mt-6 font-light leading-[1.9] text-taupe-500">{description}</p>
        )}
      </motion.div>

      <motion.div
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
        variants={prefersReducedMotion ? undefined : staggerContainer}
        className="relative mx-auto mt-16 max-w-3xl divide-y divide-taupe-500/10 md:mt-20"
      >
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;

          return (
            <motion.div key={item.question} variants={prefersReducedMotion ? undefined : fadeUp}>
              <h2>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 py-6 text-start text-lg font-medium text-taupe-600 transition-colors duration-200 hover:text-terracotta-600"
                >
                  <span>{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                    className="shrink-0 text-taupe-400"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>
              </h2>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 font-light leading-[1.9] text-taupe-500">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default FaqSection;
