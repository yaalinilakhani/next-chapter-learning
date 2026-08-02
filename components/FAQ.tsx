const faqs = [
  {
    question: "How much does this cost, and are there any hidden fees?",
    answer:
      "We offer straightforward, transparent pricing based on session type and frequency — no hidden fees or surprise charges. We'll walk you through exact rates and payment options during your initial consultation, so you know precisely what you're paying for before committing to anything.",
  },
  {
    question: "Can you actually guarantee my student will improve?",
    answer:
      "We can't ethically guarantee a specific grade or score, since results depend on factors outside any tutor's control — a student's effort between sessions, their starting point, and outside circumstances all play a role. What we can promise is a genuinely personalized process: real diagnostic work up front, tailored instruction, and consistent progress tracking, so improvement is the expected outcome even though we can't put an exact number on it in advance.",
  },
  {
    question: "How is this different from other tutoring services we've tried?",
    answer:
      "The biggest difference is personalization. We don't run students through generic worksheets or a fixed script — we diagnose exactly where a student's understanding breaks down and build tutoring around that specific gap, adjusting our teaching style to how that individual student actually learns best.",
  },
  {
    question: "Will my student have the same tutor every session?",
    answer:
      "Yes, whenever possible. Consistency matters — a tutor who already knows your student's strengths, gaps, and learning style can move faster and more effectively than starting fresh each time.",
  },
  {
    question: "Is there a long-term contract, and what's your cancellation policy?",
    answer:
      "No long-term contract required. We understand needs change, and we're happy to talk through pausing or adjusting your plan as circumstances shift. For individual sessions, we just ask for reasonable advance notice to cancel or reschedule so we can offer that time to another family.",
  },
  {
    question: "How will we actually know if tutoring is working?",
    answer:
      "We track real, concrete progress — practice scores, specific error patterns improving, grades on actual assignments, or a growing essay/writing portfolio — and check in with parents regularly, so you're never left wondering how things are going.",
  },
  {
    question: "How do we get started?",
    answer:
      "Reach out to schedule an initial consultation. We'll talk through your student's needs, answer any remaining questions, and get them matched with the right tutor to start making progress right away.",
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