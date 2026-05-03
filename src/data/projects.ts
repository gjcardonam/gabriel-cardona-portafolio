import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "claude-udea",
    title: "Claude UdeA",
    shortDescription:
      "CLI que descarga transcripciones de Zoom desde Moodle y abre Claude Code como tutor académico.",
    longDescription:
      "Herramienta de línea de comandos que automatiza el flujo académico: scrapea Moodle (UdeArroba) por HTTP directo sin navegador, descarga las transcripciones de Zoom de cada asignatura en paralelo, y abre Claude Code (o Gemini CLI) como asistente personalizado con tus clases. Setup interactivo la primera vez, sesión persistente, descarga incremental con deduplicación inteligente, y skills personalizados para estudiar (/temas, /enseñar, /buscar, /pendientes, /planear). Cross-platform: corre en Windows, macOS y Linux.",
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
  {
    id: "crediscan",
    title: "Crediscan",
    shortDescription:
      "Motor de credit scoring en Java 21 + Spring Boot 3 con arquitectura hexagonal y frontend en React.",
    longDescription:
      "Motor de evaluación de solicitudes de crédito (credit scoring) construido como una API REST en Java 21 con Spring Boot 3.4, siguiendo arquitectura hexagonal (puertos y adaptadores) para aislar el dominio de la infraestructura. Persistencia en PostgreSQL, dockerizado con Docker Compose para arrancar todo con un solo comando. El frontend (React + Vite) consume la API para visualizar las solicitudes y los scores.",
    image: "/projects/crediscan.svg",
    tech: ["Java 21", "Spring Boot 3", "PostgreSQL", "Hexagonal Architecture", "React", "Vite", "Docker"],
    links: [
      {
        label: "API en GitHub",
        href: "https://github.com/gjcardonam/crediscan-api",
      },
      {
        label: "Frontend en GitHub",
        href: "https://github.com/gjcardonam/crediscan-front",
      },
    ],
  },
  {
    id: "farmacontable",
    title: "Farmacontable",
    shortDescription:
      "Sistema de contabilidad de escritorio para farmacias en Python con Tkinter y PostgreSQL.",
    longDescription:
      "Sistema de contabilidad para farmacias construido como aplicación de escritorio en Python con interfaz Tkinter y persistencia en PostgreSQL. Maneja autenticación con login, usuarios con roles (admin, vendedor), gestión de clientes, farmacias y productos con control de inventario, registro de facturas y control de ventas. Arquitectura por capas (GUI, controller, service, repository) y conexión a base de datos vía psycopg2. Funciona local sin necesidad de internet.",
    image: "/projects/farmacontable.svg",
    tech: ["Python", "Tkinter", "PostgreSQL", "psycopg2", "Arquitectura por capas"],
    links: [
      {
        label: "Ver en GitHub",
        href: "https://github.com/gjcardonam/desktop-app-farmacias",
      },
    ],
  },
];
