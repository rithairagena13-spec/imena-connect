

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/30 bg-[#F5F1E8]/25 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#home" className="text-2xl font-bold tracking-wide text-white">
          IMENA<span className="text-[#E5C987]">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm font-medium text-white transition hover:text-[#E5C987]">
            Home
          </a>

          <a href="#opportunities" className="text-sm font-medium text-white transition hover:text-[#E5C987]">
            Explore
          </a>

          <a href="#about" className="text-sm font-medium text-white transition hover:text-[#E5C987]">
            About
          </a>

          <a href="#contact" className="text-sm font-medium text-white transition hover:text-[#E5C987]">
            Contact
          </a>
        </div>

        <a
          href="#opportunities"
          className="rounded-full border border-white/40 bg-white/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-[#E5C987] hover:text-[#263D35]"
        >
          Discover Events
        </a>
      </div>
    </nav>
  )
}
