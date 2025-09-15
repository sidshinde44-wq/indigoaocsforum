"use client";

import Link from "next/link";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const supabase = createClientComponentClient();
  const router = useRouter();

  const navItems = [
    { title: "Overview", href: "/dashboard" },
    { title: "OL Timeline", href: "/dashboard/timeline" },
    { title: "Resume Builder", href: "/dashboard/resume" },
    { title: "Interview Prep", href: "/dashboard/interview" },
    { title: "Assessment", href: "/dashboard/assessment" },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/auth"); // Redirect back to login/register
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar (Desktop) */}
      <aside className="w-64 bg-white shadow-lg p-6 hidden md:flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-6">IndiGo AOCS Prep</h2>
          <nav className="space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block px-3 py-2 rounded-lg hover:bg-indigo-100 transition"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <button
          onClick={handleLogout}
          className="w-full mt-6 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </aside>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow z-20 flex items-center justify-between px-4 py-3">
        <h2 className="text-lg font-bold">IndiGo AOCS Prep</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed top-14 left-0 w-64 h-full bg-white shadow-lg z-30 p-6 flex flex-col justify-between">
          <nav className="space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-indigo-100 transition"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <button
            onClick={handleLogout}
            className="w-full mt-6 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 md:ml-64 mt-12 md:mt-0">{children}</main>
    </div>
  );
}
