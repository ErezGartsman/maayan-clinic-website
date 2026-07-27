import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import WhatsAppButton from "../components/ui/WhatsAppButton.jsx";
import { getServiceBySlug } from "../lib/services.js";
import { WHATSAPP_PHONE } from "../lib/whatsapp.js";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion.js";

function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    document.title = service
      ? `${service.title} | מעיין ווקסלמן`
      : "טיפול לא נמצא | מעיין ווקסלמן";
  }, [service]);

  if (!service) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-cream-200 px-6 pt-24 text-center">
        <h1 className="text-taupe-600">הטיפול לא נמצא</h1>
        <Link to="/#treatments" className="text-base font-medium tracking-wide text-terracotta-600 hover:text-terracotta-700">
          חזרה לכל הטיפולים
        </Link>
      </div>
    );
  }

  const { detail } = service;
  const whatsappMessage = `היי מעיין, הגעתי מהאתר שלך, אשמח לתאם טיפול ${service.title} 🪷`;
  const whatsappHref = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-cream-200">
      <section className="relative flex min-h-[440px] items-center justify-center overflow-hidden px-6 py-28 text-center sm:px-10">
        <img src={service.image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-taupe-900/40" aria-hidden="true" />

        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={prefersReducedMotion ? undefined : staggerContainer}
          className="relative max-w-xl"
        >
          <motion.p
            variants={prefersReducedMotion ? undefined : fadeUp}
            className="text-base font-medium tracking-[0.1em] text-cream-100"
          >
            {detail.eyebrow}
          </motion.p>
          <motion.h1 variants={prefersReducedMotion ? undefined : fadeUp} className="mt-5 text-cream-100">
            {detail.headline}
          </motion.h1>
          <motion.p
            variants={prefersReducedMotion ? undefined : fadeUp}
            className="mt-4 font-light text-cream-200/85"
          >
            {detail.subtitle}
          </motion.p>
        </motion.div>
      </section>

      <div className="px-6 pt-16 sm:px-10 md:px-12 md:pt-20 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-[1400px] space-y-20 md:space-y-28">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
            <motion.div
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={viewportOnce}
              variants={prefersReducedMotion ? undefined : staggerContainer}
              className="mx-auto max-w-md md:mx-0"
            >
              <motion.h2 variants={prefersReducedMotion ? undefined : fadeUp} className="text-taupe-600">
                {detail.headline}
              </motion.h2>
              {detail.paragraphs.map((paragraph) => (
                <motion.p
                  key={paragraph.slice(0, 20)}
                  variants={prefersReducedMotion ? undefined : fadeUp}
                  className="mt-6 font-light leading-[1.9] text-taupe-500"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            <motion.img
              src={service.image1}
              alt=""
              aria-hidden="true"
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={viewportOnce}
              variants={prefersReducedMotion ? undefined : fadeUp}
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
          </div>

          <div className="grid grid-cols-1 items-center gap-10 pb-20 md:grid-cols-2 md:gap-16 md:pb-28">
            <motion.img
              src={service.image2}
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
              <h2 className="text-taupe-600">{detail.listHeadline}</h2>
              <ul className="mt-6 space-y-3">
                {detail.listItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-[1.7] text-taupe-500">
                    <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-terracotta-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="px-6 py-16 text-center sm:px-10 md:py-20">
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={prefersReducedMotion ? undefined : fadeUp}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          <WhatsAppButton href={whatsappHref}>{`לתיאום ${service.title} בוואטסאפ`}</WhatsAppButton>
          <Link to="/#treatments" className="text-taupe-600 transition-colors hover:text-[#EF8486]">
            לכל הטיפולים &gt;
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default ServiceDetail;
