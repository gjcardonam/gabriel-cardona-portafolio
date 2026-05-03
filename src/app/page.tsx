import { LeftSidebar } from "@/components/organisms/LeftSidebar";
import { RightSidebar } from "@/components/organisms/RightSidebar";

export default function Home() {
  return (
    <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 p-4 sm:p-6 lg:grid-cols-[320px_minmax(0,1fr)_88px] lg:gap-6">
      <div className="lg:sticky lg:top-6 lg:self-start">
        <LeftSidebar />
      </div>

      <main className="min-w-0">
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200/70">
          <h2 className="text-2xl font-bold text-slate-900">Contenido central</h2>
          <p className="mt-2 text-slate-600">
            Las secciones de Perfil, Conocimientos, Educación y Portafolio se
            agregarán en el siguiente commit.
          </p>
        </div>
      </main>

      <div className="lg:sticky lg:top-6 lg:self-start">
        <RightSidebar />
      </div>
    </div>
  );
}
