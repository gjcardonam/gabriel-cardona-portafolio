import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "claude-udea",
    title: "Claude UdeA",
    shortDescription:
      "CLI que descarga transcripciones de Zoom desde Moodle y abre Claude Code como tutor académico.",
    longDescription:
      "Herramienta de línea de comandos que automatiza el flujo académico: scrapea Moodle (UdeArroba) por HTTP directo sin navegador, descarga las transcripciones de Zoom de cada asignatura en paralelo, y abre Claude Code (o Gemini CLI) como asistente personalizado con tus clases. Setup interactivo la primera vez, sesión persistente, descarga incremental con deduplicación inteligente, y skills de Claude para estudiar (/temas, /enseñar, /buscar, /pendientes, /planear). Cross-platform: corre desde Windows hasta Raspberry Pi headless.",
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
      "API en .NET para simular pozos con bombeo eléctrico sumergible (ESP) — presión, flujo y curvas VLP.",
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
    id: "jarvis",
    title: "Jarvis",
    shortDescription:
      "Asistente personal de productividad sobre Raspberry Pi + Docker + Tailscale.",
    longDescription:
      "Asistente personal de productividad construido sobre infraestructura propia (Raspberry Pi 5 + Docker + Tailscale) que integra calendario, correo, tareas y comandos por voz para automatizar el día a día. Corre 24/7 en LAN privada, accesible desde cualquier dispositivo a través de Tailscale, sin depender de servicios externos para la lógica core. En desarrollo activo — repositorio privado por ahora.",
    image: "/projects/jarvis.svg",
    tech: ["Python", "Docker", "Raspberry Pi", "Tailscale", "REST APIs"],
    links: [{ label: "Repositorio privado · WIP", href: "#" }],
  },
];
