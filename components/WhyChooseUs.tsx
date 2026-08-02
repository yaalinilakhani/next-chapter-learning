import {
  ClipboardCheck,
  FileSearch,
  SearchCheck,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    title: "Diagnostic Assessment",
    description:
      "Before the first real lesson, we assess where a student's understanding actually is — not just their grade, but which specific concepts are solid and which are shaky. This becomes the roadmap for the sessions that follow.",
    icon: ClipboardCheck,
  },
  {
    title: "Understanding over Speed",
    description:
      "Timed drills and shortcuts come after a student can explain why something works, not before. We use active recall and spaced review, not passive re-reading. Students are regularly asked to solve problems and explain concepts without looking at notes, and previously covered material is revisited on a schedule so it sticks long-term instead of fading after the test.",
    icon: FileSearch,
  },
  {
    title: "Tailored Approach",
    description:
      "We tailor materials to the student's actual class, using their textbook, syllabus, and teacher's own problem sets whenever possible, supplemented with our own practice sets when more repetition is needed.",
    icon: SearchCheck,
  },
  {
    title: "Track Your Progress",
    description:
      "We track progress with real data — practice quiz scores, error patterns, and concept checklists — so parents get concrete updates, not vague \"doing well!\" summaries.",
    icon: TrendingUp,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[#F7FBFF] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Families Choose Next Chapter Learning
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            We believe every student learns differently. Our personalized,
            encouraging approach helps students build confidence while achieving
            meaningful academic success.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#EEF5FF]">
                  <Icon className="h-7 w-7 text-[#0D438B]" />
                </div>

                <h3 className="text-2xl font-semibold text-[#0D438B]">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}