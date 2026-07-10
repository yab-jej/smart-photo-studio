import { Link, useParams } from 'react-router-dom'

const categories = [
  {
    id: 'wedding',
    title: 'Wedding Photography',
    cover: '/wedding%20gallery/3.jpg',
    description: 'Elegant storytelling with cinematic lighting, refined styling, and emotional detail.',
  },
  {
    id: 'birthday',
    title: 'Birthday Photography',
    cover: '/BD%20Gallery/SPS_0358.JPG',
    description: 'Joyful, vibrant celebrations captured with warmth, color, and beautiful composition.',
  },
]

const collectionImages = {
  wedding: [
    '/wedding%20gallery/3.jpg',
    '/wedding%20gallery/8.jpg',
    '/wedding%20gallery/13.jpg',
    '/wedding%20gallery/14.jpg',
    '/wedding%20gallery/DSC01040.JPG',
    '/wedding%20gallery/DSC01045.JPG',
    '/wedding%20gallery/DSC01060.JPG',
  ],
  birthday: [
    '/BD%20Gallery/SPS_0358.JPG',
    '/BD%20Gallery/SPS_0420.JPG',
    '/BD%20Gallery/SPS_7569.JPG',
    '/BD%20Gallery/56555.jpg',
    '/BD%20Gallery/2332222.jpg',
    '/BD%20Gallery/335665555.jpg',
    '/BD%20Gallery/23234433334.jpg',
  ],
}

function Gallery() {
  const { category } = useParams()

  if (category === 'wedding' || category === 'birthday') {
    const images = collectionImages[category]
    const title = category === 'wedding' ? 'Wedding Photography' : 'Birthday Photography'

    return (
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d9b56e]">PORTFOLIO</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex w-fit items-center rounded-full border border-[#c9a96b] bg-[#c9a96b] px-6 py-3 text-sm font-semibold text-[#090909] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e1bb72]"
            >
              Back to Gallery
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {images.map((image, index) => (
              <div
                key={`${category}-${index}`}
                className="group overflow-hidden rounded-[1.5rem] border border-[#b8924f]/20 bg-[#0f0f0f] shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-2 hover:border-[#c9a96b]"
              >
                <img
                  src={image}
                  alt={`${title} showcase ${index + 1}`}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d9b56e]">GALLERY</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Curated Moments, Beautifully Presented
          </h2>
          <p className="mt-5 text-base leading-8 text-stone-300 sm:text-lg">
            Discover our signature wedding and birthday photography collections designed with luxury, emotion, and timeless detail.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {categories.map((categoryItem) => (
            <article
              key={categoryItem.id}
              className="group overflow-hidden rounded-[2rem] border border-[#b8924f]/20 bg-[#0d0d0d] shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-2 hover:border-[#c9a96b]"
            >
              <img
                src={categoryItem.cover}
                alt={categoryItem.title}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white">{categoryItem.title}</h3>
                <p className="mt-3 text-base leading-7 text-stone-300">{categoryItem.description}</p>
                <Link
                  to={`/gallery/${categoryItem.id}`}
                  className="mt-6 inline-flex items-center rounded-full border border-[#c9a96b] bg-[#c9a96b] px-6 py-3 text-sm font-semibold text-[#090909] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e1bb72]"
                >
                  View Gallery
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
