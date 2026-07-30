export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "idk add this later",
      quote:
        "idk add this later",
    },
    {
      id: 2,
      name: "idk add this later",
      quote:
        "idk add this later",
    },
    {
      id: 3,
      name: "idk add this later",
      quote:
        "idk add this later",
    },
  ];

  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold text-slate-900">
          What Students & Families Say
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-slate-600">
          Our goal is to help every student build confidence and achieve lasting
          success.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 p-8 shadow-sm"
            >
              <p className="italic text-slate-600">"{item.quote}"</p>

              <p className="mt-6 font-semibold text-[#0D438B]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}