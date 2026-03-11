import Sidebar from "@/components/Sidebar";
import PageTransition from "@/components/PageTransition";

export default function AlertsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <PageTransition>
          <section className="flex-1 p-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-blue-300">
                  Monitoring
                </p>
                <h1 className="mt-2 text-3xl font-bold">Alerts Center</h1>
                <p className="mt-2 text-sm text-slate-400">
                  Track critical operational risks and system-generated alerts.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10">
                12 Active Alerts
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-rose-400/40 hover:bg-rose-500/15 hover:shadow-lg hover:shadow-rose-500/10">
                <p className="text-sm text-rose-300">Critical</p>
                <h3 className="mt-3 text-3xl font-bold">4</h3>
              </div>

              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-amber-500/15 hover:shadow-lg hover:shadow-amber-500/10">
                <p className="text-sm text-amber-300">High Priority</p>
                <h3 className="mt-3 text-3xl font-bold">5</h3>
              </div>

              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/15 hover:shadow-lg hover:shadow-blue-500/10">
                <p className="text-sm text-blue-300">Medium Priority</p>
                <h3 className="mt-3 text-3xl font-bold">3</h3>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border border-rose-500/20 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-rose-400/30 hover:bg-white/10 hover:shadow-lg hover:shadow-rose-500/10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-rose-300">
                      Critical
                    </p>
                    <h2 className="mt-2 text-xl font-semibold">
                      Milk stock may run out tomorrow
                    </h2>
                    <p className="mt-2 text-sm text-slate-400">
                      Store A has only 12 units left, while predicted demand for the
                      next 24 hours is 31 units.
                    </p>
                  </div>

                  <button className="rounded-xl bg-rose-500/20 px-4 py-2 text-sm font-medium text-rose-300 transition hover:bg-rose-500/30 hover:text-white">
                    View
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-amber-500/20 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/10 hover:shadow-lg hover:shadow-amber-500/10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-300">
                      High
                    </p>
                    <h2 className="mt-2 text-xl font-semibold">
                      Banana expiry risk detected
                    </h2>
                    <p className="mt-2 text-sm text-slate-400">
                      26 banana units in Store B are approaching expiry within 2 days.
                      A discount recommendation has been generated.
                    </p>
                  </div>

                  <button className="rounded-xl bg-amber-500/20 px-4 py-2 text-sm font-medium text-amber-300 transition hover:bg-amber-500/30 hover:text-white">
                    View
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-blue-500/20 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-blue-300">
                      Medium
                    </p>
                    <h2 className="mt-2 text-xl font-semibold">
                      Unusual revenue spike in Store C
                    </h2>
                    <p className="mt-2 text-sm text-slate-400">
                      Sales increased by 38% in the last 6 hours compared to the
                      normal daily pattern. Review recommended.
                    </p>
                  </div>

                  <button className="rounded-xl bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-500/30 hover:text-white">
                    View
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