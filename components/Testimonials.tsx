"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya M., Parent of middle school student",
    quote:
      "My daughter used to dread homework time — now she actually asks to review with her tutor before I even bring it up. What really stood out to us was how much her confidence changed, not just her grades. She used to shut down the second something felt hard, and now she's willing to push through and ask questions instead of giving up. As a parent, that shift matters just as much to me as the report card.",
  },
  {
    id: 2,
    name: "Marcus T., High school student",
    quote:
      "Before I started with Next Chapter Learning, I was barely scraping by and honestly just going through the motions in most of my classes. Working with my tutor changed the way I actually study — not just cramming before a test, but understanding the material well enough that I don't panic when I see a hard question. It's a completely different feeling walking into an exam now, and that confidence has carried over into how I approach school in general.",
  },
  {
    id: 3,
    name: "Aditya K., Parent of high school student",
    quote:
      "We've worked with tutors before, but what stood out about Next Chapter Learning was how personalized it actually felt. It never seemed like a generic, one-size-fits-all program — our son's tutor took real time to figure out how he learns best and adjusted their approach around that instead of expecting him to adjust to them. We've noticed him being more independent with his schoolwork too, not just more prepared for tests.",
  },
  {
    id: 4,
    name: "Alicia C., College student",
    quote:
      "Starting college, I felt completely overwhelmed trying to juggle harder classes and figure out how to actually study at this level. Next Chapter Learning helped me get organized, build a real routine, and stop feeling like I was constantly behind. More than anything, they helped me believe I could actually hit the goals I'd set for myself instead of just hoping things would work out. I'm in a completely different place academically than I was a year ago, and I don't think I'd have gotten here on my own.",
  },
  {
    id: 5,
    name: "Grace O., Parent of an elementary school student",
    quote:
      "My son has always needed a little extra support, and we were nervous about finding the right fit. What we found with Next Chapter Learning was a team that took the time to really understand him — not just as a student, but as a person — instead of rushing through material. For the first time, I felt like he was being truly seen and supported, not just tutored. That made all the difference in how he responds to learning now.",
  },
  {
    id: 6,
    name: "Jordan R., High school student",
    quote:
      "I was struggling in almost every single subject and honestly felt like giving up more than once. What made the biggest difference wasn't just the academic help — it was that my tutor never made me feel behind or judged for not understanding something right away. They met me exactly where I was and helped me build back up from there, one step at a time. If your student is struggling with school in any way, I'd recommend Next Chapter Learning to anyone. Having that encouraging, patient hand made all the difference for me, and I genuinely don't think I'd be where I am now without it.",
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