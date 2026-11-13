

import { useEffect, useState } from "react"

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600&auto=format&fit=crop",
    alt: "People connecting at a community gathering",
    label: "Community & Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&auto=format&fit=crop",
    alt: "Students learning together",
    label: "Learning & Education",
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&auto=format&fit=crop",
    alt: "People collaborating on a project",
    label: "Ideas & Innovation",
  },
]

export default function HeroSection() {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative isolate min-h-[720px] overflow-hidden bg-[#F3EBDD] px-6 pb-24 pt-36 sm:min-h-[760px] lg:px-10"
    >
      <div className="absolute inset-y-0 right-0 w-full overflow-hidden lg:w-[68%]">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ${
              activeImage === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover object-center brightness-105 contrast-105 saturate-110"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-[#F3EBDD]/95 via-[#F3EBDD]/20 to-transparent lg:hidden" />

        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#F3EBDD_0%,#F3EBDD_25%,rgba(243,235,221,0.88)_40%,rgba(243,235,221,0.28)_60%,transparent_78%)] lg:block" />

        <div className="absolute inset-0 hidden bg-gradient-to-t from-[#F3EBDD]/15 to-transparent lg:block" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl items-center">
        <div className="max-w-2xl py-12 lg:w-[58%] lg:py-16">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.3em] text-[#71836E]">
            Discover Rwanda · Discover Possibilities
          </p>

          <h1 className="font-serif text-5xl font-medium leading-[1.08] tracking-tight text-[#26352D] sm:text-6xl lg:text-7xl">
            Find Your Next
            <span className="block text-[#71836E]">
              Great Opportunity
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#626C61] sm:text-lg">
            Explore inspiring workshops, cultural experiences, career
            events and community activities. Discover new interests,
            meet inspiring people and create meaningful experiences
            across Rwanda.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#opportunities"
              className="rounded-full bg-[#526B55] px-9 py-4 text-sm font-semibold text-white shadow-lg shadow-[#526B55]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#354F3C]"
            >
              Explore opportunities
            </a>

            <a
              href="#about"
              className="rounded-full border border-[#AEB9A7] bg-white/60 px-8 py-4 text-sm font-semibold text-[#526B55] backdrop-blur-sm transition duration-300 hover:bg-white"
            >
              Discover our story
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {heroImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Show ${image.label}`}
                aria-pressed={activeImage === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeImage === index
                    ? "w-10 bg-[#71836E]"
                    : "w-3 bg-[#71836E]/30"
                }`}
              />
            ))}

            <span className="ml-2 text-xs font-medium text-[#687568]">
              {heroImages[activeImage].label}
            </span>
          </div>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 z-10 h-16 w-full sm:h-20"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 35 C180 75 280 90 470 55 C680 15 790 65 980 75 C1160 85 1310 35 1440 45 L1440 100 L0 100 Z"
          fill="#E3E8DC"
        />
      </svg>
    </section>
  )
}
