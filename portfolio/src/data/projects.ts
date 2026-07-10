export type ProjectDetail = {
  description: string;
  technologies: string[];
  objective: string;
  githubUrl: string;
  imageUrl?: string;
};

export type Project = {
  id: string;
  name: string;
  type: string;
  detail?: ProjectDetail;
};

export const projects: Project[] = [
  {
    id: "cineverse",
    name: "Cineverse",
    type: "JavaScript / Supabase",
    detail: {
      description:
        "Plataforma de avaliações de filmes que permite descobrir novas obras, pesquisar títulos, publicar críticas, atribuir notas e interagir com a comunidade.",
      technologies: ["JavaScript", "Supabase", "HTML", "CSS", "Acessibilidade"],
      objective:
        "Oferecer uma experiência moderna e acessível para amantes do cinema, conectando descoberta, crítica e comunidade em um único ambiente.",
      githubUrl: "https://github.com/KauanKrilM/Cineverse",
    },
  },
  {
    id: "data-command-center",
    name: "Data Command Center",
    type: "Power BI / SQL / Python",
  },
  {
    id: "automation-lab",
    name: "Automation Lab",
    type: "Python / IA / Processos",
  },
];
