import SectionShell from "../components/section-shell";

const highlights = [
  "Organizacão, tratamento e acompanhamento de dados",
  "Apoio a processos internos e rotinas operacionais",
  "Análises para melhor leitura de informacões de negócio",
  "Contato prático com BI, planilhas, SQL, Python e automacão",
];

export default function Experience() {
  return (
    <SectionShell
      id="experiencia"
      eyebrow="02 / Flight record"
      title="Experiência em dados com impacto operacional."
      description="A experiência na TH Energia Solar e apresentada como missão real: entender informacões, organizar processos e entregar clareza para tomada de decisão."
      className="bg-[radial-gradient(circle_at_35%_30%,rgba(91,33,182,0.12),transparent_38%),radial-gradient(circle_at_65%_70%,rgba(212,175,55,0.08),transparent_32%),linear-gradient(180deg,#030712_0%,#090B15_100%)]"
      cosmicGridOpacity="0.15"
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="border-l border-gold-400/50 pl-6">
          <p className="font-display text-sm uppercase tracking-[0.38em] text-gold-400">
            TH Energia Solar
          </p>
          <h3 className="mt-4 text-3xl font-bold text-stellar-100">
            Estagiário de Analista de Dados
          </h3>
          <p className="mt-4 text-stellar-400">Aproximadamente 1 ano</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-[8px] border border-white/10 bg-space-900/70 p-5 text-sm leading-7 text-stellar-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
