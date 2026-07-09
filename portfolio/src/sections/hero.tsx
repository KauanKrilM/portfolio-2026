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

function MissionCommanderMonitor() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="absolute -top-20 left-4 z-20 hidden lg:block"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative w-48 overflow-hidden rounded-[2px] border border-gold-400/35 bg-space-950/80 shadow-[0_0_60px_rgba(212,175,55,0.15)] backdrop-blur-sm group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.08),transparent_60%)]" />

        <div className="relative p-2.5 space-y-2">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/6 pb-1.5">
            <p className="font-display text-[4px] uppercase tracking-[0.3em] text-gold-400/80">
              ◆ SYSTEM MONITORING
            </p>
            <motion.div
              className="flex gap-0.5"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="h-0.5 w-0.5 rounded-full bg-gold-400 shadow-[0_0_3px_rgba(212,175,55,0.8)]" />
              <span className="h-0.5 w-0.5 rounded-full bg-gold-400/50" />
              <span className="h-0.5 w-0.5 rounded-full bg-gold-400/30" />
            </motion.div>
          </div>

          {/* Profile & Stats */}
          <div className="space-y-1.5">
            <div className="flex items-start gap-1.5">
              <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-sm border border-gold-400/20 bg-space-950/80">
                <img
                  src={profilePhoto}
                  alt="CMDR"
                  className="h-full w-full object-cover object-[50%_42%] opacity-85"
                />
              </div>
              <div className="flex-1 min-w-0 space-y-0.5">
                <div className="h-px w-16 bg-gradient-to-r from-gold-400/50 to-transparent" />
                <div className="h-px w-12 bg-gradient-to-r from-gold-400/35 to-transparent" />
                <div className="h-px w-14 bg-gradient-to-r from-gold-400/25 to-transparent" />
              </div>
            </div>

            {/* ID & Status */}
            <div className="flex items-center justify-between text-[3.5px] font-mono">
              <span className="text-stellar-400 tracking-[0.1em]">ID: KMR-2026-X</span>
              <motion.span
                className="text-gold-400 font-semibold tracking-[0.15em]"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ■ ACTIVE
              </motion.span>
            </div>

            {/* Grid Stats */}
            <div className="grid grid-cols-3 gap-1 pt-0.5 border-t border-white/5">
              <div className="space-y-0.5">
                <p className="text-[2.5px] text-stellar-500 uppercase tracking-[0.05em]">
                  COORDS
                </p>
                <p className="text-[3px] font-mono text-gold-400/60">42.87°N</p>
                <p className="text-[3px] font-mono text-gold-400/60">17.22°W</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-[2.5px] text-stellar-500 uppercase tracking-[0.05em]">
                  STATUS
                </p>
                <p className="text-[3px] font-mono text-green-400/70">●ONLINE</p>
                <p className="text-[3px] font-mono text-gold-400/60">98.4%</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-[2.5px] text-stellar-500 uppercase tracking-[0.05em]">
                  SIGNAL
                </p>
                <div className="flex gap-0.5">
                  <motion.div
                    className="h-1 w-1 bg-gold-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: 0,
                    }}
                  />
                  <motion.div
                    className="h-1 w-1 bg-gold-400/70"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: 0.1,
                    }}
                  />
                  <motion.div
                    className="h-1 w-1 bg-gold-400/40"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: 0.2,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Power Bar */}
            <div className="flex items-center gap-1 pt-0.5">
              <div className="flex-1 h-0.5 bg-white/8 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold-400/70 to-gold-400/30 rounded-full"
                  animate={{ width: ["70%", "85%", "70%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <p className="text-[2.5px] font-mono text-stellar-500">PWR</p>
            </div>

            {/* Data Flow */}
            <div className="flex items-center justify-between text-[3px] font-mono text-stellar-600 border-t border-white/4 pt-1">
              <span>RX: 8,472</span>
              <span>TX: 9,201</span>
              <motion.span
                className="text-gold-400/60"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ● LIVE
              </motion.span>
            </div>
          </div>

          {/* Corner Accents */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
          <div className="absolute top-0 left-0 h-1 w-1 border-t border-l border-gold-400/25" />
          <div className="absolute top-0 right-0 h-1 w-1 border-t border-r border-gold-400/25" />
          <div className="absolute bottom-0 left-0 h-1 w-1 border-b border-l border-gold-400/25" />
          <div className="absolute bottom-0 right-0 h-1 w-1 border-b border-r border-gold-400/25" />

          {/* Glow on hover */}
          <div className="absolute inset-0 rounded-[2px] bg-gold-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const typedRole = useTypewriter(roles);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 20 });

  // Layer 1: Small stars - very slow (Layer 1)
  const layer1X = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);
  const layer1Y = useTransform(smoothY, [-0.5, 0.5], [-3, 3]);

  // Layer 2: Medium particles (Layer 2)
  const layer2X = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const layer2Y = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);

  // Layer 3: Nebula/Gradients - almost imperceptible (Layer 3)
  const layer3X = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const layer3Y = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

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
      {/* SpaceScene 3D */}
      <SpaceScene mouseX={smoothX.get()} mouseY={smoothY.get()} />

      {/* Dynamic Light Following Mouse */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mouseX.get() * 100}% ${mouseY.get() * 100}%, rgba(212,175,55,0.08), transparent 40%)`,
        }}
      />

      {/* Layer 1: Small Stars (Fastest) */}
      <motion.div
        aria-hidden="true"
        className="star-field absolute inset-0 z-0 opacity-25"
        style={{ x: layer1X, y: layer1Y }}
        animate={{ backgroundPosition: ["0px 0px", "120px 180px"] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      {/* Layer 2: Medium Particles */}
      <motion.div
        aria-hidden="true"
        className="cosmic-grid absolute inset-0 z-0 opacity-28"
        style={{ x: layer2X, y: layer2Y }}
        animate={{
          opacity: [0.28, 0.35, 0.28],
          scale: [1, 1.01, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Layer 3: Nebula/Gradients (Almost Imperceptible) */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-15"
        style={{ x: layer3X, y: layer3Y }}
        animate={{
          backgroundPosition: ["0px 0px", "240px 320px"],
          opacity: [0.14, 0.18, 0.14],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Meteors */}
      <div aria-hidden="true" className="meteor right-0 top-24 z-0" />
      <div
        aria-hidden="true"
        className="meteor right-32 top-10 z-0 [animation-delay:4.8s] [animation-duration:11s]"
      />

      {/* Mission Commander Monitor */}
      <MissionCommanderMonitor />

      {/* Main Content */}
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
            whileHover={{
              textShadow:
                "0 0 60px rgba(212,175,55,0.3), 0 0 120px rgba(212,175,55,0.15)",
            }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="name-glow max-w-5xl font-display text-6xl font-black uppercase leading-[0.9] tracking-normal text-stellar-100 md:text-8xl lg:text-9xl"
            style={{
              textShadow:
                "0 0 40px rgba(212,175,55,0.18), 0 0 80px rgba(212,175,55,0.1)",
            }}
          >
            Kauan
            <span className="block text-4xl text-stellar-300 md:text-6xl lg:text-7xl">
              Moura Rebelo
            </span>
          </motion.h1>

          <motion.div
            className="mt-8 min-h-8 font-display text-lg font-bold uppercase tracking-[0.18em] text-gold-400 md:text-2xl"
            whileHover={{ letterSpacing: "0.22em" }}
            transition={{ duration: 0.3 }}
          >
            <span className="typing-caret">{typedRole}</span>
          </motion.div>

          <motion.p
            className="mt-7 max-w-2xl text-base leading-8 text-stellar-300 md:text-lg"
            whileHover={{ color: "rgba(248,250,252,0.95)" }}
            transition={{ duration: 0.3 }}
          >
            Ciência da Computação, dados, software, IA e criatividade operando
            como uma única missão: construir soluções que resolvem problemas
            reais.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 1 }}
          className="relative hidden min-h-[560px] lg:block"
        >
          <motion.div
            aria-hidden="true"
            className="absolute left-[7%] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-violet-800/30 bg-[radial-gradient(circle_at_35%_25%,rgba(248,250,252,0.14),rgba(212,175,55,0.08)_24%,rgba(91,33,182,0.24)_54%,rgba(3,7,18,0.92)_80%)] shadow-[0_0_120px_rgba(91,33,182,0.28)]"
            animate={{
              boxShadow: [
                "0_0_120px_rgba(91,33,182,0.25)",
                "0_0_140px_rgba(91,33,182,0.35)",
                "0_0_120px_rgba(91,33,182,0.25)",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
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

      {/* Scroll Indicator */}
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
