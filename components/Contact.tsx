"use client";

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    student: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const token = recaptchaRef.current?.getValue();

    if (!token) {
      setStatus("Please complete the reCAPTCHA.");
      return;
    }

    setLoading(true);
    setStatus("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-recaptcha-token": token,
      },
      body: JSON.stringify({
        ...form,
        subject: "Website Contact Form",
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setStatus("Your message has been sent!");

      setForm({
        name: "",
        email: "",
        student: "",
        message: "",
      });

      recaptchaRef.current?.reset();
    } else {
      setStatus(data.error || "Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-4xl font-bold text-[#0D438B]">
          Contact Us
        </h2>

        <p className="mt-4 text-center text-slate-600">
          Have a question? We'd love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#0D438B]"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#0D438B]"
          />

          <input
            type="text"
            placeholder="Student Name (Optional)"
            value={form.student}
            onChange={(e) =>
              setForm({ ...form, student: e.target.value })
            }
            className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#0D438B]"
          />

          <textarea
            rows={6}
            placeholder="How can we help you?"
            required
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#0D438B]"
          />

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#0D438B] py-4 text-lg font-semibold text-white transition hover:bg-[#08356D] disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-center font-medium text-[#0D438B]">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}