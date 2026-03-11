export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen">
        <aside className="w-64 border-r border-white/10 bg-slate-900/80 p-6">
          <h2 className="text-2xl font-bold text-blue-400">SumBa</h2>
          <p className="mt-1 text-sm text-slate-400">Retail Intelligence</p>

          <nav className="mt-10 space-y-3">
            <a
              href="/dashboard"
              className="block rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5"
            >
              Upload Center
            </a>
            <a
              href="#"
              className="block rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5"
            >
              Alerts
            </a>
            <a
              href="#"
              className="block rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5"
            >
              Recommendations
            </a>
            <a
              href="#"
              className="block rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5"
            >
              Reports
            </a>
          </nav>
        </aside>

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
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-400">Total Products</p>
              <h3 className="mt-3 text-3xl font-bold">1,248</h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-400">Low Stock Alerts</p>
              <h3 className="mt-3 text-3xl font-bold text-amber-400">18</h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-400">Expiry Risk Items</p>
              <h3 className="mt-3 text-3xl font-bold text-rose-400">9</h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-400">Weekly Revenue</p>
              <h3 className="mt-3 text-3xl font-bold text-emerald-400">
                ₼42,500
              </h3>
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Operational Summary</h2>
              <p className="mt-2 text-sm text-slate-400">
                Your AI-powered retail insights and store trends will appear here.
              </p>

              <div className="mt-6 h-64 rounded-2xl border border-dashed border-white/10 bg-slate-900/50 flex items-center justify-center text-slate-500">
                Chart area
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Recent Alerts</h2>
              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-rose-500/20 bg-rose-500/10 p-4">
                  <p className="font-medium text-rose-300">Milk stock is low</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Reorder recommended within 24 hours.
                  </p>
                </div>

                <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
                  <p className="font-medium text-amber-300">
                    Banana expiry risk detected
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Suggested discount: 15% today.
                  </p>
                </div>

                <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
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
        </section>
      </div>
    </main>
  );
}