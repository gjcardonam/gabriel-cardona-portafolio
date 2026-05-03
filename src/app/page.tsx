import { LeftSidebar } from "@/components/organisms/LeftSidebar";
import { RightSidebar } from "@/components/organisms/RightSidebar";
import { ProfileSection } from "@/components/organisms/ProfileSection";
import { KnowledgeSection } from "@/components/organisms/KnowledgeSection";
import { EducationSection } from "@/components/organisms/EducationSection";
import { PortfolioSection } from "@/components/organisms/PortfolioSection";
import { Footer } from "@/components/organisms/Footer";

export default function Home() {
  return (
    <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 p-4 sm:p-6 lg:grid-cols-[320px_minmax(0,1fr)_88px] lg:gap-6">
      <div className="lg:sticky lg:top-6 lg:self-start">
        <LeftSidebar />
      </div>

      <main className="flex min-w-0 flex-col gap-12 pb-6">
        <ProfileSection />
        <KnowledgeSection />
        <EducationSection />
        <PortfolioSection />
        <Footer />
      </main>

      <div className="lg:sticky lg:top-6 lg:self-start">
        <RightSidebar />
      </div>
    </div>
  );
}
