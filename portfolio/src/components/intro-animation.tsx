import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const introSteps = [
  { text: "INITIALIZING SYSTEM...", duration: 400 },
  { text: "CONNECTING...", duration: 400 },
  { text: "MISSION AUTHENTICATED", duration: 300 },
  { text: "MISSION COMMANDER DETECTED", duration: 300 },
];

export default function IntroAnimation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    if (currentStep < introSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, introSteps[currentStep].duration);
      return () => clearTimeout(timer);
    } else if (!isZooming) {
      setIsZooming(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentStep, isZooming]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.8 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-space-950 overflow-hidden"
        >
          {isZooming ? (
            <motion.div
              initial={{ scale: 0.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-40 h-40 border-2 border-gold-400/40 rounded-[3px] bg-space-950/30"
            />
          ) : (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="font-display text-sm uppercase tracking-[0.5em] text-gold-400 text-center"
            >
              {currentStep < introSteps.length ? introSteps[currentStep].text : ""}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
