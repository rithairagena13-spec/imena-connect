
import OpportunityCard from "./OpportunityCard"

function OpportunityList({
  opportunities = [],
  savedIds = [],
  onSave,
}) {
  if (opportunities.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[#CFC7B8] bg-[#F5F1E8] px-6 py-12 text-center">
        <h3 className="text-xl font-semibold text-[#263D35]">
          No opportunities found
        </h3>
        <p className="mt-2 text-sm text-[#77776D]">
          Try changing your search or filters to discover more opportunities.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {opportunities.map((opportunity) => (
        <OpportunityCard
          key={opportunity.id}
          opportunity={opportunity}
          isSaved={savedIds.includes(opportunity.id)}
          onSave={() => onSave(opportunity.id)}
        />
      ))}
    </div>
  )
}

export default OpportunityList
