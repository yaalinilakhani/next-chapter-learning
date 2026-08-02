import {
  BookOpen,
  School,
  GraduationCap,
  FileText,
  Compass,
} from "lucide-react";

const services = [
  {
    title: "Elementary School Tutoring",
    grades: "Grades K–5",
    description:
      "Build strong academic foundations through personalized instruction that encourages confidence, curiosity, and a love of learning.",
    subjects: [
      "Reading & English",
      "Math",
      "Science",
      "Social Studies",
      "Arts",
    ],
    price: "Starting at $__/hour",
    icon: BookOpen,
    href: "/services/elementary",
  },
  {
    title: "Middle School Tutoring",
    grades: "Grades 6–8",
    description:
      "Strengthen core academic skills while preparing students for the increased rigor of high school coursework.",
    subjects: [
      "English",
      "Math",
      "Science",
      "Social Studies",
    ],
    price: "Starting at $__/hour",
    icon: School,
    href: "/services/middle-school",
  },
  {
    title: "High School Tutoring",
    grades: "Grades 9–12",
    description:
      "Expert tutoring across advanced coursework, AP classes, STEM subjects, writing, and college-level preparation.",
    subjects: [
      "English",
      "Math",
      "Science",
      "Computer Science",
      "Essay Support",
    ],
    price: "Starting at $__/hour",
    icon: GraduationCap,
    href: "/services/high-school",
  },
  {
    title: "Test Preparation",
    grades: "ACT • SAT • AP Exams",
    description:
      "Targeted preparation designed around each student's strengths, weaknesses, and testing goals.",
    subjects: [
      "ACT",
      "SAT Math",
      "AP Biology",
      "AP Chemistry",
      "AP Calculus",
      "AP Computer Science",
      "AP Physics",
    ],
    price: "Customized Programs",
    icon: FileText,
    href: "/services/test-prep",
  },
  {
    title: "College Counseling",
    grades: "Applications & Planning",
    description:
      "Comprehensive guidance throughout the college admissions process, from school selection to final submission.",
    subjects: [
      "College List",
      "Applications",
      "Essays",
      "Interview Prep",
      "Application Timeline",
    ],
    icon: Compass,
    href: "/services/college-counseling",
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

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Whether your student is building foundational skills, preparing for
            college admissions, or striving for a higher ACT or AP score, we
            provide personalized instruction designed around their individual
            goals.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#5CA3FF] hover:shadow-2xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#EEF5FF]">
                  <Icon
                    className="h-7 w-7 text-[#0D438B]"
                    strokeWidth={2}
                  />
                </div>

                <span className="text-sm font-semibold uppercase tracking-wide text-[#5CA3FF]">
                  {service.grades}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-[#0D438B]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-6">
                  <h4 className="font-semibold text-slate-900">
                    Subjects Include
                  </h4>

                  <ul className="mt-3 space-y-2">
                    {service.subjects.map((subject) => (
                      <li
                        key={subject}
                        className="flex items-center gap-2 text-slate-700"
                      >
                        <span className="text-[#5CA3FF]">✓</span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>


                <div className="mt-auto flex flex-col gap-3 pt-8">
                  <a
                    href={service.href}
                    className="rounded-xl border-2 border-[#0D438B] px-5 py-3 text-center font-semibold text-[#0D438B] transition hover:bg-[#EEF5FF]"
                  >
                    Learn More
                  </a>

                  <a
                    href="https://calendly.com/support-nextchapterlearning/free-consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-[#0D438B] px-5 py-3 text-center font-semibold text-white transition hover:bg-[#08356D]"
                  >
                    Book Consultation
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}