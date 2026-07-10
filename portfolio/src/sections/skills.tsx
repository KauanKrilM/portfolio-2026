import SectionShell from "../components/section-shell";
import cloudDevopsPortrait from "../assets/portraits/cloud-devops.png";
import creativeSystemsPortrait from "../assets/portraits/creative-systems.png";
import dataIntelligencePortrait from "../assets/portraits/data-intelligence.png";
import softwareEngineeringPortrait from "../assets/portraits/software-engineering.png";

const constellations = [
  {
    title: "Software Engineering",
    items: ["Python", "Java", "TypeScript", "React", "Node", "C#", "POO", "APIs"],
    imageLabel: "Code visual",
    image: softwareEngineeringPortrait,
  },
  {
    title: "Data Intelligence",
    items: ["Power BI", "SQL", "Pandas", "ETL", "Dashboards", "BI", "Modelagem"],
    imageLabel: "Data visual",
    image: dataIntelligencePortrait,
  },
  {
    title: "Cloud & DevOps",
    items: ["CI/CD", "Jenkins", "GitHub Actions", "Deploy", "Cloud", "Pipelines"],
    imageLabel: "Cloud visual",
    image: cloudDevopsPortrait,
  },
  {
    title: "Creative Systems",
    items: ["IA", "Prompt Engineering", "Unity", "Godot", "Design", "Video", "Marketing"],
    imageLabel: "Creative visual",
    image: creativeSystemsPortrait,
  },
];

export default function Skills() {
  return (
    <SectionShell
      id="skills"
      eyebrow="03 / Habilidades"
      title="Ferramentas que utilizo para transformar ideias em produtos digitais."
      className="bg-[radial-gradient(circle_at_25%_15%,rgba(91,33,182,0.14),transparent_32%),radial-gradient(circle_at_75%_85%,rgba(212,175,55,0.1),transparent_28%),linear-gradient(180deg,#030712_0%,#090B15_100%)]"
      cosmicGridOpacity="0.25"
    >
      <div className="grid gap-5 lg:grid-cols-4">
        {constellations.map((group) => (
          <article
            key={group.title}
            className="flex min-h-80 flex-col rounded-[8px] border border-white/10 bg-white/[0.035] p-6"
          >
            <h3 className="font-display text-lg font-bold uppercase text-stellar-100">
              {group.title}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-space-950/70 px-3 py-2 text-xs font-semibold text-stellar-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-auto flex justify-center pt-6">
              <div
                className="group relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-gold-400/25 bg-space-950/70 shadow-[0_0_42px_rgba(212,175,55,0.08)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_55px_rgba(212,175,55,0.25)]"
                role="img"
                aria-label={`${group.imageLabel}`}
              >
                <div className="absolute inset-2 rounded-full border border-white/10" />
                <img
                  src={group.image}
                  alt={group.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
