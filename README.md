# Portafolio · Gabriel Cardona

🌐 **Demo en vivo: [gabriel-cardona.vercel.app](https://gabriel-cardona.vercel.app)**

Portafolio personal construido como Proyecto Evaluativo 1 (25%) del curso de **Ingeniería Web** · Universidad de Antioquia (2026·1).

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
│  ├─ atoms/            # Avatar, Badge, Button, Card, Dialog, Icon, MagneticPhoto, ProgressBar, Reveal, SectionTitle, SkillDots, HorizontalScroller, LocalClock
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

La foto de perfil y las imágenes de los proyectos están en `public/` (`profile.png` y `projects/*.svg`). Puedes reemplazar las imágenes manteniendo el mismo nombre.

## Decisiones de diseño

- **Paleta:** Anthropic Brand colors (cream cálido + olive verde primario, naranja secundario, azul terciario). Multi-color cohesiva, no improvisada.
- **Tipografía:** Bebas Neue (display oversized) + Space Grotesk (body) + JetBrains Mono (datos), pareadas siguiendo el guide de `ui-ux-pro-max`.
- **Motion intencional:** durations bajo 300ms, custom easing `cubic-bezier(0.23, 1, 0.32, 1)`, `prefers-reduced-motion` respetado, principios de Emil Kowalski (`emil-design-eng` skill).
- **Responsive mobile-first:** los sidebars se apilan en móvil y se vuelven sticky en desktop (≥1024px).
- **Accesibilidad:** roles ARIA en diálogos, focus-visible en buttons, `aria-label` en icon buttons, contraste WCAG AA.
- **Sin librerías UI externas:** todos los componentes construidos a mano con Tailwind para control total y bundle pequeño.

## Despliegue

Producción en Vercel · auto-deploy en cada push a `main`.

- Repo: https://github.com/gjcardonam/gabriel-cardona-portafolio
- URL de producción: https://gabriel-cardona.vercel.app
- URL backup: https://gabriel-cardona-portafolio.vercel.app

## Cumplimiento del taller

| Requisito del PDF | Estado |
|---|---|
| Next.js + TypeScript + Tailwind + Iconos | ✅ |
| Menú izquierdo fijo con foto, contacto, idiomas %, lenguajes %, habilidades | ✅ `LeftSidebar` |
| Contenido central con scroll vertical | ✅ `CenterContent` |
| Sección Perfil con botón que abre diálogo | ✅ `ProfileSection` + `ProfileDialog` |
| Sección Conocimientos con cards (icono, título, descripción) | ✅ `KnowledgeSection` |
| Sección Educación con cards | ✅ `EducationSection` |
| Sección Portafolio con scroll horizontal y botón Saber más que abre diálogo | ✅ `PortfolioSection` + `ProjectDialog` |
| Footer libre | ✅ `Footer` (CTA + reloj local + redes) |
| Menú derecho fijo con redes sociales (GitHub y LinkedIn mínimo) | ✅ `RightSidebar` |
| Atomic design en más de 2 partes del código | ✅ atoms / molecules / organisms |
| ≥ 6 componentes reutilizables | ✅ 13+ componentes (Avatar, Badge, Button, Card, Dialog, Icon, ProgressBar, SectionTitle, MagneticPhoto, Reveal, SkillDots, HorizontalScroller, ContactItem, SkillBar, SocialIcon, KnowledgeCard, EducationCard, ProjectCard) |
| Estilos con Tailwind | ✅ |
| Despliegue en Vercel | ✅ https://gabriel-cardona.vercel.app |
