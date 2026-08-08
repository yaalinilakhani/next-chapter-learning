import Link from "next/link";
import {
  ArrowLeft,
  GraduationCap,
  CalendarCheck,
  ClipboardList,
  Users,
  Target,
} from "lucide-react";

export default function CollegeCounselingPage() {
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
            College Admissions
          </p>

          <h1 className="mt-3 text-5xl font-extrabold text-slate-900 md:text-6xl">
            College Counseling & Guidance
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-600">
            Applying to college can feel overwhelming, but it doesn't have to.
            We provide personalized guidance throughout the admissions process,
            helping students stay organized, make informed decisions, and submit
            strong applications that reflect who they are.
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

      {/* Service Details */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

            <div className="mb-8 flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF5FF]">
                <GraduationCap
                  className="h-8 w-8 text-[#0D438B]"
                  strokeWidth={2}
                />
              </div>

              <h2 className="text-3xl font-bold text-[#0D438B]">
                Personalized College Guidance
              </h2>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">

              <div>
                <div className="mb-4 flex items-center gap-3">
                  <ClipboardList className="h-6 w-6 text-[#5CA3FF]" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    Topics Covered
                  </h3>
                </div>

                <p className="leading-8 text-slate-600">
                  School list building, application timeline planning,
                  extracurricular and resume strategy, interview preparation,
                  and coordination with college essay writing whenever needed.
                </p>
              </div>

              <div>
                <div className="mb-4 flex items-center gap-3">
                  <Target className="h-6 w-6 text-[#5CA3FF]" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    Our Approach
                  </h3>
                </div>

                <p className="leading-8 text-slate-600">
                  We help students build a balanced, personalized college list
                  based on their academic profile, interests, and long-term
                  goals—not simply rankings. Together, we create a realistic
                  month-by-month application timeline so deadlines are met
                  without last-minute stress.
                </p>
              </div>

              <div>
                <div className="mb-4 flex items-center gap-3">
                  <Users className="h-6 w-6 text-[#5CA3FF]" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    How We Tailor Guidance
                  </h3>
                </div>

                <p className="leading-8 text-slate-600">
                  Every student receives individualized guidance based on their
                  academic record, extracurricular involvement, career
                  interests, and personal goals. We don't use template college
                  lists or one-size-fits-all advice—our recommendations are
                  built around each student's unique journey.
                </p>
              </div>

              <div>
                <div className="mb-4 flex items-center gap-3">
                  <CalendarCheck className="h-6 w-6 text-[#5CA3FF]" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    How We Measure Progress
                  </h3>
                </div>

                <p className="leading-8 text-slate-600">
                  We track important milestones throughout the admissions
                  process—including finalizing the college list, completing
                  essays, and submitting applications—and keep parents informed
                  so everyone stays aligned on progress and upcoming deadlines.
                </p>
              </div>

            </div>
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
              Every student has different college goals and timelines. Whether
              you need guidance throughout the entire admissions process or
              support with a specific stage, we'll create a personalized plan
              that fits your needs.
            </p>

            <div className="mt-8 rounded-2xl bg-[#EEF5FF] p-8">
              <p className="text-3xl font-bold text-[#0D438B]">
                Starting at $45 / hour
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-[#0D438B] px-8 py-16 text-center text-white">
            <h2 className="text-4xl font-bold">
              Start Your College Journey with Confidence
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              From building a balanced college list to submitting polished
              applications, we're here to guide students and families through
              every step of the admissions process.
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