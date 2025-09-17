"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* LOGO + TEXT */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Imtiyaz Center"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-bold text-lg text-[var(--color-primary)]">
            Imtiyaz Center
          </span>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex space-x-8 font-medium text-[var(--color-text)]">
          <a href="/" className="hover:text-[var(--color-primary)]">
            Beranda
          </a>
          <a href="/about" className="hover:text-[var(--color-primary)]">
            Tentang
          </a>
          <a href="/program" className="hover:text-[var(--color-primary)]">
            Program
          </a>
          <a href="/contact" className="hover:text-[var(--color-primary)]">
            Kontak
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-2 p-4 font-medium text-[var(--color-text)]">
            <a href="/" className="hover:text-[var(--color-primary)]">
              Beranda
            </a>
            <a href="/about" className="hover:text-[var(--color-primary)]">
              Tentang
            </a>
            <a href="/program" className="hover:text-[var(--color-primary)]">
              Program
            </a>
            <a href="/contact" className="hover:text-[var(--color-primary)]">
              Kontak
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
