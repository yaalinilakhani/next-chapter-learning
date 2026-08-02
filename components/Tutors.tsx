import Image from "next/image";

const tutors = [
  {
    name: "Yaalini",
    title: "Co-Founder",
    subjects: "fill this in later",
    bio: "fill this in later",
    image: "/yl.JPG",
  },
  {
    name: "Jediael",
    title: "Co-Founder",
    subjects: "fill this in later",
    bio: "Hi, I'm Jediael Chintha — a current medical student in the University of Missouri-Kansas City's six-year BA/MD program, one of the most competitive combined-degree programs in the country. Getting here meant mastering exactly the skills I now help my students build: how to study smarter, think critically under pressure, and turn hard subjects into ones that actually make sense.",
    image: "/jediael.jpg",
  },
];

export default function Tutors() {
  return (
    <section id="about" className="bg-[#F7FBFF] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Meet Your Tutors
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Personalized support from dedicated tutors who are committed to
            helping every student reach their next chapter.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {tutors.map((tutor) => (
            <div
              key={tutor.name}
              className="rounded-3xl bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={tutor.image}
                  alt={tutor.name}
                  width={160}
                  height={160}
                  className="rounded-full border-4 border-[#5CA3FF] object-cover"
                />

                <h3 className="mt-6 text-3xl font-bold text-[#0D438B]">
                  {tutor.name}
                </h3>

                <p className="mt-2 font-semibold text-[#5CA3FF]">
                  {tutor.title}
                </p>

                <p className="mt-5 font-medium text-slate-700">
                  {tutor.subjects}
                </p>

                <p className="mt-5 max-w-md leading-7 text-slate-600">
                  {tutor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}