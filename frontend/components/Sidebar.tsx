
export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-white/10 bg-slate-900/80 p-6">
      <h2 className="text-2xl font-bold text-blue-400">SumBa</h2>
      <p className="mt-1 text-sm text-slate-400">Retail Intelligence</p>

      <nav className="mt-10 space-y-3">
        <a
          href="/dashboard"
          className="block rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5"
        >
          Dashboard
        </a>
        <a
          href="/upload"
          className="block rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5"
        >
          Upload Center
        </a>
        <a
          href="/alerts"
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
  );
}