import { motion, useReducedMotion } from "framer-motion";
import WhatsAppIcon from "../icons/WhatsAppIcon.jsx";
import { WHATSAPP_HREF } from "../../lib/whatsapp.js";

const VARIANT_CLASSES = {
  filled: "bg-terracotta-600 text-cream-100 hover:bg-terracotta-700",
  light: "bg-cream-100 text-taupe-700 hover:bg-white",
  ghost: "border border-cream-100/40 text-cream-100 hover:border-cream-100/70 hover:bg-cream-100/10",
};

function WhatsAppButton({
  children = "לתיאום טיפול בוואטסאפ",
  variant = "filled",
  icon: Icon = WhatsAppIcon,
  className = "",
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();
  const tap = prefersReducedMotion ? undefined : { scale: 0.97 };
  const hover = prefersReducedMotion ? undefined : { scale: 1.01 };

  const classes = [
    "inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-full px-7 py-3.5",
    "text-[13px] font-medium tracking-wide",
    "transition-colors duration-[400ms] ease-out",
    VARIANT_CLASSES[variant],
    className,
  ].join(" ");

  return (
    <motion.a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={hover}
      whileTap={tap}
      className={classes}
      {...props}
    >
      <Icon className="h-4 w-4 shrink-0" />
      {children}
    </motion.a>
  );
}

export default WhatsAppButton;
