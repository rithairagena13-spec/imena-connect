export default function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
  className = "",
}) {
  const variants = {
    primary: "bg-[#263D35] text-white hover:bg-[#1C3029]",
    secondary: "bg-[#E9E2D4] text-[#263D35] hover:bg-[#DED4C3]",
    outline: "border border-[#263D35] text-[#263D35] hover:bg-[#263D35] hover:text-white",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#B89B5E] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}