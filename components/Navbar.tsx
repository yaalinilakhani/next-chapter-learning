import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#">
          <Image
            src="/color_logo.svg"
            alt="Next Chapter Learning"
            width={80}
            height={80}
            priority
            className="h-10 w-auto"
          />
        </a>

        {/* Navigation Links */}
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

        {/* CTA */}
        <a
            href="https://calendly.com/support-nextchapterlearning/free-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#0D438B] px-5 py-3 font-semibold text-white transition hover:bg-[#08356D]"
        >
          Book a Free Consultation
        </a>
      </div>
    </nav>
  );
}