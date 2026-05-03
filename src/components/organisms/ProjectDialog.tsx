"use client";

import Image from "next/image";
import { Dialog } from "@/components/atoms/Dialog";
import { Badge } from "@/components/atoms/Badge";
import { Icon } from "@/components/atoms/Icon";
import type { Project } from "@/types";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectDialog({ project, onClose }: Props) {
  return (
    <Dialog
      open={project !== null}
      onClose={onClose}
      title={project?.title ?? ""}
      maxWidth="lg"
    >
      {project && (
        <div className="space-y-7">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-canvas-soft ring-1 ring-rule">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover"
            />
          </div>

          <section>
            <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
              / Descripción
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              {project.longDescription}
            </p>
          </section>

          <section>
            <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
              / Stack tecnológico
            </h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <Badge key={t} variant="default">
                  {t}
                </Badge>
              ))}
            </div>
          </section>

          {project.links.length > 0 && (
            <section>
              <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                / Enlaces
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press inline-flex items-center gap-2 rounded-xl bg-canvas-soft px-4 py-2 text-sm font-medium text-ink ring-1 ring-rule transition-[color,background-color,box-shadow] duration-150 ease-out hover:bg-ink hover:text-canvas hover:ring-ink"
                  >
                    <Icon name="external" size={14} />
                    {l.label}
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </Dialog>
  );
}
