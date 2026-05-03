import { LeftSidebar } from "@/components/organisms/LeftSidebar";
import { RightSidebar } from "@/components/organisms/RightSidebar";
import { CenterContent } from "@/components/organisms/CenterContent";

export default function Home() {
  return (
    <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-4 p-4 sm:gap-5 sm:p-5 lg:grid-cols-[320px_minmax(0,1fr)_84px]">
      <div className="lg:sticky lg:top-4 lg:self-start">
        <LeftSidebar />
      </div>

      <CenterContent />

      <div className="lg:sticky lg:top-4 lg:self-start">
        <RightSidebar />
      </div>
    </div>
  );
}
