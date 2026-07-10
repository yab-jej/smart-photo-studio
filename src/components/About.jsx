const features = [
  'Professional Photographers',
  'Creative Editing',
  'High Quality Photos',
  'Customer Satisfaction',
]

function About() {
  return (
    <section id="about" className="px-4 py-20 scroll-mt-24 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-[#b8924f]/20 bg-[#0b0b0b] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
        <div className="overflow-hidden rounded-[1.5rem] border border-[#c9a96b]/20 bg-[#121212] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:scale-[1.01]">
          <img
            src="/hero/Capture.PNG333.PNG"
            alt="Professional photo studio team"
            className="h-full min-h-[320px] w-full rounded-[1.1rem] object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d9b56e]">
            ABOUT OUR STUDIO
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Creating Memories That Last Forever
          </h2>
          <p className="mt-5 text-base leading-8 text-stone-300 sm:text-lg">
            Smart Photo Studio provides professional photography services including weddings, birthdays, portraits, and events. We combine creativity, modern technology, and quality editing to capture unforgettable moments.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-[#c9a96b]/20 bg-[#111111] px-4 py-3 text-sm font-medium text-stone-200 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a96b] hover:bg-[#151515]"
              >
                {feature}
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex w-fit items-center rounded-full border border-[#c9a96b] bg-[#c9a96b] px-6 py-3 text-sm font-semibold text-[#090909] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e1bb72]"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
