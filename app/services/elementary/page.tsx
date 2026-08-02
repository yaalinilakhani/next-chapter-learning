import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Calculator,
  FlaskConical,
  Globe,
  Palette,
} from "lucide-react";

const subjects = [
  {
    title: "English / Reading",
    icon: BookOpen,
    topics:
      "Phonics and decoding, sight word fluency, reading comprehension (main idea, sequencing, inference), vocabulary building, basic grammar (parts of speech, sentence structure), and early writing (sentences → paragraphs, spelling, punctuation).",
    approach:
      "At this age, the priority is building a genuine love of reading alongside skill. We use leveled readers matched to each child's actual reading level (not just their grade level), and we pair every reading passage with discussion questions that build comprehension skills like predicting, summarizing, and connecting ideas to the child's own experience. For struggling readers, we go back to phonemic awareness and decoding fundamentals rather than pushing forward and hoping gaps close on their own.",
    tailor:
      "Some children need help with decoding (sounding out words), others read fluently but struggle to understand what they've read—we diagnose which it is and adjust accordingly. We also adjust pacing and use higher-interest material based on the child's interests to keep engagement high.",
    assess:
      "Running reading records (tracking accuracy and fluency), informal comprehension checks after each passage, and periodic writing samples to track grammar and structural growth over time.",
  },
  {
    title: "Math",
    icon: Calculator,
    topics:
      "Number sense, addition/subtraction fluency, multiplication and division, fractions, decimals, basic geometry (shapes, measurement), word problems, and early data/graphing skills.",
    approach:
      "We emphasize number sense—understanding what numbers mean and how they relate—before drilling memorization. Students build conceptual understanding using manipulatives, visual models, and real-world word problems before moving into fluency practice.",
    tailor:
      "We identify the root cause of difficulties. For example, a student struggling with fractions is often struggling with division or understanding parts of a whole. We fix the underlying concept rather than only the symptom.",
    assess:
      "Short mixed-review problem sets every session plus 'teach it back' explanations where students explain concepts in their own words.",
  },
  {
    title: "Science",
    icon: FlaskConical,
    topics:
      "Life science (plants, animals, ecosystems, human body basics), physical science (states of matter, simple machines, forces), earth science (weather, seasons, space basics), and the scientific method.",
    approach:
      "Hands-on and observation-based wherever possible using experiments, diagrams, and 'predict, observe, explain' activities that mirror real scientific thinking instead of simple memorization.",
    tailor:
      "We connect concepts to everyday experiences like melting ice, changing weather, and plants growing toward sunlight so abstract ideas become meaningful.",
    assess:
      "Verbal explanation checks, simple project-based demonstrations, and review quizzes aligned with classroom instruction.",
  },
  {
    title: "Social Studies",
    icon: Globe,
    topics:
      "Community and geography basics, map skills, U.S. history introduction, civics basics, and cultural studies.",
    approach:
      "Story-driven learning teaches history and civics as narratives with clear cause-and-effect relationships instead of isolated dates and facts.",
    tailor:
      "Lessons are connected to the student's own community and experiences whenever possible to make civic concepts meaningful.",
    assess:
      "Discussion-based understanding checks along with projects such as timelines and map activities.",
  },
  {
    title: "Arts",
    icon: Palette,
    topics:
      "Elements of art and design, drawing fundamentals, color theory, introductory art history, and creative expression projects.",
    approach:
      "Students develop technical artistic skills while maintaining creative freedom. We teach composition, shading, color, and technique without limiting creativity.",
    tailor:
      "Sessions are personalized around each student's preferred artistic medium and interests.",
    assess:
      "Portfolio-based assessment that measures artistic growth and technique across multiple projects over time.",
  },
];

export default function ElementaryPage() {
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
            Grades K–5
          </p>

          <h1 className="mt-3 text-5xl font-extrabold text-slate-900 md:text-6xl">
            Elementary School Tutoring
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-600">
            Our elementary tutoring program is designed to help students build
            confidence, strengthen foundational academic skills, and develop a
            genuine love of learning. Every lesson is personalized to each
            student's learning style, strengths, and goals so they can succeed
            both inside and outside the classroom.
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

      {/* Subjects */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Subjects We Support
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
              Every tutoring plan is customized to meet your child's needs while
              building lasting confidence and academic success.
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
              Every tutoring plan is personalized to your child's academic
              needs and goals. Whether your student needs ongoing support,
              homework assistance, or targeted help in a specific subject,
              we'll create a plan that's right for them.
            </p>

            <div className="mt-8 rounded-2xl bg-[#EEF5FF] p-8">
              <p className="text-3xl font-bold text-[#0D438B]">
                Starting at $20 / hour
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
              Ready to Help Your Child Thrive?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Schedule a free consultation to discuss your child's academic
              goals, current challenges, and how Next Chapter Learning can
              provide personalized support to help them succeed.
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