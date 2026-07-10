import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { FaGithub, FaTimes } from "react-icons/fa";
import type { Project } from "../data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project?.detail && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={onClose}
            className="absolute inset-0 bg-space-950/80 backdrop-blur-sm"
          />

          <motion.article
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[8px] border border-white/10 bg-space-900/95 shadow-[0_0_80px_rgba(91,33,182,0.2)] backdrop-blur-xl"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar modal"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-stellar-400 transition hover:border-gold-400/45 hover:text-gold-400"
            >
              <FaTimes aria-hidden="true" />
            </button>

            <div className="grid gap-6 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
              <div
                className="relative flex min-h-48 items-center justify-center overflow-hidden rounded-[8px] border border-white/10 bg-space-950/70"
                role="img"
                aria-label={`${project.name} — espaço reservado para imagem`}
              >
                {project.detail.imageUrl ? (
                  <img
                    src={project.detail.imageUrl}
                    alt={project.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <p className="font-display text-[10px] uppercase tracking-[0.36em] text-gold-400">
                      Preview
                    </p>
                    <p className="mt-2 text-xs text-stellar-400">Imagem futura</p>
                  </div>
                )}
              </div>

              <div>
                <p className="font-display text-xs uppercase tracking-[0.36em] text-gold-400">
                  {project.type}
                </p>
                <h3
                  id="project-modal-title"
                  className="mt-3 font-display text-2xl font-black uppercase text-stellar-100 md:text-3xl"
                >
                  {project.name}
                </h3>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="font-display text-[10px] uppercase tracking-[0.28em] text-stellar-400">
                      Descrição
                    </p>
                    <p className="mt-2 text-sm leading-7 text-stellar-300">
                      {project.detail.description}
                    </p>
                  </div>

                  <div>
                    <p className="font-display text-[10px] uppercase tracking-[0.28em] text-stellar-400">
                      Objetivo
                    </p>
                    <p className="mt-2 text-sm leading-7 text-stellar-300">
                      {project.detail.objective}
                    </p>
                  </div>

                  <div>
                    <p className="font-display text-[10px] uppercase tracking-[0.28em] text-stellar-400">
                      Tecnologias
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.detail.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-space-950/70 px-3 py-1.5 text-xs font-semibold text-stellar-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={project.detail.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-3 rounded-[8px] border border-gold-400/30 bg-gold-400/8 px-5 py-3 text-sm font-semibold text-gold-400 transition hover:border-gold-400 hover:bg-gold-400/15"
                >
                  <FaGithub aria-hidden="true" />
                  Ver no GitHub
                </a>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
