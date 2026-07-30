import {
  Users,
  CalendarClock,
  Target,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    title: "Personalized Learning",
    description:
      "Every lesson is tailored to the student's goals, strengths, and learning style.",
    icon: Users,
  },
  {
    title: "Flexible Scheduling",
    description:
      "Online sessions that fit around school, extracurriculars, and busy family schedules.",
    icon: CalendarClock,
  },
  {
    title: "Focused Goal Setting",
    description:
      "Whether it's improving grades, preparing for exams, or building confidence, every session has a clear purpose.",
    icon: Target,
  },
  {
    title: "Track Your Progress",
    description:
      "We monitor growth over time so students and families can see measurable improvement.",
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