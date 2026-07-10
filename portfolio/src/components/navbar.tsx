import { motion, useScroll, useTransform } from "framer-motion";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Habilidades", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Dados", href: "#dados" },
  { label: "Edição", href: "#media" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(3, 7, 18, 0.6)", "rgba(3, 7, 18, 0.92)"]
  );
  const backdropBlurValue = useTransform(scrollY, [0, 100], [12, 24]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{
        backgroundColor,
        backdropFilter: backdropBlurValue,
      }}
      className="fixed left-0 top-0 z-50 w-full border-b border-white/8 px-5 py-4 md:px-10 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a
          href="#hero"
          className="font-display text-xl font-black tracking-[0.28em] text-gold-400"
          aria-label="Voltar para o início"
        >
          KR
        </a>

        <div className="hidden items-center gap-4 text-sm font-medium text-stellar-300 lg:flex xl:gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors duration-300 hover:text-gold-400"
            >
              {item.label}
            </a>
          ))}
        </div>

        <span className="hidden h-px w-14 bg-gradient-to-r from-gold-400/70 to-transparent lg:block" />
      </div>
    </motion.nav>
  );
}
