import { motion, useReducedMotion } from "framer-motion";
import ArrowIcon from "../icons/ArrowIcon.jsx";
import { useDrawer } from "../../lib/DrawerContext.jsx";

const VARIANT_CLASSES = {
  ghost: "border border-cream-100/40 text-cream-100 hover:border-cream-100/70 hover:bg-cream-100/10",
  outline: "border border-taupe-400/40 text-taupe-600 hover:border-terracotta-500 hover:text-terracotta-600",
};

function BookTreatmentButton({ variant = "ghost", className = "", onClick, ...props }) {
  const { openDrawer } = useDrawer();
  const prefersReducedMotion = useReducedMotion();
  const tap = prefersReducedMotion ? undefined : { scale: 0.97 };
  const hover = prefersReducedMotion ? undefined : { scale: 1.01 };

  const handleClick = (event) => {
    onClick?.(event);
    openDrawer();
  };

  const classes = [
    "inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-full px-7 py-3.5",
    "text-[13px] font-medium tracking-wide",
    "transition-colors duration-[400ms] ease-out",
    VARIANT_CLASSES[variant],
    className,
  ].join(" ");

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={hover}
      whileTap={tap}
      className={classes}
      {...props}
    >
      הזמנת טיפול
      <ArrowIcon direction="end" className="h-4 w-4 shrink-0" />
    </motion.button>
  );
}

export default BookTreatmentButton;
