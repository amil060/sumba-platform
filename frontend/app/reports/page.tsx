import Sidebar from "@/components/Sidebar";
import PageTransition from "@/components/PageTransition";

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen">
        <Sidebar />
        <PageTransition>
        <section className="flex-1 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-blue-300">
                Reporting
              </p>
              <h1 className="mt-2 text-3xl font-bold">Reports</h1>
              <p className="mt-2 text-sm text-slate-400">
                Export, review, and manage operational reports from one place.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              6 Available Reports
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
              <p className="text-sm text-emerald-300">Weekly Reports</p>
              <h3 className="mt-3 text-3xl font-bold">3</h3>
            </div>

            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
              <p className="text-sm text-blue-300">AI Summaries</p>
              <h3 className="mt-3 text-3xl font-bold">2</h3>
            </div>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5">
              <p className="text-sm text-amber-300">Pending Exports</p>
              <h3 className="mt-3 text-3xl font-bold">1</h3>
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Available Reports</h2>
              <p className="mt-2 text-sm text-slate-400">
                Download or review generated reports for operations and analytics.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
                        Weekly Summary
                      </p>
                      <h3 className="mt-2 text-lg font-semibold">
                        Store Performance Report
                      </h3>
                      <p className="mt-2 text-sm text-slate-400">
                        Includes weekly revenue, alerts, stock risks, and overall
                        operational performance.
                      </p>
                    </div>

                    <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-500">
                      Export PDF
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-blue-300">
                        AI Summary
                      </p>
                      <h3 className="mt-2 text-lg font-semibold">
                        Executive Risk Overview
                      </h3>
                      <p className="mt-2 text-sm text-slate-400">
                        AI-generated summary of major store risks, recommended actions,
                        and forecast trends.
                      </p>
                    </div>

                    <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
                      Export PDF
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-amber-300">
                        Detailed Export
                      </p>
                      <h3 className="mt-2 text-lg font-semibold">
                        Inventory & Waste Analysis
                      </h3>
                      <p className="mt-2 text-sm text-slate-400">
                        Product-level stock, expiry risk, waste indicators, and action
                        recommendations.
                      </p>
                    </div>

                    <button className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-amber-400">
                      Export Excel
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Export Center</h2>
              <p className="mt-2 text-sm text-slate-400">
                Choose how you want to generate and share reports.
              </p>

              <div className="mt-6 space-y-4">
                <button className="w-full rounded-xl bg-white/5 px-4 py-3 text-left text-sm text-slate-200 hover:bg-white/10">
                  Generate Weekly PDF
                </button>

                <button className="w-full rounded-xl bg-white/5 px-4 py-3 text-left text-sm text-slate-200 hover:bg-white/10">
                  Export Excel Data
                </button>

                <button className="w-full rounded-xl bg-white/5 px-4 py-3 text-left text-sm text-slate-200 hover:bg-white/10">
                  Generate AI Summary
                </button>
              </div>
            </div>
          </div>
        </section>
        </PageTransition>
      </div>
    </main>
  );
}