import Link from "next/link";
import {
  ArrowLeft,
 FileText,
  Calculator,
  Award,
  TrendingUp,
} from "lucide-react";

const exams = [
  {
    title: "ACT (All Sections)",
    icon: FileText,
    topics:
      "English (grammar and rhetoric), Math (Algebra through Trigonometry and Pre-Calculus topics), Reading, Science (data interpretation and scientific reasoning), pacing, and overall testing strategy.",
    approach:
      "Every student begins with a full-length diagnostic exam to identify score gaps by section and question type. We then create a targeted study plan focused on the highest-impact areas rather than reviewing every topic equally. Timed section practice is central because ACT success depends on pacing and endurance just as much as content knowledge.",
    tailor:
      "Students struggling with ACT Science receive a different plan than students struggling with Math or English. As the exam approaches, tutoring gradually shifts from content review toward timed testing strategy and endurance.",
    assess:
      "Regular section tests and full-length ACT practice exams under realistic testing conditions, with detailed score tracking by section and question type.",
  },
  {
    title: "SAT Math",
    icon: Calculator,
    topics:
      "Algebra, Problem Solving and Data Analysis, Advanced Math, Functions, Quadratics, Geometry, Trigonometry, calculator and non-calculator strategies.",
    approach:
      "Using the same diagnostic-first approach, we identify exactly which SAT question types cost the most points and prioritize those areas. Students also learn SAT-specific problem framing and test strategies that differ from traditional classroom math.",
    tailor:
      "Students already enrolled in advanced mathematics courses focus less on reviewing familiar content and more on mastering SAT-specific pacing, wording, and common test traps.",
    assess:
      "Timed practice sets, section exams, and full-length SAT practice tests scored using official SAT scoring scales and tracked over time.",
  },
  {
    title: "AP Exam Preparation",
    icon: Award,
    topics:
      "AP Chemistry, AP Biology, AP Computer Science A, AP Computer Science Principles, AP Calculus BC, AP Physics, and additional AP subjects as needed.",
    approach:
      "Every AP subject follows the same proven framework: comprehensive content review aligned with the official College Board curriculum, extensive multiple-choice practice, and significant free-response practice scored using official AP rubrics. Since free-response questions account for many lost points, we devote substantial time to developing those skills.",
    tailor:
      "Instruction is customized to each student's AP course and focuses on the concepts and question types that need the most improvement. Sessions become increasingly exam-focused as testing day approaches.",
    assess:
      "Students complete timed AP practice exams, hand-scored free-response questions with detailed written feedback, and a comprehensive readiness assessment several weeks before the official exam to identify any remaining content gaps.",
  },
];

export default function TestPrepPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#EEF5FF] to-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 font-medium text-[#0D438B] transition hover:text-[#08356D]"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Services
          </Link>

          <p className="mt-10 text-lg font-semibold uppercase tracking-widest text-[#5CA3FF]">
            Standardized Testing
          </p>

          <h1 className="mt-3 text-5xl font-extrabold text-slate-900 md:text-6xl">
            Test Preparation
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-600">
            Success on standardized exams comes from more than knowing the
            material—it requires strategy, confidence, and efficient test-taking
            skills. Our personalized preparation helps students maximize their
            scores through targeted instruction, realistic practice, and
            data-driven progress tracking.
          </p>

          <a
            href="https://calendly.com/support-nextchapterlearning/free-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-xl bg-[#0D438B] px-8 py-4 font-semibold text-white transition hover:bg-[#08356D]"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>

      {/* Exams */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Exams We Prepare Students For
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
              Personalized preparation plans designed to improve content mastery,
              strengthen test-taking strategy, and build confidence before exam day.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {exams.map((exam) => {
              const Icon = exam.icon;

              return (
                <div
                  key={exam.title}
                  className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm"
                >
                  <div className="mb-8 flex items-center gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF5FF]">
                      <Icon
                        className="h-8 w-8 text-[#0D438B]"
                        strokeWidth={2}
                      />
                    </div>

                    <h2 className="text-3xl font-bold text-[#0D438B]">
                      {exam.title}
                    </h2>
                  </div>

                  <div className="grid gap-10 lg:grid-cols-2">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        Topics Covered
                      </h3>

                      <p className="mt-4 leading-8 text-slate-600">
                        {exam.topics}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        Our Approach
                      </h3>

                      <p className="mt-4 leading-8 text-slate-600">
                        {exam.approach}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        How We Tailor Instruction
                      </h3>

                      <p className="mt-4 leading-8 text-slate-600">
                        {exam.tailor}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        How We Measure Progress
                      </h3>

                      <p className="mt-4 leading-8 text-slate-600">
                        {exam.assess}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#F7FBFF] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-white p-10 shadow-sm">
            <h2 className="text-4xl font-bold text-slate-900">
              Pricing
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every student receives a personalized study plan based on their
              diagnostic results, testing timeline, and target score. Whether
              you're preparing months in advance or need intensive review before
              test day, we'll build a plan that fits your goals.
            </p>

            <div className="mt-8 rounded-2xl bg-[#EEF5FF] p-8">
              <p className="text-3xl font-bold text-[#0D438B]">
                Starting at $40 / hour
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-[#0D438B] px-8 py-16 text-center text-white">
            <TrendingUp className="mx-auto mb-6 h-12 w-12" />

            <h2 className="text-4xl font-bold">
              Reach Your Target Score
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Personalized instruction, strategic practice, and continuous
              progress tracking help students walk into test day prepared,
              confident, and ready to perform at their best.
            </p>

            <a
              href="https://calendly.com/support-nextchapterlearning/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-[#0D438B] transition hover:bg-slate-100"
            >
              Book a Free Consultation
            </a>

            <div className="mt-6">
              <Link
                href="/#services"
                className="font-medium text-blue-200 transition hover:text-white"
              >
                ← Back to Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}