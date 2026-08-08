"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya M., Parent of middle school student",
    quote:
      "My daughter used to dread doing homework, and now she actually asks to review with her tutor. Her grades have improved, but honestly, the biggest change has been her confidence. She’s much more willing to ask questions and keep trying when something is difficult.",
  },
  {
    id: 2,
    name: "Marcus T., High school student",
    quote:
      "Before Next Chapter Learning, I was mostly just trying to get through my classes. My tutor helped me figure out how to actually study instead of cramming the night before a test. I feel way more prepared now, and I don’t get nearly as nervous when I see a hard question.",
  },
  {
    id: 3,
    name: "Aditya K., Parent of high school student",
    quote:
      "We’ve tried tutoring before, but this felt really different. Our son’s tutor took the time to figure out how he learns instead of just following the same approach every time. We’ve also noticed that he’s become a lot more independent with his schoolwork.",
  },
  {
    id: 4,
    name: "Alicia C., College student",
    quote:
      "When I started college, I felt completely overwhelmed and had no idea how to keep up with everything. Next Chapter Learning helped me get organized and build a routine that actually works for me. I feel so much more confident in myself academically now.",
  },
  {
    id: 5,
    name: "Grace O., Parent of elementary school student",
    quote:
      "My son has always needed a little extra help, so finding the right tutor was really important to us. What I loved about Next Chapter Learning was how much they took the time to understand him. He feels comfortable asking questions now, and we’ve seen such a positive change in how he approaches school.",
  },
  {
    id: 6,
    name: "Jordan R., High school student",
    quote:
      "I was struggling in a lot of my classes and honestly felt like giving up sometimes. My tutor was really patient and never made me feel bad for not understanding something. They met me where I was and helped me work my way up. Having someone that encouraging made a huge difference for me.",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold text-slate-900">
          What Students & Families Say
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
          Our goal is to help every student build confidence and achieve lasting
          academic success.
        </p>

        <div className="relative mt-14">
          {/* Previous Button */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute -left-5 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition hover:bg-[#EEF5FF] md:flex"
          >
            <ChevronLeft className="h-6 w-6 text-[#0D438B]" />
          </button>

          {/* Next Button */}
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition hover:bg-[#EEF5FF] md:flex"
          >
            <ChevronRight className="h-6 w-6 text-[#0D438B]" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full px-3 md:min-w-1/2 lg:min-w-1/3"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#5CA3FF] hover:shadow-xl">
                    <p className="flex-1 italic leading-7 text-slate-600">
                      "{testimonial.quote}"
                    </p>

                    <div className="mt-8 border-t border-slate-100 pt-5">
                      <p className="font-bold text-[#0D438B]">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="mt-8 flex justify-center gap-4 md:hidden">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="rounded-full border border-slate-200 p-3 transition hover:bg-[#EEF5FF]"
            >
              <ChevronLeft className="h-5 w-5 text-[#0D438B]" />
            </button>

            <button
              onClick={() => emblaApi?.scrollNext()}
              className="rounded-full border border-slate-200 p-3 transition hover:bg-[#EEF5FF]"
            >
              <ChevronRight className="h-5 w-5 text-[#0D438B]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}