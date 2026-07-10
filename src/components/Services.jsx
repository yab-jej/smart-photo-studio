const services = [
  {
    title: 'Wedding Photography',
    description: 'Capture your beautiful wedding moments with creative and cinematic photography.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7a2 2 0 0 1 2-2h2l1.2-1.8A1 1 0 0 1 10.2 2h3.6a1 1 0 0 1 .9.5L16 5h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
  },
  {
    title: 'Birthday Photography',
    description: 'Preserve your birthday celebrations with colorful and memorable photos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 4v3m8-3v3M5 8h14M7 20h10a2 2 0 0 0 2-2V8H5v10a2 2 0 0 0 2 2Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
      </svg>
    ),
  },
  {
    title: 'Portrait Photography',
    description: 'Professional portraits with perfect lighting and creative editing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <circle cx="12" cy="8" r="3.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 19c1.7-3 3.8-4.5 7-4.5s5.3 1.5 7 4.5" />
      </svg>
    ),
  },
  {
    title: 'Event Photography',
    description: 'High-quality coverage for events, ceremonies, and special occasions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v4M16 3v4M4 10h16" />
      </svg>
    ),
  },
]

function Services() {
  return (
    <section id="services" className="px-4 py-20 scroll-mt-24 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d9b56e]">
            OUR SERVICES
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Professional Photography For Every Special Moment
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-[1.5rem] border border-[#b8924f]/20 bg-[#0d0d0d] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-[#c9a96b]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#121212] text-[#d9b56e] shadow-[inset_0_0_0_1px_rgba(201,169,107,0.16)] transition-all duration-300 group-hover:bg-[#171717] group-hover:text-[#f3d096]">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-300">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
