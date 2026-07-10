import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import profilePhoto from "../assets/portraits/foto-perfil.png";
import SpaceScene from "../components/space-scene";

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

const telemetry = [
  ["STATUS", "ONLINE"],
  ["LOCATION", "BRAZIL"],
  ["SPECIALTY", "GAME DEV"],
  ["STACK", "REACT"],
  ["SIGNAL", "98.7%"],
  ["PING", "12 ms"],
];

const technicalLabels = [
  { text: "SIGNAL", className: "left-[8%] top-[22%]" },
  { text: "UPLINK", className: "right-[14%] top-[18%]" },
  { text: "SECTOR 07", className: "left-[42%] top-[15%]" },
  { text: "SCAN", className: "right-[36%] top-[36%]" },
  { text: "POWER", className: "left-[12%] bottom-[22%]" },
  { text: "NETWORK", className: "right-[8%] bottom-[24%]" },
  { text: "RX / TX", className: "left-[47%] bottom-[16%]" },
  { text: "EARTH NODE", className: "right-[28%] bottom-[12%]" },
];

function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isWordComplete = letterIndex === currentWord.length;
    const isWordEmpty = letterIndex === 0;
    const delay = isDeleting ? 44 : isWordComplete ? 1250 : 74;

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
  const smoothX = useSpring(mouseX, { stiffness: 55, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 55, damping: 22 });
  const [planetPointer, setPlanetPointer] = useState({ x: 0, y: 0 });

  const starsX = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
  const starsY = useTransform(smoothY, [-0.5, 0.5], [-4, 4]);
  const dustX = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const dustY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);
  const hudX = useTransform(smoothX, [-0.5, 0.5], [10, -10]);
  const hudY = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const nameX = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);
  const nameY = useTransform(smoothY, [-0.5, 0.5], [-3, 3]);

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
    setPlanetPointer({ x, y });
  }

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(91,33,182,0.28),transparent_34%),radial-gradient(circle_at_78%_20%,rgba(212,175,55,0.12),transparent_22%),linear-gradient(180deg,#030712_0%,#090B15_48%,#0A0F1E_100%)] px-5 pb-16 pt-28 md:px-10 lg:px-16"
    >
      <SpaceScene mouseX={planetPointer.x} mouseY={planetPointer.y} />

      <motion.div
        aria-hidden="true"
        className="star-field absolute inset-0 z-0 opacity-35"
        style={{ x: starsX, y: starsY }}
        animate={{ backgroundPosition: ["0px 0px", "170px 260px"] }}
        transition={{ duration: 72, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        aria-hidden="true"
        className="cosmic-grid absolute inset-0 z-0 opacity-25"
        style={{ x: dustX, y: dustY }}
        animate={{ opacity: [0.18, 0.3, 0.18], scale: [1, 1.012, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_35%,rgba(212,175,55,0.08),transparent_24%),radial-gradient(circle_at_70%_58%,rgba(91,33,182,0.18),transparent_32%)]"
        style={{ x: dustX, y: dustY }}
        animate={{ opacity: [0.55, 0.8, 0.55] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div aria-hidden="true" className="meteor right-0 top-24 z-0" />
      <div
        aria-hidden="true"
        className="meteor right-32 top-10 z-0 [animation-delay:4.8s] [animation-duration:11s]"
      />

      {technicalLabels.map((label, index) => (
        <motion.span
          key={label.text}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.16, 0.42, 0.16] }}
          transition={{
            delay: 1 + index * 0.14,
            duration: 4 + index * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`pointer-events-none absolute z-10 hidden font-display text-[9px] uppercase tracking-[0.38em] text-gold-400/70 lg:block ${label.className}`}
        >
          {label.text}
        </motion.span>
      ))}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[12%] right-[10%] top-[48%] z-10 hidden h-px bg-gradient-to-r from-transparent via-gold-400/35 to-transparent lg:block"
      >
        <motion.span
          className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-gold-400 shadow-[0_0_18px_rgba(212,175,55,0.75)]"
          animate={{ left: ["12%", "72%", "12%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-20 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ x: nameX, y: nameY }}
          className="relative"
        >
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 h-px w-56 origin-left bg-gradient-to-r from-gold-400/70 to-transparent"
          />

          <motion.h1
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 1.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="name-glow drop-shadow-[0_0_40px_rgba(212,175,55,.18)]max-w-5xl font-display text-7xl font-black uppercase leading-[0.9] tracking-normal text-stellar-100 md:text-9xl lg:text-[9rem]"
          >
            Kauan
            <span className="block text-5xl text-stellar-300 md:text-7xl lg:text-8xl">
              Moura Rebelo
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.55, duration: 0.55 }}
            className="mt-8 min-h-8 font-display text-lg font-bold uppercase tracking-[0.18em] text-gold-400 md:text-2xl"
          >
            <span className="typing-caret">{typedRole}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.75, duration: 0.65 }}
            className="mt-7 max-w-2xl text-base leading-8 text-stellar-300 md:text-lg"
          >
            Transformando ideias em software, dados em decisões e tecnologia em experiências que geram impacto.
          </motion.p>

          <motion.div
            aria-hidden="true"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "min(34rem, 82vw)", opacity: 1 }}
            transition={{ delay: 1.35, duration: 0.9 }}
            className="absolute -right-8 top-1/2 hidden h-px bg-gradient-to-r from-gold-400/45 to-transparent lg:block"
          >
            <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-gold-400/60 bg-space-950 shadow-[0_0_16px_rgba(212,175,55,0.65)]" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 42, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.8, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          style={{ x: hudX, y: hudY }}
          className="relative mx-auto w-full max-w-[38rem]"
        >
          <motion.div
            className="relative min-h-[470px] overflow-hidden rounded-[18px] border border-gold-400/40 bg-space-950/60 p-5 shadow-[0_0_140px_rgba(212,175,55,.16)] backdrop-blur-xl md:min-h-[380px] md:p-6"
            animate={{
              boxShadow: [
                "0 0 70px rgba(212,175,55,0.1)",
                "0 0 100px rgba(212,175,55,0.18)",
                "0 0 70px rgba(212,175,55,0.1)",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(212,175,55,0.14),transparent_32%),radial-gradient(circle_at_18%_72%,rgba(91,33,182,0.25),transparent_34%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />
            <div className="absolute inset-y-6 left-0 w-px bg-gradient-to-b from-transparent via-gold-400/35 to-transparent" />
            <div className="absolute inset-y-6 right-0 w-px bg-gradient-to-b from-transparent via-gold-400/35 to-transparent" />

            <motion.div
              aria-hidden="true"
              className="absolute inset-x-4 top-20 h-px bg-gold-400/35 shadow-[0_0_18px_rgba(212,175,55,0.55)]"
              animate={{ y: [0, 210, 0], opacity: [0.15, 0.65, 0.15] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative grid gap-5 md:grid-cols-[1fr_0.9fr]">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="font-display text-[10px] font-bold uppercase tracking-[0.42em] text-gold-400">
                      Commander
                    </p>
                    <h2 className="mt-2 font-display text-xl font-black uppercase text-stellar-100 md:text-2xl">
                      Online
                    </h2>
                  </div>
                  <motion.span
                    className="h-2.5 w-2.5 rounded-full bg-gold-400 shadow-[0_0_18px_rgba(212,175,55,0.8)]"
                    animate={{ opacity: [0.45, 1, 0.45], scale: [0.92, 1.22, 0.92] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                <div className="relative mx-auto mt-6 h-72 w-72 overflow-hidden rounded-full border border-gold-400/35 bg-space-950/80 shadow-[0_0_70px_rgba(212,175,55,0.12)] md:h-80 md:w-80">
                  <img
                    src={profilePhoto}
                    alt="Kauan Moura Rebelo"
                    className="h-full w-full object-cover object-[50%_38%]"
                  />
                  <div className="absolute inset-0 rounded-full border border-white/10" />
                  <div className="absolute inset-5 rounded-full border border-dashed border-gold-400/25" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(212,175,55,0.1)_48%,transparent_54%)] mix-blend-screen" />
                  <motion.div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gold-400/18 to-transparent"
                    animate={{ y: [-64, 250, -64], opacity: [0, 0.7, 0] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between gap-4">
                <div className="grid grid-cols-2 gap-2">
                  {telemetry.map(([label, value], index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.05 + index * 0.05, duration: 0.38 }}
                      className="rounded-[6px] border border-white/10 bg-space-950/55 p-2.5"
                    >
                      <p className="font-display text-[8px] uppercase tracking-[0.22em] text-stellar-400">
                        {label}
                      </p>
                      <p className="mt-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-gold-400">
                        {value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="rounded-[6px] border border-white/10 bg-space-950/55 p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[8px] uppercase tracking-[0.28em] text-stellar-400">
                      Network
                    </span>
                    <span className="font-mono text-[10px] text-gold-400">RX 8472 / TX 9201</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    {[78, 62, 88].map((width, index) => (
                      <div key={width} className="h-1.5 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-gold-400/70 to-violet-800/70"
                          animate={{ width: [`${width - 10}%`, `${width}%`, `${width - 10}%`] }}
                          transition={{ duration: 2.4 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative h-24 overflow-hidden rounded-[6px] border border-white/10 bg-space-950/55">
                  <div className="absolute inset-0 cosmic-grid opacity-35" />
                  <motion.div
                    className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-400/35"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="absolute left-1/2 top-1/2 h-px w-8 origin-left bg-gold-400/60" />
                  </motion.div>
                  <p className="absolute bottom-3 left-3 font-display text-[8px] uppercase tracking-[0.24em] text-gold-400">
                    Radar active
                  </p>
                </div>
              </div>
            </div>

            <span className="absolute left-4 top-4 h-4 w-4 border-l border-t border-gold-400/45" />
            <span className="absolute right-4 top-4 h-4 w-4 border-r border-t border-gold-400/45" />
            <span className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-gold-400/45" />
            <span className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-gold-400/45" />
          </motion.div>

          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1.25, duration: 0.8 }}
            className="absolute -left-20 top-1/2 hidden h-px w-24 origin-right bg-gradient-to-r from-transparent to-gold-400/45 lg:block"
          />
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-stellar-400 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2.1, duration: 2.2, repeat: Infinity }}
      >
        <span className="font-display text-[10px] uppercase tracking-[0.4em]">
          Scroll
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-gold-400 to-transparent" />
      </motion.div>
    </section>
  );
}
