import { LeftSidebar } from "@/components/organisms/LeftSidebar";
import { RightSidebar } from "@/components/organisms/RightSidebar";
import { CenterContent } from "@/components/organisms/CenterContent";

export default function Home() {
  return (
    <div className="mx-auto grid min-h-screen max-w-[1440px] grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)_84px]">
      <div className="lg:sticky lg:top-0 lg:self-start">
        <LeftSidebar />
      </div>

      <CenterContent />

      <div className="lg:sticky lg:top-0 lg:self-start">
        <RightSidebar />
      </div>
    </div>
  );
}
