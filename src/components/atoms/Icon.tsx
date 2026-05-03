type IconName =
  | "location"
  | "mail"
  | "phone"
  | "github"
  | "linkedin"
  | "server"
  | "database"
  | "cloud"
  | "chart"
  | "robot"
  | "atom"
  | "external"
  | "close"
  | "arrowRight"
  | "code";

type Props = {
  name: IconName;
  className?: string;
  size?: number;
};

export function Icon({ name, className, size = 20 }: Props) {
  const path = ICON_PATHS[name];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}

const ICON_PATHS: Record<IconName, React.ReactNode> = {
  location: (
    <>
      <path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
  ),
  github: (
    <path d="M12 .5a11.5 11.5 0 0 0-3.63 22.42c.58.1.79-.25.79-.56v-2c-3.21.7-3.89-1.36-3.89-1.36-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.04 1.79 2.74 1.27 3.41.97.1-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v2a4.5 4.5 0 0 1 2-2Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="3" width="18" height="6" rx="1.5" />
      <rect x="3" y="15" width="18" height="6" rx="1.5" />
      <line x1="7" y1="6" x2="7.01" y2="6" />
      <line x1="7" y1="18" x2="7.01" y2="18" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
    </>
  ),
  cloud: (
    <path d="M17.5 19a4.5 4.5 0 1 0-1.45-8.76A6 6 0 0 0 4 12a4.5 4.5 0 0 0 .5 9h13Z" />
  ),
  chart: (
    <>
      <line x1="3" y1="20" x2="21" y2="20" />
      <rect x="5" y="13" width="3" height="7" />
      <rect x="10.5" y="9" width="3" height="11" />
      <rect x="16" y="5" width="3" height="15" />
    </>
  ),
  robot: (
    <>
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <line x1="12" y1="3" x2="12" y2="8" />
      <circle cx="12" cy="3" r="1" />
      <circle cx="9" cy="14" r="1" />
      <circle cx="15" cy="14" r="1" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </>
  ),
  atom: (
    <>
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
    </>
  ),
  external: (
    <>
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </>
  ),
  close: (
    <>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="6" y1="18" x2="18" y2="6" />
    </>
  ),
  arrowRight: (
    <>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </>
  ),
  code: (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </>
  ),
};
