const faqs = [
  {
    question: "What grade levels do you tutor?",
    answer:
      "We provide online tutoring for students in Kindergarten through 12th grade.",
  },
  {
    question: "What subjects do you offer?",
    answer:
      "We offer K–12 tutoring, ACT Prep, SAT Math Prep, Essay Review, and College Application support.",
  },
  {
    question: "Are sessions online?",
    answer:
      "Yes! All tutoring sessions are conducted virtually, making scheduling easy and flexible.",
  },
  {
    question: "How long is each tutoring session?",
    answer:
      "Most sessions are 60 minutes, but we can adjust the length based on each student's needs.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply book a free consultation, and we'll discuss your goals, answer your questions, and create a personalized learning plan.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#F7FBFF] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-4xl font-bold text-[#0D438B]">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {faq.question}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}