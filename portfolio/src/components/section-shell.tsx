import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  cosmicGridOpacity?: string;
};

export default function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  cosmicGridOpacity,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden border-t border-white/8 bg-space-950 px-5 py-24 md:px-10 lg:px-16 ${className || ""}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(91,33,182,0.13),transparent_28%),radial-gradient(circle_at_80%_40%,rgba(212,175,55,0.07),transparent_22%)]" />
      <div className="cosmic-grid absolute inset-0 opacity-20" style={{ opacity: cosmicGridOpacity || '0.2' }} />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.42em] text-gold-400">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-stellar-100 md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-6 text-base leading-8 text-stellar-300 md:text-lg">
              {description}
            </p>
          )}
        </motion.div>

        {children}
      </div>
    </section>
  );
}
