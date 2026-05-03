import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Gabriel Cardona",
  title: "Software Engineer · Backend · Data · DevOps",
  shortDescription:
    "Ingeniero de software con foco en backend, data engineering y DevOps. Construyo plataformas internas, pipelines de datos y automatizaciones.",
  about:
    "Soy ingeniero de software enfocado en backend, ingeniería de datos y DevOps. Construyo plataformas internas, pipelines de datos y automatizaciones que ayudan a los equipos a entregar más rápido y operar con menos fricción. Me hago cargo de los problemas de punta a punta. Desde el modelo de datos hasta el servicio, el pipeline y la observabilidad. Me siento cómodo trabajando entre dominios de software e industria. Abierto a roles remotos.",
  photo: "/profile.png",
  contact: [
    {
      label: "Ciudad",
      value: "Medellín, Colombia",
      icon: "location",
    },
    {
      label: "Correo",
      value: "gjcardonam@gmail.com",
      href: "mailto:gjcardonam@gmail.com",
      icon: "mail",
    },
    {
      label: "Teléfono",
      value: "+57 320 704 2828",
      href: "tel:+573207042828",
      icon: "phone",
    },
  ],
};
