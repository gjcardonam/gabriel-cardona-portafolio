"use client";

import { useState } from "react";
import { ProfileSection } from "@/components/organisms/ProfileSection";
import { KnowledgeSection } from "@/components/organisms/KnowledgeSection";
import { EducationSection } from "@/components/organisms/EducationSection";
import { PortfolioSection } from "@/components/organisms/PortfolioSection";
import { Footer } from "@/components/organisms/Footer";
import { ProfileDialog } from "@/components/organisms/ProfileDialog";
import { ProjectDialog } from "@/components/organisms/ProjectDialog";
import { projects } from "@/data/projects";

export function CenterContent() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );

  const selectedProject =
    projects.find((p) => p.id === selectedProjectId) ?? null;

  return (
    <>
      <main className="min-w-0 bg-paper">
        <div className="px-6 sm:px-12 lg:px-16">
          <ProfileSection onOpenDialog={() => setProfileOpen(true)} />
          <KnowledgeSection />
          <EducationSection />
          <PortfolioSection
            onSelectProject={(id) => setSelectedProjectId(id)}
          />
        </div>
        <div className="px-6 sm:px-12 lg:px-16">
          <Footer />
        </div>
      </main>
      <ProfileDialog
        open={profileOpen}
        onClose={() => setProfileOpen(false)}
      />
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />
    </>
  );
}
