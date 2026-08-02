import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  PenTool,
  Dna,
  FlaskConical,
  Atom,
  Laptop,
  Calculator,
} from "lucide-react";

const subjects = [
  {
    title: "English",
    icon: BookOpen,
    topics:
      "Literary analysis across genres, rhetorical analysis, argumentative and analytical essay writing, research papers with proper citation, vocabulary, and standardized-test-style reading and writing skills.",
    approach:
      "We treat essay writing as a skill built in layers: thesis development, evidence selection, analysis, structure and flow, then polish and mechanics. Rather than simply proofreading finished essays, we teach the thinking process behind effective writing so students can transfer those skills to future assignments.",
    tailor:
      "For students focused on a specific English course, instruction aligns with assigned novels and essay prompts. Students building general writing skills work with a variety of engaging texts selected to strengthen analytical reading and writing.",
    assess:
      "Essays are scored using rubrics modeled after classroom and AP standards, with progress tracked in thesis development, evidence integration, analytical depth, organization, and mechanics.",
  },
  {
    title: "Biology (Regular & AP)",
    icon: Dna,
    topics:
      "Cell biology, biochemistry, genetics, heredity, evolution, ecology, anatomy and physiology, plus the complete AP Biology curriculum including experimental design and free-response practice.",
    approach:
      "Biology concepts are connected through layered concept maps so students understand relationships between topics rather than memorizing isolated facts. This prepares them for higher-level synthesis questions on exams.",
    tailor:
      "For AP Biology students, instruction emphasizes data analysis and free-response practice while reinforcing the conceptual understanding needed for College Board exams.",
    assess:
      "Students complete unit assessments modeled after classroom exams, AP-style free-response questions, and regular concept-recall activities.",
  },
  {
    title: "Chemistry (Regular, Organic & AP)",
    icon: FlaskConical,
    topics:
      "Atomic structure, periodicity, bonding, stoichiometry, thermodynamics, equilibrium, acids and bases, kinetics, plus Organic Chemistry topics including nomenclature, reaction mechanisms, stereochemistry, and synthesis.",
    approach:
      "We focus on mechanism-based understanding instead of memorization. Students learn why reactions occur and how to reason through unfamiliar problems rather than relying on memorized examples.",
    tailor:
      "Instruction adjusts to each student's comfort with chemistry calculations. Organic Chemistry students receive additional support recognizing reaction patterns and mechanisms.",
    assess:
      "Progress is measured using exam-style problem sets, mechanism drawing practice, cumulative review, and detailed correction of recurring mistakes.",
  },
  {
    title: "Physics",
    icon: Atom,
    topics:
      "Kinematics, Newton's Laws, energy, momentum, circular motion, gravitation, waves, electricity and magnetism, and introductory modern physics depending on course level.",
    approach:
      "Students first develop a conceptual understanding of why formulas work before applying them to increasingly challenging problems. Heavy emphasis is placed on diagrams and problem setup.",
    tailor:
      "AP Physics students complete additional free-response and multi-step problem solving while regular physics students focus more heavily on algebra-based conceptual foundations.",
    assess:
      "Progress is tracked through analysis of conceptual errors, setup mistakes, calculation errors, and timed practice before major exams.",
  },
  {
    title: "Computer Science",
    icon: Laptop,
    topics:
      "Programming fundamentals, data structures, algorithms, Java for AP Computer Science A, Python for introductory courses, and AP Computer Science Principles concepts including the Create Performance Task.",
    approach:
      "Students learn to think like programmers by breaking problems into smaller steps, writing pseudocode, implementing solutions, and debugging effectively instead of memorizing syntax.",
    tailor:
      "Instruction follows the student's current programming language and coursework while adapting pacing to previous coding experience.",
    assess:
      "Students practice live coding, debugging, AP-style free-response questions, and multiple-choice practice to strengthen programming confidence.",
  },
  {
    title: "Mathematics",
    icon: Calculator,
    topics:
      "Geometry, Algebra I & II, Trigonometry, Calculus (AB & BC), Statistics, Linear Algebra, and additional advanced mathematics courses.",
    approach:
      "Across every mathematics course, we focus on conceptual understanding before repetitive practice. Students first learn why a method works, then practice the skill independently before solving mixed-review problems that reflect real classroom exams.",
    tailor:
      "Lessons use the student's own textbook, homework, and teacher expectations whenever possible while balancing conceptual explanations with targeted practice based on individual needs.",
    assess:
      "Regular quizzes, cumulative review assignments, and error-pattern tracking allow students and parents to clearly monitor long-term academic growth.",
    },
];

export default function HighSchoolPage() {
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
            Grades 9–12
          </p>

          <h1 className="mt-3 text-5xl font-extrabold text-slate-900 md:text-6xl">
            High School Tutoring
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-600">
            High school coursework demands deeper critical thinking, stronger
            study habits, and greater independence. Our tutoring equips
            students with the knowledge, confidence, and problem-solving skills
            needed to excel in challenging classes, and
            achieve their long-term academic goals.
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
              Personalized instruction designed to help students master rigorous
              coursework, prepare for college-level expectations, and build
              confidence across every subject.
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
              Every tutoring plan is customized to the student's coursework,
              academic goals, and long-term aspirations. Whether preparing for
              challenging classes, AP courses, or advanced
              STEM coursework, we'll build a plan that provides the support
              needed for success.
            </p>

            <div className="mt-8 rounded-2xl bg-[#EEF5FF] p-8">
              <p className="text-3xl font-bold text-[#0D438B]">
                Starting at $30 / hour
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
              Ready to Reach Your Academic Goals?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Whether you're preparing for AP exams, strengthening your
              coursework, or just general help our personalized tutoring provides the guidance and confidence
              needed to succeed.
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