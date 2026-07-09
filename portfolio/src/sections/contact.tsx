import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaPhone } from "react-icons/fa";
import SectionShell from "../components/section-shell";

const contacts = [
  {
    icon: FaGithub,
    name: "GitHub",
    info: "KauanKrilM",
    href: "https://github.com/KauanKrilM",
  },
  {
    icon: FaLinkedinIn,
    name: "LinkedIn",
    info: "Kauan Rebelo",
    href: "https://www.linkedin.com/in/kauan-rebelo",
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    info: "_rebelo.kauan",
    href: "https://www.instagram.com/_rebelo.kauan",
  },
  {
    icon: FaPhone,
    name: "Telefone",
    info: "(82) 99394-6005",
    href: "tel:+5582993946005",
  },
  {
    icon: FaEnvelope,
    name: "Email",
    info: "kauanrebelo.work@gmail.com",
    href: "mailto:kauanrebelo.work@gmail.com",
  },
];

export default function Contact() {
  return (
    <SectionShell
      id="contato"
      eyebrow="07 / Transmission hub"
      title="Painel de comunicação aberto."
      className="bg-[radial-gradient(circle_at_50%_50%,rgba(91,33,182,0.05),transparent_55%),radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03),transparent_50%),linear-gradient(180deg,#010205_0%,#02040a_100%)]"
      cosmicGridOpacity="0.04"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-2xl rounded-[8px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl md:p-6"
      >
        <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.36em] text-gold-400">
              Communication array
            </p>
            <p className="mt-2 text-sm text-stellar-400">Canais ativos</p>
          </div>
          <span className="h-3 w-3 rounded-full bg-gold-400 shadow-[0_0_18px_rgba(212,175,55,0.8)]" />
        </div>

        <div className="grid gap-3">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.name}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                className="group grid grid-cols-[44px_1fr] items-center gap-4 rounded-[8px] border border-white/10 bg-space-950/60 p-4 transition duration-300 hover:-translate-y-1 hover:border-gold-400/45 hover:bg-space-900"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/25 text-gold-400 transition duration-300 group-hover:border-gold-400">
                  <Icon aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-display text-xs uppercase tracking-[0.28em] text-stellar-400">
                    {contact.name}
                  </span>
                  <span className="mt-1 block break-words text-sm font-semibold text-stellar-100">
                    {contact.info}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </motion.div>
    </SectionShell>
  );
}
