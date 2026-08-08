import Link from "next/link";
import { ArrowLeft, Stethoscope } from "lucide-react";

export default function BAMDPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#EEF5FF] to-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            href="/#services"
            className="mb-8 inline-flex items-center gap-2 text-[#0D438B] transition hover:text-[#5CA3FF]"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Services
          </Link>

          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0D438B]">
              <Stethoscope className="h-10 w-10 text-white" />
            </div>

            <div>
              <p className="font-semibold uppercase tracking-wide text-[#5CA3FF]">
                Specialized Admissions Guidance
              </p>

              <h1 className="mt-2 text-5xl font-bold text-slate-900">
                BA/MD & BS/MD Program + MMI Interview Preparation
              </h1>
            </div>
          </div>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-600">
            Admission into combined medical programs is one of the most
            competitive processes in higher education. Beyond exceptional
            academics, applicants must demonstrate maturity, communication
            skills, ethical reasoning, and a genuine commitment to medicine.
            Our mentorship is built on firsthand experience successfully
            navigating this process, helping students prepare authentic,
            competitive applications and excel in both traditional and Multiple
            Mini Interviews (MMIs).
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl space-y-16 px-6">

          <div>
            <h2 className="text-3xl font-bold text-[#0D438B]">
              Topics Covered
            </h2>

            <ul className="mt-6 space-y-3 text-lg leading-8 text-slate-700">
              <li>• Program research and school list development</li>
              <li>• Application strategy and timeline planning</li>
              <li>• Personal statement development</li>
              <li>• Secondary essay writing</li>
              <li>• Activities and resume strategy</li>
              <li>• Letters of recommendation guidance</li>
              <li>• Traditional and panel-style mock interviews</li>
              <li>• Complete Multiple Mini Interview (MMI) preparation</li>
              <li>• Ethical reasoning scenarios</li>
              <li>• Collaboration and communication stations</li>
              <li>• Healthcare policy discussions</li>
              <li>• Situational judgment prompts</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0D438B]">
              Our Approach
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We believe preparation for combined medical programs should build
              genuine skills rather than rely on memorized responses. Students
              develop authentic personal narratives that reflect their own
              experiences instead of generic "future doctor" stories. During
              interview preparation, we focus on structured thinking,
              communication, ethical reasoning, and remaining composed under
              pressure. Every mock interview and MMI circuit is followed by
              detailed, honest feedback designed to help students continually
              improve.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0D438B]">
              How We Tailor Guidance
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every applicant has different strengths and different challenges.
              Some students need help discovering the unique story that will
              define their application, while others already have a compelling
              narrative but need assistance refining essays or strengthening
              interview performance. We begin by identifying where each student
              currently stands and then create a personalized plan focused on
              their goals, target schools, and timeline.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0D438B]">
              How We Measure Success
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Progress is measured throughout the entire application process.
              Essay drafts improve through multiple rounds of structured
              feedback, while mock interviews and MMI stations are evaluated
              using criteria similar to those used by admissions committees.
              Students and parents receive milestone-based guidance so everyone
              understands exactly where they are in the application timeline.
            </p>
          </div>

          <div className="mt-8 rounded-2xl bg-[#EEF5FF] p-8">
              <p className="text-3xl font-bold text-[#0D438B]">
                Starting at $60 / hour
              </p>
            </div>

          <div className="rounded-3xl bg-[#EEF5FF] p-10">
            <h2 className="text-3xl font-bold text-[#0D438B]">
              Helping Future Physicians Reach Their Goals
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              We've had the privilege of guiding students through the BA/MD,
              BS/MD, and medical program admissions process and celebrating
              alongside them as they earned acceptance into the programs they
              worked so hard to reach. Whether you're beginning to build your
              school list, refining application essays, or preparing for an
              interview next month, we're committed to helping you present your
              strongest, most authentic self every step of the way.
            </p>
            

            <Link
              href="https://calendly.com/support-nextchapterlearning/free-consultation"
              target="_blank"
              className="mt-8 inline-block rounded-xl bg-[#0D438B] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#08356D]"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}