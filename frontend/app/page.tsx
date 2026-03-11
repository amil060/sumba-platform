"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="hidden lg:flex flex-col justify-between border-r border-white/10 p-12">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300">
              SumBa Platform
            </p>
            <h1 className="mt-6 max-w-lg text-5xl font-bold leading-tight">
              Smart retail intelligence for faster operational decisions
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate-300">
              Upload store data, monitor critical alerts, review AI-powered
              recommendations, and manage retail performance from a single
              enterprise dashboard.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <p className="text-sm text-slate-400">Low Stock Detection</p>
              <h3 className="mt-2 text-2xl font-semibold text-amber-300">
                Real-time risk alerts
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <p className="text-sm text-slate-400">AI Recommendations</p>
              <h3 className="mt-2 text-2xl font-semibold text-emerald-300">
                Actionable store insights
              </h3>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center px-4 py-10 sm:px-8">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-8 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-300 lg:hidden">
                SumBa Platform
              </p>
              <h2 className="mt-3 text-3xl font-bold">Welcome back</h2>
              <p className="mt-2 text-sm text-slate-300">
                Sign in to access your retail intelligence dashboard
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium text-slate-200">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-200">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                Login
              </button>
            </form>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
              Demo access for prototype environment
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}