

export default function Navbar() {
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
          <a href="#home" className="text-sm font-medium text-[#46564A] transition hover:text-[#A58A4F]">
            Home
          </a>

          <a href="#opportunities" className="text-sm font-medium text-[#46564A] transition hover:text-[#A58A4F]">
            Explore
          </a>

          <a href="#about" className="text-sm font-medium text-[#46564A] transition hover:text-[#A58A4F]">
            About
          </a>

          <a href="#contact" className="text-sm font-medium text-[#46564A] transition hover:text-[#A58A4F]">
            Contact
          </a>
        </div>

        <a
          href="#opportunities"
          className="rounded-full bg-[#526B55] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#354F3C]"
        >
          Discover Events
        </a>
      </div>
    </nav>
  )
}
