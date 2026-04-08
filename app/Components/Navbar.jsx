"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#f4ead8] dark:bg-[#1d1714] text-[#2d241d] dark:text-[#f3e7d3] border-b border-[#c8b79d] dark:border-[#4d3e34]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold font-serif tracking-wide">
          <Link href="/" className="hover:opacity-80 transition">
            Nexus.net
          </Link>
        </h1>

        <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-sm font-serif">
          <Link href="/" className="hover:underline hover:underline-offset-4">
            Home
          </Link>
          <Link
            href="/projectGrid"
            className="hover:underline hover:underline-offset-4"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="hover:underline hover:underline-offset-4"
          >
            About
          </Link>
          <Link
            href="/node"
            className="opacity-10 hover:opacity-100 hover:underline hover:underline-offset-4"
          >
            Node
          </Link>
        </div>
      </div>
    </nav>
  );
}
