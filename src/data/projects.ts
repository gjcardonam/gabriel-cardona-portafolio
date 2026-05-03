import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "claude-udea",
    title: "Claude UdeA",
    shortDescription:
      "CLI que descarga transcripciones de Zoom desde Moodle y abre Claude Code como tutor académico.",
    longDescription:
      "Herramienta de línea de comandos que automatiza el flujo académico: scrapea Moodle (UdeArroba) por HTTP directo sin navegador, descarga las transcripciones de Zoom de cada asignatura en paralelo, y abre Claude Code (o Gemini CLI) como asistente personalizado con tus clases. Setup interactivo la primera vez, sesión persistente, descarga incremental con deduplicación inteligente, y skills personalizados para estudiar (/temas, /enseñar, /buscar, /pendientes, /planear). Cross-platform: corre desde Windows hasta Raspberry Pi headless.",
    image: "/projects/claude-udea.svg",
    tech: ["Python", "Claude Code", "Moodle scraping", "yt-dlp", "Cross-platform CLI"],
    links: [
      {
        label: "Ver en GitHub",
        href: "https://github.com/gjcardonam/claude-udea",
      },
    ],
  },
  {
    id: "espsim",
    title: "EspSim",
    shortDescription:
      "API en .NET para simular pozos con bombeo eléctrico sumergible (ESP), curvas VLP y traversal de presión.",
    longDescription:
      "Simulador de pozos con bombeo eléctrico sumergible (ESP) construido como API REST en .NET. Calcula traversal de presión y flujo a lo largo del wellbore, integra con condiciones de frontera arbitrarias y genera curvas VLP (Vertical Lift Performance) para análisis nodal. Continúa el trabajo de simulación numérica que arrancó con software Fortran del grupo de investigación de yacimientos de la Universidad Nacional, ahora migrado a un stack moderno con OpenAPI/Swagger y arquitectura de servicios.",
    image: "/projects/espsim.svg",
    tech: ["C#", ".NET", "ASP.NET Core", "Swagger/OpenAPI", "Simulación numérica"],
    links: [
      {
        label: "Ver en GitHub",
        href: "https://github.com/gjcardonam/EspSim",
      },
    ],
  },
  {
    id: "leads-api-omc",
    title: "Leads API",
    shortDescription:
      "API REST en NestJS para gestión de leads de marketing, con resúmenes inteligentes generados por IA.",
    longDescription:
      "API REST construida en NestJS y TypeScript para gestionar leads de embudos de marketing digital. Permite registrar, consultar, actualizar y eliminar leads, calcular estadísticas por canal y generar resúmenes inteligentes usando IA. Stack diseñado para producción: PostgreSQL con TypeORM y migraciones, autenticación JWT stateless, validación con DTOs, documentación OpenAPI/Swagger automática y entorno reproducible con Docker Compose. Construido como prueba técnica para One Million Copy SAS.",
    image: "/projects/leads-api.svg",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "JWT", "Docker", "Swagger"],
    links: [
      {
        label: "Ver en GitHub",
        href: "https://github.com/gjcardonam/leads-api-omc",
      },
    ],
  },
];
