import { motion } from "framer-motion";
import SectionShell from "../components/section-shell";

const dataModules = [
  {
    title: "Dashboard Intelligence",
    code: "BI-01",
    description:
      "Dashboards intuitivos para acompanhar indicadores estratégicos e apoiar decisões com clareza.",
    stack: ["Power BI", "KPIs", "Dashboards", "Business Intelligence"],
  },
  {
    title: "Data Engineering",
    code: "ENG-02",
    description:
      "Estruturação, transformação e organização de dados para garantir consistência e eficiência.",
    stack: ["SQL", "ETL", "Pandas", "Modelagem", "Banco de Dados"],
  },
  {
    title: "Automation",
    code: "AUT-03",
    description:
      "Automações que reduzem trabalho manual, conectam sistemas e aumentam produtividade.",
    stack: ["Python", "Scripts", "APIs", "Automações", "Integrações"],
  },
  {
    title: "Analytics",
    code: "ANA-04",
    description:
      "Leitura de indicadores, relatórios e insights para transformar informação em estratégia.",
    stack: ["Relatórios", "Indicadores", "Insights", "Estratégia"],
  },
];

const dashboardMetrics = [
  { label: "Eficiência", value: "87%", accent: "from-gold-400 to-violet-800" },
  { label: "Indicadores", value: "24", accent: "from-stellar-100 to-gold-400" },
  { label: "Economia", value: "32h", accent: "from-violet-800 to-gold-400" },
];

const chartBars = [46, 68, 52, 84, 72, 91, 78];
const workflow = ["Banco de Dados", "SQL", "Python", "Power BI", "Insights", "Decisão"];

export default function DataArea() {
  return (
    <SectionShell
      id="dados"
      eyebrow="05 / Data Command Center"
      title="Dados que viram estratégia."
      description="Minha especialidade não é apenas analisar dados: é transformar informação em decisões, automações e soluções reais."
      className="bg-[radial-gradient(circle_at_45%_35%,rgba(91,33,182,0.16),transparent_36%),radial-gradient(circle_at_55%_65%,rgba(212,175,55,0.11),transparent_30%),radial-gradient(circle_at_30%_70%,rgba(91,33,182,0.08),transparent_28%),linear-gradient(180deg,#030712_0%,#090B15_100%)]"
      cosmicGridOpacity="0.20"
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {dataModules.map((module, index) => (
            <motion.article
              key={module.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.07, duration: 0.65 }}
              className="relative min-h-72 overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/45 to-transparent" />
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-base font-bold uppercase leading-6 text-stellar-100">
                  {module.title}
                </h3>
                <span className="font-display text-[9px] uppercase tracking-[0.24em] text-stellar-400">
                  {module.code}
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-stellar-300">
                {module.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {module.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-space-950/70 px-3 py-1.5 text-xs font-semibold text-stellar-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-5 right-5 h-16 w-16 rounded-full border border-gold-400/20 bg-space-950/60 shadow-[0_0_36px_rgba(212,175,55,0.08)]">
                <div className="absolute inset-2 rounded-full border border-dashed border-gold-400/20" />
                <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400 shadow-[0_0_14px_rgba(212,175,55,0.7)]" />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[8px] border border-white/10 bg-space-900/80 p-5 shadow-[0_0_80px_rgba(91,33,182,0.12)] backdrop-blur-xl md:p-6"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(212,175,55,0.1),transparent_32%),radial-gradient(circle_at_15%_70%,rgba(91,33,182,0.2),transparent_34%)]" />
          <div className="relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="font-display text-[10px] uppercase tracking-[0.34em] text-gold-400">
                  Mission Analytics
                </p>
                <h3 className="mt-2 font-display text-xl font-black uppercase text-stellar-100">
                  Intelligence Panel
                </h3>
              </div>
              <span className="h-2.5 w-2.5 rounded-full bg-gold-400 shadow-[0_0_16px_rgba(212,175,55,0.7)]" />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {dashboardMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.18 + index * 0.08, duration: 0.5 }}
                  className="rounded-[8px] border border-white/10 bg-space-950/60 p-4"
                >
                  <p className="text-xs font-semibold text-stellar-400">{metric.label}</p>
                  <p className="mt-2 font-display text-2xl font-black text-stellar-100">
                    {metric.value}
                  </p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: metric.value === "24" ? "70%" : metric.value === "32h" ? "58%" : "87%" }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.35 + index * 0.08, duration: 0.8 }}
                      className={`h-full rounded-full bg-gradient-to-r ${metric.accent}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 rounded-[8px] border border-white/10 bg-space-950/55 p-5">
              <div className="flex items-center justify-between">
                <p className="font-display text-[10px] uppercase tracking-[0.3em] text-stellar-400">
                  Performance
                </p>
                <p className="text-xs font-semibold text-gold-400">Mission Metrics</p>
              </div>

              <div className="mt-6 flex h-44 items-end gap-3">
                {chartBars.map((height, index) => (
                  <motion.div
                    key={`${height}-${index}`}
                    initial={{ height: 0, opacity: 0.5 }}
                    whileInView={{ height: `${height}%`, opacity: 1 }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{ delay: 0.1 + index * 0.06, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex-1 overflow-hidden rounded-t-[6px] border border-gold-400/15 bg-gradient-to-t from-violet-800/55 via-gold-400/24 to-stellar-100/20 shadow-[0_0_24px_rgba(212,175,55,0.08)]"
                  >
                    <span className="absolute inset-x-0 top-0 h-px bg-stellar-100/50" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[8px] border border-white/10 bg-white/[0.035] p-5">
              <p className="font-display text-[10px] uppercase tracking-[0.3em] text-stellar-400">
                Workflow
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {workflow.map((step, index) => (
                  <div key={step} className="flex items-center gap-2">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: index * 0.06, duration: 0.45 }}
                      className="rounded-full border border-gold-400/25 bg-gold-400/8 px-3 py-2 text-xs font-bold text-gold-400"
                    >
                      {step}
                    </motion.span>
                    {index < workflow.length - 1 && (
                      <span className="h-px w-5 bg-gradient-to-r from-gold-400/50 to-transparent" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
