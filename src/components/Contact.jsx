const contactDetails = [
  { label: 'Location', value: 'Ethiopia, Gendewuha Town' },
  { label: 'Phone', value: '+251 962 479 442' },
  { label: 'Email', value: 'zekariyas@gmail.com' },
  { label: 'Social', value: '@zak' },
]

function Contact() {
  return (
    <section id="contact" className="px-4 py-20 scroll-mt-24 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-[#b8924f]/20 bg-[#0b0b0b] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
        <div className="rounded-[1.5rem] border border-[#c9a96b]/20 bg-[#111111] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d9b56e]">
            CONTACT US
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Let&apos;s Capture Your Story
          </h2>
          <p className="mt-5 text-base leading-8 text-stone-300">
            Contact Smart Photo Studio and book your next unforgettable photography session.
          </p>

          <div className="mt-8 space-y-4">
            {contactDetails.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[#c9a96b]/20 bg-[#161616] px-4 py-4 transition-all duration-300 hover:border-[#c9a96b] hover:bg-[#181818]">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d9b56e]">{item.label}</p>
                <p className="mt-1 text-sm text-stone-200">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-[#c9a96b]/20 bg-[#111111] p-8">
          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-stone-200">
                <span className="mb-2 block">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-stone-700 bg-[#0f0f0f] px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-[#c9a96b] focus:ring-2 focus:ring-[#c9a96b]/20"
                />
              </label>
              <label className="block text-sm font-medium text-stone-200">
                <span className="mb-2 block">Email</span>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-2xl border border-stone-700 bg-[#0f0f0f] px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-[#c9a96b] focus:ring-2 focus:ring-[#c9a96b]/20"
                />
              </label>
            </div>

            <label className="block text-sm font-medium text-stone-200">
              <span className="mb-2 block">Phone</span>
              <input
                type="tel"
                placeholder="Your phone"
                className="w-full rounded-2xl border border-stone-700 bg-[#0f0f0f] px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-[#c9a96b] focus:ring-2 focus:ring-[#c9a96b]/20"
              />
            </label>

            <label className="block text-sm font-medium text-stone-200">
              <span className="mb-2 block">Message</span>
              <textarea
                rows="5"
                placeholder="Tell us about your session"
                className="w-full rounded-2xl border border-stone-700 bg-[#0f0f0f] px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-[#c9a96b] focus:ring-2 focus:ring-[#c9a96b]/20"
              />
            </label>

            <button
              type="submit"
              className="rounded-full border border-[#c9a96b] bg-[#c9a96b] px-6 py-3 text-sm font-semibold text-[#090909] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e1bb72]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
