import Image from "next/image";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0D438B] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        {/* Brand */}
        <div>
          <Image
            src="/white_logo.svg"
            alt="Next Chapter Learning"
            width={80}
            height={80}
            className="mb-4"
          />

          <h2 className="text-2xl font-bold">
            Next Chapter Learning
          </h2>

          <p className="mt-4 max-w-sm text-blue-100 leading-7">
            Personalized online tutoring designed to help every student
            build confidence, achieve their goals, and reach their next
            chapter.
          </p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="mb-5 text-xl font-semibold">
            Follow Us
          </h3>

          <p className="mb-6 text-blue-100">
            Follow us for study tips, educational resources,
            and updates.
          </p>

          <div className="flex gap-5">
            <a
              href="https://instagram.com/next_chapter_learning?igsh=d2wyaDFxMXM4ajZm&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-white/10 p-3 transition hover:bg-[#5CA3FF]"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-blue-100 md:flex-row">
          <p>© {new Date().getFullYear()} Next Chapter Learning</p>

          <p>Built with ❤️ by the Next Chapter Learning Team</p>
        </div>
      </div>
    </footer>
  );
}