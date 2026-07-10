import { motion } from "framer-motion";
import SectionShell from "../components/section-shell";

const serviceGroups = [
  {
    title: "Edição profissional",
    code: "EDT-01",
    items: [
      "DaVinci Resolve",
      "Vídeos institucionais",
      "Vídeos corporativos",
      "Anúncios",
      "Color Grading",
      "Motion básico",
    ],
  },
  {
    title: "Conteúdo profissional",
    code: "CNT-02",
    items: [
      "CapCut Pro",
      "TikTok",
      "Reels",
      "Shorts",
      "Instagram",
      "YouTube",
      "Vídeos com foco em retenção",
    ],
  },
  {
    title: "Tratamento de áudio",
    code: "AUD-03",
    items: [
      "Remoção de ruído",
      "Equalização",
      "Melhoria de voz",
      "Sincronização",
      "Mixagem básica",
    ],
  },
  {
    title: "Thumbnail Design",
    code: "THM-04",
    items: [
      "Miniaturas para YouTube",
      "CTR",
      "Artes para redes sociais",
    ],
  },
  {
    title: "Direção Criativa",
    code: "DIR-05",
    items: [
      "Planejamento de conteúdo",
      "Storytelling",
      "Ideias para campanhas",
      "Organização de roteiros",
      "Estratégia para vídeos",
    ],
  },
  {
    title: "Marketing",
    code: "MKT-06",
    items: [
      "Criação de anúncios",
      "Criativos",
      "Campanhas",
      "Integração entre Design e IA",
    ],
  },
];

export default function MediaStudio() {
  return (
    <SectionShell
      id="media"
      eyebrow="06 / Edição"
      title="Produção audiovisual profissional."
      className="bg-[radial-gradient(circle_at_20%_45%,rgba(91,33,182,0.13),transparent_34%),radial-gradient(circle_at_80%_55%,rgba(212,175,55,0.09),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(91,33,182,0.06),transparent_26%),linear-gradient(180deg,#030712_0%,#090B15_100%)]"
      cosmicGridOpacity="0.18"
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[8px] border border-white/10 bg-space-900/70 p-6 md:p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.08),transparent_42%)]" />
          <div className="relative">
            <p className="font-display text-xs uppercase tracking-[0.36em] text-gold-400">
              Estúdio de Edição
            </p>
            <p className="mt-5 text-2xl font-semibold leading-10 text-stellar-100">
              Estúdio de produção audiovisual com padrão profissional.
            </p>
            <p className="mt-4 text-sm leading-7 text-stellar-300">
              Edição, color grading, tratamento de áudio, thumbnails e direção
              criativa — tudo integrado para entregar conteúdo que comunica,
              retém e converte.
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
              <span className="h-2 w-2 rounded-full bg-gold-400 shadow-[0_0_12px_rgba(212,175,55,0.7)]" />
              <span className="font-display text-[10px] uppercase tracking-[0.32em] text-stellar-400">
                Operacional
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2">
          {serviceGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.06, duration: 0.6 }}
              className="rounded-[8px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-sm font-bold uppercase text-stellar-100">
                  {group.title}
                </h3>
                <span className="font-display text-[9px] uppercase tracking-[0.24em] text-stellar-400">
                  {group.code}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-space-950/70 px-3 py-1.5 text-xs font-semibold text-stellar-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-8 border-l-2 border-gold-400/50 pl-6 text-base font-semibold leading-8 text-stellar-100"
      >
        Interessado em produzir seu conteúdo? Entre em contato para consultar
        pacotes, prazos e orçamento.
      </motion.p>
    </SectionShell>
  );
}
