export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-4xl font-bold text-[#0D438B]">
          Contact Us
        </h2>

        <p className="mt-4 text-center text-slate-600">
          Have a question? We'd love to hear from you!
        </p>

        <form
          action="https://formspree.io/f/meeydnrj"
          method="POST"
          className="mt-12 space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#0D438B]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#0D438B]"
          />

          <input
            type="text"
            name="student"
            placeholder="Student Name (Optional)"
            className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#0D438B]"
          />

          <textarea
            name="message"
            rows={6}
            placeholder="How can we help you?"
            required
            className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#0D438B]"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-[#0D438B] py-4 text-lg font-semibold text-white transition duration-300 hover:bg-[#08356D]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}