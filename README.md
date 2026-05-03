# Portafolio - Gabriel Cardona

Portafolio personal construido como Proyecto Evaluativo 1 (25%) del curso de **Ingeniería Web** - Universidad de Antioquia.

Hoja de vida en formato web con menú izquierdo fijo (información personal, contacto, idiomas, lenguajes y habilidades), contenido central con scroll vertical (perfil, conocimientos, educación y portafolio de proyectos) y menú derecho fijo con redes sociales.

## Stack

- **Next.js 16** (App Router + Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- Iconos SVG inline (sin dependencias externas)

## Estructura del proyecto

```
src/
├─ app/
│  ├─ layout.tsx        # Layout raíz, fuentes y metadata
│  ├─ page.tsx          # Composición de la página principal
│  └─ globals.css       # Estilos globales (Tailwind)
├─ components/
│  ├─ atoms/            # Avatar, Badge, Button, Dialog, Icon, ProgressBar, SectionTitle
│  ├─ molecules/        # ContactItem, SkillBar, SocialIcon, KnowledgeCard, EducationCard, ProjectCard
│  └─ organisms/        # LeftSidebar, RightSidebar, CenterContent, *Section, *Dialog, Footer
├─ data/                # Fuente única de información personal (profile, skills, projects, etc.)
└─ types.ts             # Tipos TypeScript compartidos
```

El proyecto sigue **Atomic Design**: los _atoms_ son primitivos sin lógica de dominio, las _molecules_ combinan átomos para representar una unidad de información y los _organisms_ orquestan secciones completas.

## Cómo ejecutarlo

Requiere Node.js 20 o superior.

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
# Abrir http://localhost:3000

# Build de producción
npm run build

# Servir el build
npm start
```

## Cómo personalizar el contenido

Toda la información personal vive en `src/data/`. Para cambiar nombre, foto, proyectos o experiencia no hay que tocar componentes:

| Archivo | Contenido |
|---|---|
| `profile.ts` | Nombre, título, contacto, descripción y `about` largo |
| `languages.ts` | Idiomas con porcentaje |
| `programmingLanguages.ts` | Lenguajes de programación con porcentaje |
| `extraSkills.ts` | Categorías de habilidades extra (badges) |
| `knowledge.ts` | Cards de áreas de conocimiento (icono + descripción) |
| `education.ts` | Historia académica y certificaciones |
| `projects.ts` | Proyectos del portafolio (imagen, descripción, stack, links) |
| `socials.ts` | Redes sociales del menú derecho |

La foto de perfil y las imágenes de los proyectos están en `public/` (`profile.svg` y `projects/*.svg`). Puedes reemplazar los SVG por archivos PNG/JPG manteniendo el mismo nombre.

## Despliegue

El proyecto está pensado para desplegarse en **Vercel**:

1. Conectar el repositorio en https://vercel.com/new
2. Vercel detecta Next.js automáticamente — sin configuración adicional
3. La URL pública queda como `gabriel-cardona-portafolio.vercel.app` o el alias que se configure

## Decisiones de diseño

- **Mobile-first responsive:** los sidebars se apilan en móvil y se vuelven sticky en desktop (≥1024px).
- **Paleta:** acento `teal` sobre fondos neutros (`slate`) para una estética limpia y profesional.
- **Diálogos accesibles:** soporte de tecla Escape, bloqueo del scroll del body y `role="dialog"` para lectores de pantalla.
- **Sin librerías UI externas:** todos los componentes están construidos a mano con Tailwind para tener control total sobre el diseño y mantener el bundle pequeño.

## Cumplimiento del taller

| Requisito del PDF | Implementación |
|---|---|
| Next.js + TypeScript + Tailwind + Iconos | ✅ |
| Menú izquierdo fijo con foto, contacto, idiomas%, lenguajes%, habilidades | ✅ `LeftSidebar` |
| Contenido central con scroll vertical | ✅ `CenterContent` |
| Sección Perfil con botón → diálogo | ✅ `ProfileSection` + `ProfileDialog` |
| Sección Conocimientos con cards (icono + descripción) | ✅ `KnowledgeSection` |
| Sección Educación con cards | ✅ `EducationSection` |
| Sección Portafolio con scroll horizontal y botón "Saber más" → diálogo | ✅ `PortfolioSection` + `ProjectDialog` |
| Footer libre | ✅ `Footer` (CTA + redes) |
| Menú derecho fijo con redes sociales (mín. GitHub y LinkedIn) | ✅ `RightSidebar` |
| Atomic design en >2 partes | ✅ atoms / molecules / organisms |
| ≥6 componentes reutilizables | ✅ Avatar, Badge, Button, Icon, ProgressBar, Dialog, SectionTitle, ContactItem, SkillBar, SocialIcon, KnowledgeCard, EducationCard, ProjectCard |
| Estilos con Tailwind | ✅ |
| Despliegue en Vercel | Pendiente — al hacer push del repo |
