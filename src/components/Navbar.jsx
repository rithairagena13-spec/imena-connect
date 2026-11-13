
import { useState } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Explore", href: "#opportunities" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-[#D8D2C5]/60 bg-[#F3EDE2]/85 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide text-[#263D35]"
        >
          IMENA<span className="text-[#B89B5E]">.</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#46564A] transition hover:text-[#A58A4F]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#opportunities"
          className="hidden rounded-full bg-[#526B55] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#354F3C] md:inline-flex"
        >
          Discover Events
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg text-[#263D35] transition hover:bg-[#E9E2D4] focus:outline-none focus:ring-2 focus:ring-[#B89B5E] md:hidden"
        >
          <span className={`h-0.5 w-6 bg-current transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-current transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#D8D2C5]/60 bg-[#F3EDE2] px-6 py-5 shadow-md md:hidden"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-[#46564A] transition hover:text-[#A58A4F]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#opportunities"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-[#526B55] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#354F3C]"
            >
              Discover Events
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}