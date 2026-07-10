const packages = [
  {
    name: 'Basic Package',
    price: '$1000',
    accent: false,
    popular: false,
    features: ['1 Hour Photography Session', '20 Edited Photos', 'Digital Photo Delivery', 'Basic Editing'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7a2 2 0 0 1 2-2h2l1.2-1.8A1 1 0 0 1 10.2 2h3.6a1 1 0 0 1 .9.5L16 5h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
  },
  {
    name: 'Premium Package',
    price: '$2500',
    accent: true,
    popular: true,
    features: ['3 Hour Photography Session', '50 Edited Photos', 'Professional Retouching', 'Photo Album', 'Priority Booking'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.3 4.7 5.2.7-3.8 3.7.9 5.2-4.6-2.4-4.6 2.4.9-5.2-3.8-3.7 5.2-.7L12 3Z" />
      </svg>
    ),
  },
  {
    name: 'Wedding Package',
    price: '$5000',
    accent: false,
    popular: false,
    features: ['Full Day Wedding Coverage', 'Unlimited Photos', 'Wedding Video', 'Premium Photo Album', 'Professional Editing'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M7 4h10M6 8v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
      </svg>
    ),
  },
]

function Packages() {
  return (
    <section id="packages" className="px-4 py-20 scroll-mt-24 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d9b56e]">OUR PACKAGES</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Choose The Perfect Photography Experience
          </h1>
          <p className="mt-5 text-base leading-8 text-stone-300 sm:text-lg">
            Flexible photography packages designed for weddings, birthdays, portraits, and special events.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className={`relative overflow-hidden rounded-[1.8rem] border p-8 shadow-[0_25px_80px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] ${item.accent ? 'border-[#c9a96b] bg-[linear-gradient(135deg,_#151515,_#0d0d0d)]' : 'border-[#b8924f]/20 bg-[#101010]'}`}
            >
              {item.popular && (
                <div className="absolute right-5 top-5 rounded-full border border-[#c9a96b] bg-[#c9a96b] px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#090909]">
                  Most Popular
                </div>
              )}

              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.accent ? 'bg-[#1b1b1b] text-[#f3d096]' : 'bg-[#171717] text-[#d9b56e]'}`}>
                {item.icon}
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-white">{item.name}</h2>
              <p className="mt-4 text-sm leading-7 text-stone-300">
                {item.features.slice(0, 2).join(' • ')}
              </p>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-semibold text-white">{item.price}</span>
                <span className="pb-1 text-sm uppercase tracking-[0.25em] text-stone-400">/ package</span>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-stone-300">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#c9a96b]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 ${item.accent ? 'border-[#c9a96b] bg-[#c9a96b] text-[#090909] hover:bg-[#e1bb72]' : 'border-[#c9a96b] text-[#f3d096] hover:bg-[#1a1a1a]'}`}
              >
                Book Now
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
