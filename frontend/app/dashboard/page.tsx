import Sidebar from "@/components/Sidebar";
import PageTransition from "@/components/PageTransition";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <PageTransition>
          <section className="flex-1 p-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-blue-300">
                  Overview
                </p>
                <h1 className="mt-2 text-3xl font-bold">Dashboard</h1>
                <p className="mt-2 text-sm text-slate-400">
                  Monitor your retail operations and insights in one place.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                Manager Panel
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/10">
                <p className="text-sm text-slate-400">Total Products</p>
                <h3 className="mt-3 text-3xl font-bold">1,248</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/10 hover:shadow-lg hover:shadow-amber-500/10">
                <p className="text-sm text-slate-400">Low Stock Alerts</p>
                <h3 className="mt-3 text-3xl font-bold text-amber-400">18</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-rose-400/30 hover:bg-white/10 hover:shadow-lg hover:shadow-rose-500/10">
                <p className="text-sm text-slate-400">Expiry Risk Items</p>
                <h3 className="mt-3 text-3xl font-bold text-rose-400">9</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/10 hover:shadow-lg hover:shadow-emerald-500/10">
                <p className="text-sm text-slate-400">Weekly Revenue</p>
                <h3 className="mt-3 text-3xl font-bold text-emerald-400">
                  ₼42,500
                </h3>
              </div>
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-3">
              <div className="xl:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-blue-400/20 hover:bg-white/10">
                <h2 className="text-xl font-semibold">Operational Summary</h2>
                <p className="mt-2 text-sm text-slate-400">
                  Your AI-powered retail insights and store trends will appear here.
                </p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/50 p-6">
                  <div className="flex h-64 items-end justify-between gap-3">
                    <div className="flex flex-1 flex-col items-center gap-3">
                      <div
                        className="w-full rounded-t-xl bg-blue-500/80 transition-all duration-300 hover:bg-blue-400"
                        style={{ height: "45%" }}
                      />
                      <span className="text-xs text-slate-400">Mon</span>
                    </div>

                    <div className="flex flex-1 flex-col items-center gap-3">
                      <div
                        className="w-full rounded-t-xl bg-blue-500/80 transition-all duration-300 hover:bg-blue-400"
                        style={{ height: "60%" }}
                      />
                      <span className="text-xs text-slate-400">Tue</span>
                    </div>

                    <div className="flex flex-1 flex-col items-center gap-3">
                      <div
                        className="w-full rounded-t-xl bg-blue-500/80 transition-all duration-300 hover:bg-blue-400"
                        style={{ height: "52%" }}
                      />
                      <span className="text-xs text-slate-400">Wed</span>
                    </div>

                    <div className="flex flex-1 flex-col items-center gap-3">
                      <div
                        className="w-full rounded-t-xl bg-blue-500/80 transition-all duration-300 hover:bg-blue-400"
                        style={{ height: "75%" }}
                      />
                      <span className="text-xs text-slate-400">Thu</span>
                    </div>

                    <div className="flex flex-1 flex-col items-center gap-3">
                      <div
                        className="w-full rounded-t-xl bg-blue-500/80 transition-all duration-300 hover:bg-blue-400"
                        style={{ height: "90%" }}
                      />
                      <span className="text-xs text-slate-400">Fri</span>
                    </div>

                    <div className="flex flex-1 flex-col items-center gap-3">
                      <div
                        className="w-full rounded-t-xl bg-blue-500/80 transition-all duration-300 hover:bg-blue-400"
                        style={{ height: "70%" }}
                      />
                      <span className="text-xs text-slate-400">Sat</span>
                    </div>

                    <div className="flex flex-1 flex-col items-center gap-3">
                      <div
                        className="w-full rounded-t-xl bg-blue-500/80 transition-all duration-300 hover:bg-blue-400"
                        style={{ height: "58%" }}
                      />
                      <span className="text-xs text-slate-400">Sun</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <h2 className="text-xl font-semibold">Recent Alerts</h2>
                <div className="mt-5 space-y-4">
                  <div className="rounded-xl border border-rose-500/20 bg-rose-500/10 p-4 transition-all duration-300 hover:bg-rose-500/15">
                    <p className="font-medium text-rose-300">Milk stock is low</p>
                    <p className="mt-1 text-sm text-slate-300">
                      Reorder recommended within 24 hours.
                    </p>
                  </div>

                  <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 transition-all duration-300 hover:bg-amber-500/15">
                    <p className="font-medium text-amber-300">
                      Banana expiry risk detected
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Suggested discount: 15% today.
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-4 transition-all duration-300 hover:bg-blue-500/15">
                    <p className="font-medium text-blue-300">
                      Revenue spike in Store B
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Sales increased unusually in the last 6 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-3">
              <div className="xl:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-blue-400/20 hover:bg-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-blue-300">
                      AI Assistant
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold">SumBa Copilot</h2>
                  </div>

                  <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 px-3 py-2 text-sm text-blue-300">
                    Online
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="max-w-[80%] rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Manager
                    </p>
                    <p className="mt-2 text-sm text-slate-200">
                      Which products require urgent action today?
                    </p>
                  </div>

                  <div className="ml-auto max-w-[85%] rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-blue-300">
                      SumBa AI
                    </p>
                    <p className="mt-2 text-sm text-slate-100">
                      3 urgent items detected: Milk in Store A needs reorder
                      within 24 hours, Bananas in Store B need discount action,
                      and Store C shows unusual revenue activity that should be
                      reviewed.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <input
                    type="text"
                    placeholder="Ask SumBa AI something..."
                    className="flex-1 rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
                  />
                  <button className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500">
                    Ask
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <h2 className="text-xl font-semibold">AI Quick Prompts</h2>
                <div className="mt-5 space-y-3">
                  <button className="w-full rounded-xl bg-white/5 px-4 py-3 text-left text-sm text-slate-200 transition hover:bg-white/10">
                    Which products are at risk this week?
                  </button>
                  <button className="w-full rounded-xl bg-white/5 px-4 py-3 text-left text-sm text-slate-200 transition hover:bg-white/10">
                    Why did revenue increase today?
                  </button>
                  <button className="w-full rounded-xl bg-white/5 px-4 py-3 text-left text-sm text-slate-200 transition hover:bg-white/10">
                    What discounts should I apply now?
                  </button>
                  <button className="w-full rounded-xl bg-white/5 px-4 py-3 text-left text-sm text-slate-200 transition hover:bg-white/10">
                    Show top operational risks
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