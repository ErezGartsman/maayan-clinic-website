import { motion, useReducedMotion } from "framer-motion";

function Preloader() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-cream-200"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: prefersReducedMotion ? 0.15 : 0.55, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center">
        <motion.img
          src="/logo.png"
          alt="מעיין ווקסלמן"
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0.15 : 0.8, ease: "easeInOut" }}
          className="h-36 w-auto sm:h-44"
        />
        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.15 : 0.8, delay: prefersReducedMotion ? 0 : 0.3, ease: "easeInOut" }}
          className="mt-4 font-display text-sm tracking-[0.3em] text-taupe-500"
        >
          Ma'ayan Vekselman
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Preloader;
