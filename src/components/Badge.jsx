
function Badge({
  children,
  variant = "default",
  className = "",
}) {
  const variants = {
    default: "bg-[#E9E2D4] text-[#263D35]",
    featured: "bg-[#DCE8DF] text-[#263D35]",
    success: "bg-[#E2EFE5] text-[#285B3D]",
    warning: "bg-[#F5EBD5] text-[#85652C]",
    danger: "bg-[#F5E1DF] text-[#9B4038]",
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge
