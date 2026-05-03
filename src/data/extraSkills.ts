import type { ExtraSkillCategory } from "@/types";

export const extraSkills: ExtraSkillCategory[] = [
  {
    category: "Backend & Data",
    items: [
      "FastAPI",
      "PostgreSQL",
      "TimescaleDB",
      "Oracle",
      "BigQuery",
      "Dagster",
      "REST APIs",
    ],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "GitHub Actions", "GCP", "Linux", "Git", "CI/CD", "Tailscale"],
  },
  {
    category: "Observabilidad & BI",
    items: ["Grafana", "Looker", "Tableau"],
  },
  {
    category: "Habilidades blandas",
    items: [
      "Ownership end-to-end",
      "Comunicación técnica",
      "Documentación",
      "Trabajo cross-funcional",
    ],
  },
];
