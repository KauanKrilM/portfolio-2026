import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const introSteps = [
  { text: "INITIALIZING SYSTEM", duration: 420 },
  { text: "SCANNING SECTOR", duration: 420 },
  { text: "SIGNAL AUTHENTICATED", duration: 360 },
  { text: "COMMANDER DETECTED", duration: 520 },
];

export default function IntroAnimation() {
  const [step, setStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    if (step < introSteps.length) {
      const timer = window.setTimeout(() => {
        setStep((current) => current + 1);
      }, introSteps[step].duration);

      return () => window.clearTimeout(timer);
    }

    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, 180);

    return () => window.clearTimeout(exitTimer);
  }, [step]);

  if (!isMounted) return null;

  return (
    <AnimatePresence onExitComplete={() => setIsMounted(false)}>
      {!isExiting && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.42, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-space-950"
        >
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.12),transparent_28%),radial-gradient(circle_at_50%_50%,rgba(91,33,182,0.18),transparent_44%)]"
            animate={{ opacity: [0.65, 1, 0.65], scale: [1, 1.04, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            aria-hidden="true"
            className="absolute h-72 w-72 rounded-full border border-gold-400/20"
            animate={{ scale: [0.86, 1.08], opacity: [0.1, 0.45, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
          />

          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
            transition={{ duration: 0.22 }}
            className="relative z-10 text-center"
          >
            <p className="font-display text-xs font-bold uppercase tracking-[0.55em] text-gold-400 md:text-sm">
              {introSteps[step]?.text ?? "ACCESS GRANTED"}
            </p>
            <div className="mx-auto mt-5 h-px w-56 overflow-hidden bg-white/10">
              <motion.span
                className="block h-full bg-gradient-to-r from-transparent via-gold-400 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
