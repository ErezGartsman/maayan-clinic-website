import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ArrowIcon from "../icons/ArrowIcon.jsx";

const OFFSETS = [
  { rotate: 0, x: 0, y: 0 },
  { rotate: -6, x: -14, y: 10 },
  { rotate: 5, x: 12, y: 18 },
  { rotate: -4, x: 8, y: 26 },
  { rotate: 3, x: -10, y: 32 },
  { rotate: -2, x: 4, y: 38 },
];

const DRAG_THRESHOLD = 120;

function ImageStack({ images = [] }) {
  const [order, setOrder] = useState(() => images.map((_, index) => index));
  const prefersReducedMotion = useReducedMotion();

  const sendToBack = (imageIndex) => {
    setOrder((current) => [...current.filter((i) => i !== imageIndex), imageIndex]);
  };

  return (
    <div className="mx-auto w-80 md:w-[28rem]">
      <div className="relative aspect-[4/3]">
        {order.map((imageIndex, stackPosition) => {
          const isFront = stackPosition === 0;
          const offset = prefersReducedMotion ? { rotate: 0, x: 0, y: 0 } : OFFSETS[stackPosition % OFFSETS.length];

          return (
            <motion.div
              key={imageIndex}
              className={isFront && !prefersReducedMotion ? "absolute inset-0 cursor-grab active:cursor-grabbing" : "absolute inset-0"}
              style={{ zIndex: order.length - stackPosition }}
              animate={{ rotate: offset.rotate, x: offset.x, y: offset.y, scale: 1 - stackPosition * 0.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              drag={isFront && !prefersReducedMotion ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_, info) => {
                if (Math.abs(info.offset.x) > DRAG_THRESHOLD) sendToBack(imageIndex);
              }}
              whileTap={isFront && !prefersReducedMotion ? { scale: 0.98 } : undefined}
            >
              <img
                src={images[imageIndex]}
                alt={`אישור הסמכה מקצועית ${imageIndex + 1}`}
                className="h-full w-full rounded-2xl border-4 border-cream-50 object-cover shadow-soft"
                draggable={false}
              />
            </motion.div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-center gap-3 text-taupe-400">
        <motion.span
          animate={prefersReducedMotion ? undefined : { x: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowIcon direction="start" className="h-3.5 w-3.5" />
        </motion.span>
        <span className="text-xs font-light tracking-wide">גררי לצדדים לצפייה בכל התעודות</span>
        <motion.span
          animate={prefersReducedMotion ? undefined : { x: [0, -5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowIcon direction="end" className="h-3.5 w-3.5" />
        </motion.span>
      </div>
    </div>
  );
}

export default ImageStack;
