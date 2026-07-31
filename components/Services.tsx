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
    short:
      "Personalized tutoring across all core subjects.",
    details:
      "One-on-one tutoring designed around each student's learning style and academic goals. Available for elementary, middle, and high school students.",
    features: [
      "Math",
      "Science",
      "English",
      "Homework Help",
      "Study Skills",
    ],
    price: "Starting at $__/hour",
    icon: BookOpen,
  },
  {
    title: "ACT Test Prep",
    short:
      "Raise your ACT score with expert instruction.",
    details:
      "Comprehensive ACT preparation focused on both content mastery and proven testing strategies.",
    features: [
      "English",
      "Math",
      "Reading",
      "Science",
      "Practice Exams",
    ],
    price: "Starting at $__/hour",
    icon: FileText,
  },
  {
    title: "SAT Math Prep",
    short:
      "Master every SAT Math topic with confidence.",
    details:
      "Personalized SAT Math tutoring covering every section of the exam using official-style questions.",
    features: [
      "Algebra",
      "Geometry",
      "Advanced Math",
      "Problem Solving",
      "Practice Tests",
    ],
    price: "Starting at $__/hour",
    icon: Calculator,
  },
  {
    title: "Essay Review",
    short:
      "Professional feedback before you submit.",
    details:
      "Detailed revisions to strengthen grammar, organization, clarity, and overall impact.",
    features: [
      "Grammar",
      "Structure",
      "Clarity",
      "Feedback",
      "Suggestions",
    ],
    price: "Starting at $__/essay",
    icon: PenTool,
  },
  {
    title: "College Applications",
    short:
      "Guidance through every step of the process.",
    details:
      "Support with applications, essays, extracurricular descriptions, and admissions strategy.",
    features: [
      "Common App",
      "Essay Planning",
      "Activity List",
      "Application Review",
      "College Strategy",
    ],
    price: "Starting at $__/hour",
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
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#5CA3FF] hover:shadow-2xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#EEF5FF] transition group-hover:bg-[#0D438B]">
                  <Icon
                    className="h-7 w-7 text-[#0D438B] transition group-hover:text-white"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#0D438B]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.short}
                </p>

                {/* Hidden content */}
                <div className="grid max-h-0 grid-rows-[0fr] overflow-hidden transition-all duration-500 group-hover:max-h-[500px] group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">

                    <p className="mt-6 text-slate-600">
                      {service.details}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-slate-700"
                        >
                          <span className="text-[#5CA3FF]">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-6 text-lg font-bold text-[#0D438B]">
                      {service.price}
                    </p>

                    <a
                      href="https://calendly.com/support-nextchapterlearning/free-consultation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block rounded-xl bg-[#0D438B] px-5 py-3 font-semibold text-white transition hover:bg-[#08356D]"
                    >
                      Book Consultation
                    </a>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}