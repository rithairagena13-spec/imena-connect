
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
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-[#B69A62]/20 bg-[#F8F6F0]/25 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="text-2xl font-bold tracking-wide text-[#263D35]">
          IMENA<span className="text-[#B69A62]">.</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-[#263D35] transition hover:text-[#B69A62]">
              {link.label}
            </a>
          ))}
        </div>

        <a href="#opportunities" className="hidden rounded-full bg-[#263D35] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#B69A62] md:inline-flex">
          Discover Events
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="text-[#263D35] md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-[#B69A62]/20 bg-[#F8F6F0]/90 px-6 py-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="text-sm font-medium text-[#263D35] hover:text-[#B69A62]">
                {link.label}
              </a>
            ))}
            <a href="#opportunities" onClick={() => setMenuOpen(false)} className="rounded-full bg-[#263D35] px-6 py-3 text-center text-sm font-semibold text-white">
              Discover Events
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
