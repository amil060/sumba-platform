"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Upload Center", href: "/upload" },
    { name: "Alerts", href: "/alerts" },
    { name: "Recommendations", href: "/recommendations" },
    { name: "Reports", href: "/reports" },
  ];

  return (
    <aside className="w-64 border-r border-white/10 bg-slate-900/80 p-6">
      <h2 className="text-2xl font-bold text-blue-400">SumBa</h2>
      <p className="mt-1 text-sm text-slate-400">Retail Intelligence</p>

      <nav className="mt-10 space-y-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-xl px-4 py-3 text-sm transition ${
                isActive
                  ? "bg-blue-600 font-medium text-white"
                  : "text-slate-300 hover:bg-white/5"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}