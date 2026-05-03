import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "claude-udea",
    title: "Claude UdeA",
    shortDescription:
      "Asistente académico personal para estudiantes de la Universidad de Antioquia.",
    longDescription:
      "Asistente académico construido sobre la CLI de IA conversacional, especializado en interpretar transcripciones de clase en formato WebVTT. Organiza pendientes (parciales, talleres, entregas), permite buscar temas con timestamps exactos, planifica horarios de estudio y sirve como tutor que solo responde con base en lo visto en clase. Incluye comandos personalizados (/temas, /enseñar, /buscar, /pendientes, /planear, /taller, /ejemplos) y un índice JSON que cruza fechas, asignaturas y duraciones para responder preguntas como \"¿qué se vio el martes pasado?\" en segundos.",
    image: "/projects/claude-udea.svg",
    tech: ["Python", "WebVTT", "JSON", "Bash", "Linux", "Skills/Slash Commands"],
    links: [
      { label: "Repositorio (privado)", href: "#" },
    ],
  },
  {
    id: "flowsim",
    title: "FlowSim",
    shortDescription:
      "Simulador numérico en Fortran para flujo de espumas en medios porosos.",
    longDescription:
      "Software de simulación numérica desarrollado en Fortran para modelar el flujo de espumas en medios porosos, en el contexto de recobro mejorado de petróleo. Implementa esquemas numéricos para resolver las ecuaciones de transporte y conservación que gobiernan el desplazamiento de fases en el yacimiento. Construido como parte del trabajo en el grupo de investigación de simulación de yacimientos de la Universidad Nacional de Colombia.",
    image: "/projects/flowsim.svg",
    tech: ["Fortran", "Linux", "Métodos numéricos", "Simulación de yacimientos"],
    links: [
      { label: "Repositorio (privado)", href: "#" },
    ],
  },
  {
    id: "jarvis",
    title: "Jarvis",
    shortDescription:
      "Asistente personal de productividad sobre infraestructura propia.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Jarvis es un asistente personal de productividad construido sobre infraestructura propia (Raspberry Pi + Docker + Tailscale) que integra calendario, correo, tareas y comandos por voz para automatizar el día a día. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    image: "/projects/jarvis.svg",
    tech: ["Python", "Docker", "Raspberry Pi", "Tailscale", "REST APIs"],
    links: [
      { label: "Repositorio (privado)", href: "#" },
    ],
  },
];
