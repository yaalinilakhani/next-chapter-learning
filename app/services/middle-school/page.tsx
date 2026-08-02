import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Calculator,
  FlaskConical,
  Globe,
} from "lucide-react";

const subjects = [
  {
    title: "English",
    icon: BookOpen,
    topics:
      "Reading comprehension and literary analysis (theme, character, plot structure, literary devices), grammar and mechanics, vocabulary, and writing (paragraph structure, the five-paragraph essay, narrative and persuasive writing).",
    approach:
      "This is the age where writing structure really needs to solidify. We break essay writing into explicit, teachable parts—thesis statements, topic sentences, evidence integration, transitions—practicing each piece before combining them into a full essay. For reading, we teach students to annotate and ask analytical questions instead of simply summarizing the plot.",
    tailor:
      "We match reading material to the student's classroom novels and curriculum whenever possible. Essay instruction is adjusted depending on whether the student needs support with idea generation, organization, or grammar and mechanics.",
    assess:
      "Regular writing samples scored using teacher-style rubrics, along with reading comprehension checks based on assigned class material.",
  },
  {
    title: "Math (Pre-Algebra through Early Algebra)",
    icon: Calculator,
    topics:
      "Ratios and proportions, integers and operations, expressions and equations, introductory functions, probability and statistics, and the transition into formal Algebra.",
    approach:
      "Middle school is where mathematics becomes abstract. We slow down this transition by connecting equations back to concrete numbers and real-world examples until students truly understand the concepts rather than memorizing procedures.",
    tailor:
      "We determine whether difficulties are computational, conceptual, or procedural because each type of challenge requires a different instructional approach.",
    assess:
      "Weekly mixed-review assignments, error-pattern tracking, and periodic timed practice to strengthen both accuracy and confidence.",
  },
  {
    title: "Science",
    icon: FlaskConical,
    topics:
      "Life science (cells, genetics, ecosystems), physical science (energy, matter, chemical and physical changes), earth and space science, and scientific method with introductory lab report writing.",
    approach:
      "Students develop formal scientific reasoning by learning hypothesis formation, experimental variables, and data interpretation while using demonstrations and visual learning whenever possible.",
    tailor:
      "Students preparing for rigorous high school science courses begin developing lab report writing and scientific data analysis skills early.",
    assess:
      "Lab-style write-ups, unit review quizzes, and concept mapping exercises that evaluate how well students connect scientific ideas together.",
  },
  {
    title: "Social Studies",
    icon: Globe,
    topics:
      "United States and world history, geography, civics, government structure, economics fundamentals, and historical analysis writing.",
    approach:
      "Instruction emphasizes historical cause-and-effect relationships together with evidence-based writing skills that prepare students for future honors and AP history coursework.",
    tailor:
      "Lessons are customized to align with each student's school curriculum and state learning standards.",
    assess:
      "Short-answer responses and historical essays scored for both factual accuracy and the strength of the student's argument.",
    },
];

export default function MiddleSchoolPage() {
  return (
    <main className="bg-white">
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
            Grades 6–8
          </p>

          <h1 className="mt-3 text-5xl font-extrabold text-slate-900 md:text-6xl">
            Middle School Tutoring
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-600">
            Middle school is a critical transition period where students move
            from foundational learning to deeper analysis and abstract thinking.
            Our tutoring helps students strengthen core academic skills, build
            confidence, and prepare for the increased expectations of high
            school coursework.
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

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Subjects We Support
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
              Personalized instruction designed to strengthen understanding,
              improve classroom performance, and prepare students for the
              challenges of high school.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {subjects.map((subject) => {
              const Icon = subject.icon;

              return (
                <div
                  key={subject.title}
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
                      {subject.title}
                    </h2>
                  </div>

                  <div className="grid gap-10 lg:grid-cols-2">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        Topics Covered
                      </h3>

                      <p className="mt-4 leading-8 text-slate-600">
                        {subject.topics}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        Our Approach
                      </h3>

                      <p className="mt-4 leading-8 text-slate-600">
                        {subject.approach}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        How We Tailor Instruction
                      </h3>

                      <p className="mt-4 leading-8 text-slate-600">
                        {subject.tailor}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        How We Measure Progress
                      </h3>

                      <p className="mt-4 leading-8 text-slate-600">
                        {subject.assess}
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
              Every tutoring plan is tailored to your student's academic goals,
              current coursework, and learning style. Whether your child needs
              long-term support or help preparing for an upcoming exam, we'll
              create a personalized plan that fits their needs.
            </p>

            <div className="mt-8 rounded-2xl bg-[#EEF5FF] p-8">
              <p className="text-3xl font-bold text-[#0D438B]">
                Starting at $25 / hour
              </p>

              <p className="mt-3 text-slate-600">
                Ask about sibling discounts and multi-session packages during
                your free consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-[#0D438B] px-8 py-16 text-center text-white">
            <h2 className="text-4xl font-bold">
              Ready to Help Your Student Succeed?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Schedule a free consultation to discuss your student's academic
              goals, identify areas for growth, and learn how personalized
              tutoring can build confidence and prepare them for high school
              success.
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