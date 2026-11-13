
import { useEffect, useState } from "react"

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200",
    alt: "People connecting at a community gathering",
    label: "Community & Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200",
    alt: "Students learning together",
    label: "Learning & Education",
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    alt: "People collaborating on a project",
    label: "Ideas & Innovation",
  },
]

export default function HeroSection() {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[650px] overflow-hidden bg-[#F5F2E9] px-6 pb-24 pt-36 sm:min-h-[700px] lg:px-10"
    >
      <div className="absolute right-0 top-0 h-full w-full lg:w-[65%]">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeImage === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F2E9] via-[#F5F2E9]/80 to-transparent lg:via-[#F5F2E9]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F2E9]/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl items-center">
        <div className="max-w-xl py-12 lg:py-16">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#71836E]">
            Discover Rwanda · Discover Possibilities
          </p>

          <h1 className="font-serif text-5xl font-medium leading-[1.08] tracking-tight text-[#26352D] sm:text-6xl lg:text-7xl">
            Find Your Next
            <span className="block text-[#71836E]">
              Great Opportunity
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-[#687168] sm:text-lg">
            Explore inspiring workshops, cultural experiences, career
            events and community activities. Discover new interests,
            meet inspiring people and create meaningful experiences
            across Rwanda.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#opportunities"
              className="rounded-full bg-[#71836E] px-9 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#526B55]"
            >
              Explore opportunities
            </a>

            <a
              href="#about"
              className="rounded-full border border-[#B9C2B1] bg-white/60 px-8 py-3.5 text-sm font-semibold text-[#526B55] backdrop-blur-sm transition hover:bg-white"
            >
              Learn more
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3">
            {heroImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Show ${image.label}`}
                aria-pressed={activeImage === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeImage === index
                    ? "w-9 bg-[#71836E]"
                    : "w-3 bg-[#71836E]/30"
                }`}
              />
            ))}

            <span className="ml-2 text-xs text-[#788276]">
              {heroImages[activeImage].label}
            </span>
          </div>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 35 C180 75 280 90 470 55 C680 15 790 65 980 75 C1160 85 1310 35 1440 45 L1440 100 L0 100 Z"
          fill="#E9E9DD"
        />
      </svg>
    </section>
  )
}
