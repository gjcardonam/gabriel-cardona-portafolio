import type { Knowledge } from "@/types";

export const knowledge: Knowledge[] = [
  {
    id: "backend",
    title: "Desarrollo Backend",
    description:
      "Diseño y construcción de APIs REST con FastAPI, modelado de datos multi-tenant y servicios productivos sobre PostgreSQL/TimescaleDB y Oracle.",
    icon: "server",
  },
  {
    id: "data-engineering",
    title: "Ingeniería de Datos",
    description:
      "Pipelines orquestados con Dagster, ingesta y consolidación en BigQuery, y consultas SQL optimizadas detrás de dashboards de Grafana y Looker.",
    icon: "database",
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    description:
      "Contenerización con Docker, CI/CD con GitHub Actions, despliegues sobre GCP y administración de servidores Linux con redes privadas Tailscale.",
    icon: "cloud",
  },
  {
    id: "observability",
    title: "Observabilidad",
    description:
      "Monitoreo, alertas y trazabilidad de pipelines y APIs en producción usando Grafana, Looker y Tableau.",
    icon: "chart",
  },
  {
    id: "automation",
    title: "Automatización de Procesos",
    description:
      "Identificación de fricciones operativas y diseño de scripts y servicios que reducen trabajo manual en equipos internos.",
    icon: "robot",
  },
  {
    id: "numerical",
    title: "Simulación Numérica",
    description:
      "Experiencia en simulación numérica en Fortran aplicada al estudio de flujo de fluidos en medios porosos en grupos de investigación universitarios.",
    icon: "atom",
  },
];
