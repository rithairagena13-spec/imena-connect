
import { useEffect, useState } from "react"
import traditional from "/src/components/images/traditional.jpeg"
import communityWorkshops from "/src/components/images/communityWorkshops.jpeg"
import tourism from "/src/components/images/tourism.jpg"

const heroImages = [
  {
    src: traditional,
    alt: "Rwandan music and cultural traditions",
    label: "Music & Culture",
  },
  {
    src: communityWorkshops,
    alt: "Rwandan community members learning together",
    label: "Community Workshops",
  },
  {
    src: tourism,
    alt: "Traditional Rwandan weaving and craftsmanship",
    label: "Arts & Craftsmanship",
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
      className="relative isolate min-h-[760px] overflow-hidden bg-[#B69A62] px-3 pb-24 pt-32 lg:min-h-[780px] lg:px-10"
    >
      <div className="absolute inset-y-0 right-0 w-full lg:w-[100%]">
        {heroImages.map((image, index) => (
          <div
            key={image.label}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeImage === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover object-center brightness-110 contrast-110 saturate-125"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-[#F3EBDD] via-[#F3EBDD]/25 to-transparent lg:bg-gradient-to-r lg:from-[#F3EBDD] lg:via-[#F3EBDD]/90 lg:via-25% lg:to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#263D35]/10 via-transparent to-[#263D35]/10" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl items-center">
        <div className="max-w-2xl py-16 lg:w-[58%] lg:py-24">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[#B89B5E]" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#71836E]">
              Discover Rwanda · Discover Possibilities
            </p>
          </div>

          <h1 className="font-serif text-5xl font-medium leading-[1.08] tracking-tight text-[#263D35] sm:text-6xl lg:text-7xl">
            Discover More.
            <span className="mt-2 block text-[#71836E]">
              Experience Rwanda.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-[#626C61] sm:text-lg">
            From creative workshops and cultural celebrations to
            career events and community experiences, find meaningful
            opportunities to learn, connect and grow across Rwanda.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#opportunities"
              className="rounded-full bg-[#263D35] px-9 py-4 text-sm font-semibold text-white shadow-lg shadow-[#263D35]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#405B48]"
            >
              Explore opportunities
              <span className="ml-3">→</span>
            </a>

            <a
              href="#about"
              className="rounded-full border border-[#AEB9A7] bg-[#F3EBDD]/70 px-8 py-4 text-sm font-semibold text-[#263D35] backdrop-blur-md transition duration-300 hover:border-[#526B55] hover:bg-white/80"
            >
              Discover our story
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              {heroImages.map((image, index) => (
                <button
                  key={image.label}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show ${image.label}`}
                  aria-pressed={activeImage === index}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeImage === index
                      ? "w-12 bg-[#B89B5E]"
                      : "w-5 bg-[#71836E]/35 hover:bg-[#71836E]"
                  }`}
                />
              ))}
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#526B55]">
              {heroImages[activeImage].label}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-10 h-16 w-full bg-[#E3E8DC] [clip-path:ellipse(75%_65%_at_50%_100%)] sm:h-20" />
    </section>
  )
}
