"use client";

import { useState } from "react";
import {
  BookOpen,
  FileText,
 Calculator,
  PenTool,
  GraduationCap,
  ChevronDown,
} from "lucide-react";

const services = [
  {
    title: "K–12 Tutoring",
    short: "Personalized tutoring across all core subjects.",
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
    short: "Raise your ACT score with expert instruction.",
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
    short: "Master every SAT Math topic with confidence.",
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
    short: "Professional feedback before you submit.",
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
    short: "Guidance through every step of the process.",
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
  const [openCard, setOpenCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
          {services.map((service, index) => {
            const Icon = service.icon;

            const isOpen = openCard === index;
            const isHovered = hoveredCard === index;
            const expanded = isOpen || isHovered;

            return (
              <div
                key={service.title}
                onClick={() =>
                  setOpenCard(isOpen ? null : index)
                }
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#5CA3FF] hover:shadow-2xl"
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 ${
                      expanded
                        ? "bg-[#0D438B]"
                        : "bg-[#EEF5FF]"
                    }`}
                  >
                    <Icon
                      className={`h-7 w-7 transition-all duration-300 ${
                        expanded
                          ? "text-white"
                          : "text-[#0D438B]"
                      }`}
                      strokeWidth={2}
                    />
                  </div>

                  <ChevronDown
                    className={`h-7 w-7 transition-all duration-300 ${
                      expanded
                        ? "rotate-180 text-[#0D438B]"
                        : "text-[#5CA3FF]"
                    }`}
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#0D438B]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.short}
                </p>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expanded
                      ? "mt-6 max-h-[600px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-slate-600">
                    {service.details}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-slate-700"
                      >
                        <span className="font-bold text-[#5CA3FF]">
                          ✓
                        </span>
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
                    onClick={(e) => e.stopPropagation()}
                    className="mt-6 inline-block rounded-xl bg-[#0D438B] px-5 py-3 font-semibold text-white transition hover:bg-[#08356D]"
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