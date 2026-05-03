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
        <div className="space-y-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-ink/15 bg-paper-deep">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover"
            />
          </div>

          <section>
            <header className="mb-3 flex items-baseline justify-between border-t border-ink/15 pt-3">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                Descripción
              </h3>
              <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
                §A
              </span>
            </header>
            <p className="text-base leading-relaxed text-ink-soft">
              {project.longDescription}
            </p>
          </section>

          <section>
            <header className="mb-3 flex items-baseline justify-between border-t border-ink/15 pt-3">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                Stack tecnológico
              </h3>
              <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
                §B
              </span>
            </header>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </section>

          {project.links.length > 0 && (
            <section>
              <header className="mb-3 flex items-baseline justify-between border-t border-ink/15 pt-3">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                  Enlaces
                </h3>
                <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
                  §C
                </span>
              </header>
              <div className="flex flex-wrap gap-2">
                {project.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-ink px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-paper"
                  >
                    <Icon name="external" size={12} />
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
