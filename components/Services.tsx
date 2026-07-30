import {
  BookOpen,
  FileText,
  Calculator,
  PenTool,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    title: "K–12 Tutoring",
    description:
      "Personalized tutoring across all core subjects to help students build confidence and improve their grades.",
    icon: BookOpen,
  },
  {
    title: "ACT Test Prep",
    description:
      "Targeted instruction, proven strategies, and practice exams designed to maximize ACT scores.",
    icon: FileText,
  },
  {
    title: "SAT Math Prep",
    description:
      "Master algebra, geometry, statistics, and advanced math with personalized SAT preparation.",
    icon: Calculator,
  },
  {
    title: "Essay Review",
    description:
      "Receive detailed feedback on structure, grammar, clarity, and overall impact before submission.",
    icon: PenTool,
  },
  {
    title: "College Applications",
    description:
      "Guidance through applications, personal statements, extracurriculars, and admissions strategy.",
    icon: GraduationCap,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Our Services
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Personalized academic support designed around each student's goals,
            learning style, and future success.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-[#5CA3FF] hover:shadow-2xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#EEF5FF]">
                  <Icon
                    className="h-7 w-7 text-[#0D438B]"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#0D438B]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}