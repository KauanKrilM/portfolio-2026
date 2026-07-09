import { useState } from "react";
import ProjectModal from "../components/project-modal";
import SectionShell from "../components/section-shell";
import { projects, type Project } from "../data/projects";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <SectionShell
        id="projetos"
        eyebrow="04 / Planetary archive"
        title="Projetos como planetas: cada um com atmosfera, função e tecnologia."
        className="bg-[radial-gradient(circle_at_50%_50%,rgba(91,33,182,0.18),transparent_38%),radial-gradient(circle_at_15%_75%,rgba(212,175,55,0.12),transparent_32%),radial-gradient(circle_at_85%_25%,rgba(212,175,55,0.08),transparent_30%),linear-gradient(180deg,#030712_0%,#0A0F1E_100%)]"
        cosmicGridOpacity="0.22"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => {
            const isInteractive = Boolean(project.detail);

            return (
              <article
                key={project.id}
                className={`group relative min-h-80 overflow-hidden rounded-[8px] border border-white/10 bg-space-900/80 p-6 ${
                  isInteractive ? "cursor-pointer" : ""
                }`}
              >
                {isInteractive ? (
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="absolute inset-0 z-10"
                    aria-label={`Abrir detalhes do projeto ${project.name}`}
                  />
                ) : null}

                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
                <div
                  className={`mx-auto mt-8 h-40 w-40 rounded-full border border-white/10 bg-[radial-gradient(circle_at_35%_25%,rgba(248,250,252,0.22),rgba(212,175,55,0.16)_24%,rgba(91,33,182,0.36)_54%,rgba(3,7,18,0.95)_80%)] shadow-[0_0_70px_rgba(91,33,182,0.28)] transition duration-500 ${
                    isInteractive ? "group-hover:scale-105 group-hover:shadow-[0_0_90px_rgba(212,175,55,0.2)]" : ""
                  }`}
                />
                <p className="mt-10 font-display text-xs uppercase tracking-[0.32em] text-gold-400">
                  Planet 0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-stellar-100">{project.name}</h3>
                <p className="mt-2 text-sm font-semibold text-stellar-400">{project.type}</p>
              </article>
            );
          })}
        </div>
      </SectionShell>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
