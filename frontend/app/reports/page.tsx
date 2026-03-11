import Sidebar from "@/components/Sidebar";

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <section className="flex-1 p-8">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-blue-300">
              Reporting
            </p>
            <h1 className="mt-2 text-3xl font-bold">Reports</h1>
            <p className="mt-2 text-sm text-slate-400">
              Export and review your operational reports here.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Reports Center</h2>
            <p className="mt-2 text-sm text-slate-400">
              PDF, Excel, and AI-generated summaries will be available here.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}