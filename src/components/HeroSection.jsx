import { useEffect, useState } from "react"

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=900",
    alt: "People connecting at a community gathering",
    label: "Community & Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900",
    alt: "Students learning together",
    label: "Learning & Education",
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
    alt: "People collaborating on a project",
    label: "Ideas & Innovation",
  },
]

export default function HeroSection() {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[720px] overflow-hidden bg-[#263D35] px-6 pb-20 pt-36 text-white lg:px-10"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="max-w-xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#D6B875]">
            Discover · Learn · Connect · Grow
          </p>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Your next
            <span className="block font-serif italic text-[#D6B875]">
              opportunity
            </span>
            starts here.
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-white/75 sm:text-lg">
            Discover workshops, cultural experiences, career events and
            inspiring activities happening across Rwanda. Find your
            interests, meet new people and grow through meaningful
            experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#opportunities"
              className="rounded-full bg-[#D6B875] px-8 py-4 text-sm font-semibold text-[#263D35] transition hover:bg-white"
            >
              Explore opportunities
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition hover:border-[#D6B875] hover:text-[#D6B875]"
            >
              Discover our story
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 text-sm text-white/60">
            <span className="h-px w-12 bg-[#D6B875]" />
            Connecting people with possibilities across Rwanda
          </div>
        </div>

        <div className="relative mx-auto h-[440px] w-full max-w-[520px]">
          <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border border-[#D6B875]/40" />

          {heroImages.map((image, index) => (
            <div
              key={image.src}
              className={`absolute inset-0 overflow-hidden rounded-[2rem] transition-all duration-1000 ${
                activeImage === index
                  ? "scale-100 opacity-100"
                  : "scale-105 opacity-0"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#172820]/80 via-transparent to-transparent" />

              <p className="absolute bottom-8 left-8 text-lg font-medium text-white">
                {image.label}
              </p>
            </div>
          ))}

          <div className="absolute -bottom-6 left-8 flex gap-2">
            {heroImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Show image ${index + 1}`}
                aria-pressed={activeImage === index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeImage === index
                    ? "w-10 bg-[#D6B875]"
                    : "w-3 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}