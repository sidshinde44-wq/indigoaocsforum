"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Indigo AOCS Forum
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          <Link href="/about">About</Link>
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/register">Register</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-2">
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/auth/login" onClick={() => setIsOpen(false)}>
            Login
          </Link>
          <Link href="/auth/register" onClick={() => setIsOpen(false)}>
            Register
          </Link>
          <Link href="/dashboard" onClick={() => setIsOpen(false)}>
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
}
