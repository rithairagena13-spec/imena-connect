export default function Navbar() {
  return (
    <nav className="absolute left-0 top-0 z-50 w-full border-b border-white/20 bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#" className="text-2xl font-bold tracking-wide text-white">
          IMENA<span className="text-[#D6B875]">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm font-medium text-white transition hover:text-[#D6B875]">
            Home
          </a>

          <a href="#opportunities" className="text-sm font-medium text-white transition hover:text-[#D6B875]">
            Explore
          </a>

          <a href="#about" className="text-sm font-medium text-white transition hover:text-[#D6B875]">
            About
          </a>

          <a href="#contact" className="text-sm font-medium text-white transition hover:text-[#D6B875]">
            Contact
          </a>
        </div>

        <a
          href="#opportunities"
          className="rounded-full bg-[#D6B875] px-6 py-3 text-sm font-semibold text-[#263D35] transition hover:bg-white"
        >
          Discover Events
        </a>
      </div>
    </nav>
  )
}