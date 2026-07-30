import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-[#F7FBFF]">
      <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <Image
          src="/color_logo.svg"
          alt="Next Chapter Learning Logo"
          width={200}
          height={200}
          className="mb-10"
          priority
        />

        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">
          Helping Students Reach Their{" "}
          <span className="text-[#0D438B]">Next Chapter</span>
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
          Personalized online tutoring for K–12 students, ACT Prep, SAT Math,
          Essay Review, and College Application Guidance.
        </p>

        <div className="mt-20 flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500">
          <span>K–12 Tutoring</span>
          <span>•</span>
          <span>ACT Prep</span>
          <span>•</span>
          <span>SAT Math</span>
          <span>•</span>
          <span>Essay Review</span>
          <span>•</span>
          <span>College Applications</span>
        </div>
      </div>
    </section>
  );
}