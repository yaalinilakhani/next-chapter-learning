"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" onClick={closeMenu}>
          <Image
            src="/color_logo.svg"
            alt="Next Chapter Learning"
            width={80}
            height={80}
            priority
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#services"
            className="font-medium text-slate-700 transition hover:text-[#0D438B]"
          >
            Services
          </a>

          <a
            href="#about"
            className="font-medium text-slate-700 transition hover:text-[#0D438B]"
          >
            About
          </a>

          <a
            href="#why-us"
            className="font-medium text-slate-700 transition hover:text-[#0D438B]"
          >
            Why Us
          </a>

          <a
            href="#testimonials"
            className="font-medium text-slate-700 transition hover:text-[#0D438B]"
          >
            Testimonials
          </a>

          <a
            href="#faq"
            className="font-medium text-slate-700 transition hover:text-[#0D438B]"
          >
            FAQ
          </a>

          <a
            href="#contact"
            className="font-medium text-slate-700 transition hover:text-[#0D438B]"
          >
            Contact
          </a>
        </div>

        {/* Desktop Button */}
        <a
          href="https://calendly.com/support-nextchapterlearning/free-consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-xl bg-[#0D438B] px-5 py-3 font-semibold text-white transition hover:bg-[#08356D] md:block"
        >
          Book a Free Consultation
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="space-y-1 border-t border-slate-200 bg-white px-6 py-6">

          <a
            href="#services"
            onClick={closeMenu}
            className="block rounded-lg px-3 py-3 text-lg font-medium text-slate-700 hover:bg-slate-100"
          >
            Services
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            className="block rounded-lg px-3 py-3 text-lg font-medium text-slate-700 hover:bg-slate-100"
          >
            About
          </a>

          <a
            href="#why-us"
            onClick={closeMenu}
            className="block rounded-lg px-3 py-3 text-lg font-medium text-slate-700 hover:bg-slate-100"
          >
            Why Us
          </a>

          <a
            href="#testimonials"
            onClick={closeMenu}
            className="block rounded-lg px-3 py-3 text-lg font-medium text-slate-700 hover:bg-slate-100"
          >
            Testimonials
          </a>

          <a
            href="#faq"
            onClick={closeMenu}
            className="block rounded-lg px-3 py-3 text-lg font-medium text-slate-700 hover:bg-slate-100"
          >
            FAQ
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="block rounded-lg px-3 py-3 text-lg font-medium text-slate-700 hover:bg-slate-100"
          >
            Contact
          </a>

          <a
            href="https://calendly.com/support-nextchapterlearning/free-consultation"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-6 block rounded-xl bg-[#0D438B] px-5 py-3 text-center font-semibold text-white transition hover:bg-[#08356D]"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </nav>
  );
}