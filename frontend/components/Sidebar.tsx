"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Upload,
  TriangleAlert,
  Lightbulb,
  FileText,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Upload Center", href: "/upload", icon: Upload },
    { name: "Alerts", href: "/alerts", icon: TriangleAlert },
    { name: "Recommendations", href: "/recommendations", icon: Lightbulb },
    { name: "Reports", href: "/reports", icon: FileText },
  ];

  return (
    <aside className="w-64 border-r border-white/10 bg-slate-900/80 p-6">
      <h2 className="text-2xl font-bold text-blue-400 transition duration-300 hover:text-blue-300">
        SumBa
      </h2>
      <p className="mt-1 text-sm text-slate-400">Retail Intelligence</p>

      <nav className="mt-10 space-y-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all duration-300 ease-out ${
                isActive
                  ? "scale-[1.02] bg-blue-600 font-medium text-white shadow-lg shadow-blue-600/20"
                  : "text-slate-300 hover:translate-x-1 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}