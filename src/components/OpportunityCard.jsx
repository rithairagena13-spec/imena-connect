
import Badge from "./Badge"
import Button from "./Button"

function OpportunityCard({ opportunity, isSaved, onSave }) {
  const {
    title,
    category,
    city,
    date,
    description,
    availableSeats,
    price,
    featured,
  } = opportunity

  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#E9E2D4] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <Badge>{category}</Badge>

        {featured && (
          <Badge variant="featured">Featured</Badge>
        )}
      </div>

      <h3 className="text-xl font-semibold text-[#263D35]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#77776D]">
        {description}
      </p>

      <div className="mt-5 space-y-2 text-sm text-[#5F665F]">
        <p>📍 {city}</p>
        <p>📅 {date}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {price === 0 ? (
            <Badge variant="success">Free</Badge>
          ) : (
            <Badge variant="default">
              {price.toLocaleString()} RWF
            </Badge>
          )}

          {availableSeats === 0 ? (
            <Badge variant="danger">Fully booked</Badge>
          ) : (
            <Badge variant="success">
              {availableSeats} seats available
            </Badge>
          )}
        </div>
      </div>

      <div className="mt-auto pt-6">
        <Button
          variant={isSaved ? "secondary" : "primary"}
          onClick={onSave}
          className="w-full"
        >
          {isSaved ? "Remove from saved" : "Save opportunity"}
        </Button>
      </div>
    </article>
  )
}

export default OpportunityCard
