import Sidebar from "@/components/Sidebar";
import PageTransition from "@/components/PageTransition";

export default function RecommendationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen">
        <Sidebar />
        <PageTransition>
        <section className="flex-1 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-blue-300">
                Decision Engine
              </p>
              <h1 className="mt-2 text-3xl font-bold">Recommendations</h1>
              <p className="mt-2 text-sm text-slate-400">
                Review AI-generated actions to improve store operations.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              8 New Actions
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
              <p className="text-sm text-emerald-300">Reorder Actions</p>
              <h3 className="mt-3 text-3xl font-bold">3</h3>
            </div>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5">
              <p className="text-sm text-amber-300">Discount Actions</p>
              <h3 className="mt-3 text-3xl font-bold">2</h3>
            </div>

            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
              <p className="text-sm text-blue-300">Review Actions</p>
              <h3 className="mt-3 text-3xl font-bold">3</h3>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            <div className="rounded-2xl border border-emerald-500/20 bg-white/5 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
                    Reorder
                  </p>
                  <h2 className="mt-2 text-xl font-semibold">
                    Reorder 40 units of milk for Store A
                  </h2>
                  <p className="mt-2 text-sm text-slate-400">
                    Current stock is not enough for expected demand in the next 24 hours.
                  </p>
                </div>

                <button className="rounded-xl bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-500/30">
                  Review
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-500/20 bg-white/5 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-300">
                    Discount
                  </p>
                  <h2 className="mt-2 text-xl font-semibold">
                    Apply 15% discount to bananas in Store B
                  </h2>
                  <p className="mt-2 text-sm text-slate-400">
                    Expiry risk is high and a discount can reduce waste and loss.
                  </p>
                </div>

                <button className="rounded-xl bg-amber-500/20 px-4 py-2 text-sm font-medium text-amber-300 hover:bg-amber-500/30">
                  Review
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-500/20 bg-white/5 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-300">
                    Investigation
                  </p>
                  <h2 className="mt-2 text-xl font-semibold">
                    Review unusual revenue growth in Store C
                  </h2>
                  <p className="mt-2 text-sm text-slate-400">
                    Revenue pattern differs significantly from the expected daily behavior.
                  </p>
                </div>

                <button className="rounded-xl bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300 hover:bg-blue-500/30">
                  Review
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