import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { SERVICES } from "../../lib/services.js";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion.js";

function ServicesGrid() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="treatments"
      className="scroll-mt-24 bg-cream-300 px-6 py-24 sm:px-10 md:scroll-mt-28 md:px-12 md:py-32 lg:px-16 xl:px-24"
    >
      <div className="mx-auto max-w-[1600px]">
        <h2 className="mb-16 text-center text-[40px] leading-tight text-taupe-600 md:mb-20">
          תחומי טיפול
        </h2>

        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={prefersReducedMotion ? undefined : staggerContainer}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.slug} variants={prefersReducedMotion ? undefined : fadeUp}>
              <Link
                to={`/services/${service.slug}`}
                onClick={() => window.scrollTo(0, 0)}
                className="group relative block aspect-[4/3] overflow-hidden focus:outline-none"
              >
                <div className="absolute inset-2 overflow-hidden border border-cream-100/60 sm:inset-3">
                  <img
                    src={service.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105 group-focus:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-taupe-900/70 via-taupe-900/15 to-transparent" />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-[400ms] ease-out group-hover:bg-black/40 group-focus:bg-black/40" />

                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 p-6 text-center transition-transform duration-[400ms] ease-out group-hover:-translate-y-2 group-focus:-translate-y-2">
                    <h3 className="text-cream-100">{service.title}</h3>
                    <p className="text-sm text-cream-200/90">{service.gridBody}</p>

                    <span className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-[400ms] ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus:grid-rows-[1fr] group-focus:opacity-100">
                      <span className="overflow-hidden">
                        <span className="mt-1 inline-flex items-center rounded-full border border-cream-100/70 px-5 py-2 text-[13px] font-medium tracking-wide text-cream-100">
                          פרטים נוספים
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesGrid;
