import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import SpaceScene from "../components/space-scene";
import profilePhoto from "../assets/portraits/foto-perfil.jpeg";

const roles = [
  "Data Analyst",
  "Software Developer",
  "DevOps Engineer",
  "Cloud Enthusiast",
  "Creative Problem Solver",
  "AI Specialist",
  "Game Developer",
  "Digital Creator",
];

function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isWordComplete = letterIndex === currentWord.length;
    const isWordEmpty = letterIndex === 0;
    const delay = isDeleting ? 36 : isWordComplete ? 1050 : 66;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && isWordComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isWordEmpty) {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
        return;
      }

      setLetterIndex((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, letterIndex, wordIndex, words]);

  return words[wordIndex].slice(0, letterIndex);
}

export default function Hero() {
  const typedRole = useTypewriter(roles);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 24 });
  
  const layer1X = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const layer1Y = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);
  const layer2X = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const layer2Y = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);
  const layer3X = useTransform(smoothX, [-0.5, 0.5], [-28, 28]);
  const layer3Y = useTransform(smoothY, [-0.5, 0.5], [-18, 18]);

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    mouseY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(91,33,182,0.28),transparent_34%),radial-gradient(circle_at_78%_20%,rgba(212,175,55,0.12),transparent_22%),linear-gradient(180deg,#030712_0%,#090B15_48%,#0A0F1E_100%)] px-5 pb-16 pt-28 md:px-10 lg:px-16"
    >
      <SpaceScene />

      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mouseX.get() * 100}% ${mouseY.get() * 100}%, rgba(212,175,55,0.06), transparent 40%)`,
        }}
      />

      <motion.div
        aria-hidden="true"
        className="star-field absolute inset-0 z-0 opacity-30"
        style={{ x: layer1X, y: layer1Y }}
        animate={{ backgroundPosition: ["0px 0px", "120px 180px"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        aria-hidden="true"
        className="cosmic-grid absolute inset-0 z-0 opacity-35"
        style={{ x: layer2X, y: layer2Y }}
        animate={{ 
          opacity: [0.35, 0.42, 0.35],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-20"
        style={{ x: layer3X, y: layer3Y }}
        animate={{ 
          backgroundPosition: ["0px 0px", "240px 320px"],
          opacity: [0.18, 0.24, 0.18]
        }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />

      <div aria-hidden="true" className="meteor right-0 top-24 z-0" />
      <div
        aria-hidden="true"
        className="meteor right-32 top-10 z-0 [animation-delay:4.8s] [animation-duration:11s]"
      />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="absolute left-2 top-20 z-20 hidden lg:block lg:left-8"
      >
        <div className="relative w-40 overflow-hidden rounded-[3px] border border-gold-400/40 bg-space-950/85 shadow-[0_0_80px_rgba(212,175,55,0.18)] backdrop-blur-md">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.12),transparent_50%)]" />
          
          <div className="relative p-2">
            <div className="flex items-center justify-between border-b border-white/8 pb-1.5">
              <p className="font-display text-[5px] uppercase tracking-[0.4em] text-gold-400">
                MONITORING
              </p>
              <div className="flex gap-0.5">
                <span className="h-0.5 w-0.5 rounded-full bg-gold-400 shadow-[0_0_4px_rgba(212,175,55,0.9)] animate-pulse" />
                <span className="h-0.5 w-0.5 rounded-full bg-gold-400/60" />
                <span className="h-0.5 w-0.5 rounded-full bg-gold-400/40" />
                <span className="h-0.5 w-0.5 rounded-full bg-gold-400/20" />
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-1.5">
              <div className="flex items-center gap-1">
                <div className="h-16 w-16 overflow-hidden rounded-full border border-gold-400/25 bg-space-950/90">
                  <img
                    src={profilePhoto}
                    alt="CMD"
                    className="h-full w-full object-cover object-[50%_42%] opacity-90"
                  />
                  <div className="absolute inset-0 rounded-full border border-dashed border-gold-400/15" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="h-0.5 w-8 bg-gradient-to-r from-gold-400/60 to-transparent" />
                  <div className="h-0.5 w-6 bg-gradient-to-r from-gold-400/40 to-transparent" />
                  <div className="h-0.5 w-10 bg-gradient-to-r from-gold-400/30 to-transparent" />
                  <div className="h-0.5 w-4 bg-gradient-to-r from-gold-400/20 to-transparent" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="font-display text-[4px] uppercase tracking-[0.2em] text-stellar-400">
                  ID: KMR-2026
                </p>
                <p className="text-[5px] font-semibold text-gold-400">
                  ACTIVE
                </p>
              </div>

              <div className="grid grid-cols-2 gap-1">
                <div className="flex flex-col">
                  <p className="text-[3px] text-stellar-500">COORDS</p>
                  <p className="text-[4px] font-mono text-gold-400/70">42.871°N</p>
                  <p className="text-[4px] font-mono text-gold-400/70">17.227°W</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[3px] text-stellar-500">SYS</p>
                  <p className="text-[4px] font-mono text-gold-400/70">98.4%</p>
                  <p className="text-[4px] font-mono text-gold-400/70">STABLE</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-gold-400/60 to-gold-400/30"
                    animate={{ width: ["75%", "82%", "75%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <p className="text-[3px] font-mono text-stellar-500">PWR</p>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-1">
                <p className="text-[3px] font-mono text-stellar-600">RX: 8472</p>
                <p className="text-[3px] font-mono text-stellar-600">TX: 9201</p>
                <p className="text-[3px] font-mono text-gold-400/50 animate-pulse">LIVE</p>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
            <div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-gold-400/30" />
            <div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-gold-400/30" />
            <div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-gold-400/30" />
            <div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-gold-400/30" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 52, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr]"
      >
        <div>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ textShadow: '0 0 50px rgba(212,175,55,0.25), 0 0 100px rgba(212,175,55,0.12)' }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="name-glow max-w-5xl font-display text-6xl font-black uppercase leading-[0.9] tracking-normal text-stellar-100 md:text-8xl lg:text-9xl"
            style={{ textShadow: '0 0 40px rgba(212,175,55,0.15), 0 0 80px rgba(212,175,55,0.08)' }}
          >
            Kauan
            <span className="block text-4xl text-stellar-300 md:text-6xl lg:text-7xl">
              Moura Rebelo
            </span>
          </motion.h1>

          <motion.div 
            className="mt-8 min-h-8 font-display text-lg font-bold uppercase tracking-[0.18em] text-gold-400 md:text-2xl"
            whileHover={{ letterSpacing: '0.22em' }}
            transition={{ duration: 0.3 }}
          >
            <span className="typing-caret">{typedRole}</span>
          </motion.div>

          <motion.p 
            className="mt-7 max-w-2xl text-base leading-8 text-stellar-300 md:text-lg"
            whileHover={{ color: 'rgba(248,250,252,0.95)' }}
            transition={{ duration: 0.3 }}
          >
            Ciência da Computação, dados, software, IA e criatividade operando
            como uma única missão: construir soluções que resolvem problemas reais.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 1 }}
          className="relative hidden min-h-[560px] lg:block"
        >
          <div
            aria-hidden="true"
            className="absolute left-[7%] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-violet-800/30 bg-[radial-gradient(circle_at_35%_25%,rgba(248,250,252,0.14),rgba(212,175,55,0.08)_24%,rgba(91,33,182,0.24)_54%,rgba(3,7,18,0.92)_80%)] shadow-[0_0_120px_rgba(91,33,182,0.28)]"
          />

          <div
            aria-hidden="true"
            className="absolute right-[4%] top-[36%] h-px w-28 bg-gradient-to-l from-gold-400/40 to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-[30%] left-[18%] h-px w-20 bg-gradient-to-r from-gold-400/30 to-transparent"
          />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-stellar-400 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.4, duration: 2.2, repeat: Infinity }}
      >
        <span className="font-display text-[10px] uppercase tracking-[0.4em]">
          Scroll
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-gold-400 to-transparent" />
      </motion.div>
    </section>
  );
}
