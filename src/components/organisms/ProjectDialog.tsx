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
        <div className="space-y-6">
          <div className="relative aspect-[16/8] w-full overflow-hidden rounded-xl bg-slate-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover"
            />
          </div>

          <section>
            <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">
              Descripción
            </h3>
            <p className="text-base leading-relaxed text-slate-700">
              {project.longDescription}
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">
              Stack tecnológico
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </section>

          {project.links.length > 0 && (
            <section>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">
                Enlaces
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-teal-600 hover:text-teal-700"
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
