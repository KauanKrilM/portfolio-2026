import { motion } from "framer-motion";
import SectionShell from "../components/section-shell";

const profileFields = [
  {
    label: "Formação",
    code: "EDU-01",
    content: (
      <>
        <p className="text-sm font-semibold text-stellar-100">Ciência da Computação</p>
        <p className="mt-1 text-sm text-stellar-300">UNIMA Afya</p>
      </>
    ),
  },
  {
    label: "Perfil",
    code: "ID-02",
    content: (
      <>
        <p className="text-sm font-semibold text-stellar-100">Desenvolvedor multidisciplinar</p>
        <p className="mt-2 text-sm leading-7 text-stellar-300">
          Apaixonado por engenharia de software, dados, IA e criatividade.
          Resolver problemas é minha principal motivação.
        </p>
      </>
    ),
  },
  {
    label: "Idiomas",
    code: "LNG-03",
    content: (
      <ul className="space-y-2 text-sm text-stellar-300">
        <li>
          <span className="font-semibold text-stellar-100">Português</span> — Nativo
        </li>
        <li>
          <span className="font-semibold text-stellar-100">Inglês</span> — Avançado (B2/C1)
        </li>
        <li className="text-xs leading-6 text-stellar-400">
          Atualmente em formação contínua pela Wizard.
        </li>
      </ul>
    ),
  },
];

const availabilityItems = [
  "Remoto",
  "Híbrido",
  "Presencial",
  "Disponibilidade para viagens",
  "Disponibilidade para mudança de cidade ou estado",
];

const workStructureItems = [
  "Home Office completo",
  "Carro próprio",
  "Equipamentos profissionais",
];

export default function About() {
  return (
    <SectionShell
      id="sobre"
      eyebrow="01 / Mission profile"
      title="Quem sou eu como profissional?"
      className="bg-[radial-gradient(circle_at_50%_0%,rgba(91,33,182,0.08),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(212,175,55,0.04),transparent_30%),linear-gradient(180deg,#02040a_0%,#030712_100%)]"
      cosmicGridOpacity="0.08"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {profileFields.map((field, index) => (
          <motion.article
            key={field.label}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.08, duration: 0.65 }}
            className="rounded-[8px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-display text-xs font-bold uppercase tracking-[0.34em] text-gold-400">
                {field.label}
              </span>
              <span className="font-display text-[10px] uppercase tracking-[0.28em] text-stellar-400">
                {field.code}
              </span>
            </div>
            <div className="mt-5">{field.content}</div>
          </motion.article>
        ))}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.24, duration: 0.65 }}
          className="rounded-[8px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-display text-xs font-bold uppercase tracking-[0.34em] text-gold-400">
              Disponibilidade
            </span>
            <span className="font-display text-[10px] uppercase tracking-[0.28em] text-stellar-400">
              OPS-04
            </span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {availabilityItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-space-950/70 px-3 py-2 text-xs font-semibold text-stellar-300"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.32, duration: 0.65 }}
          className="rounded-[8px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-display text-xs font-bold uppercase tracking-[0.34em] text-gold-400">
              Estrutura de trabalho
            </span>
            <span className="font-display text-[10px] uppercase tracking-[0.28em] text-stellar-400">
              INF-05
            </span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {workStructureItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-space-950/70 px-3 py-2 text-xs font-semibold text-stellar-300"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.article>
      </div>
    </SectionShell>
  );
}
