"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-4 border-b border-gray-300 dark:border-gray-700 gap-3 sm:gap-0">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-500 text-center sm:text-left">
        <Link href="/">Nexus.net</Link>
      </h1>

      <div className="flex justify-center sm:justify-end gap-4 sm:gap-6 text-sm">
        <Link href="/" className="hover:text-blue-500 transition">
          Home
        </Link>

        <Link href="/projectGrid" className="hover:text-purple-500 transition">
          Projects
        </Link>

        <Link href="/about" className="hover:text-purple-500 transition">
          About
        </Link>

        <Link
          href="/"
          className="opacity-40 hover:opacity-100 hover:text-red-500 transition"
        >
          Node
        </Link>
      </div>
    </nav>
  );
}
