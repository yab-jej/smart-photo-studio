function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-4 py-20 sm:px-6 lg:px-8 scroll-mt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero/IMG_20260710_204359_053.jpg')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(0,0,0,0.82),_rgba(0,0,0,0.55))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,169,107,0.2),_transparent_55%)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="mb-6 rounded-full border border-[#c9a96b]/30 bg-[#0f0f0f]/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#e0b86f] shadow-[0_0_25px_rgba(201,169,107,0.12)] backdrop-blur-sm">
          Professional Photography Studio
        </div>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
          Capture Your <span className="text-[#d8b06a]">Best Moments</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-stone-200 sm:text-lg">
          Smart photo studio providing wedding, birthday, portrait and event photography services.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full border border-[#c9a96b] bg-[#c9a96b] px-7 py-3.5 text-sm font-semibold text-[#090909] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e1bb72]"
          >
            Book Your Session
          </a>
          <a
            href="#gallery"
            className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a96b] hover:text-[#f3d096]"
          >
            View Gallery
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
