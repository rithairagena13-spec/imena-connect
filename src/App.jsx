
import { useState } from "react"
import seedOpportunities from "./data/seedOpportunities"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import OpportunityFilters from "./components/OpportunityFilters"
import OpportunityList from "./components/OpportunityList"

export default function App() {
  const [opportunities] = useState(seedOpportunities)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [availableOnly, setAvailableOnly] = useState(false)
  const [savedOnly, setSavedOnly] = useState(false)
  const [savedIds, setSavedIds] = useState([])
  const [sortBy, setSortBy] = useState("date")

  const categories = [
    ...new Set(opportunities.map((opportunity) => opportunity.category)),
  ]

  const filteredOpportunities = opportunities.filter((opportunity) => {
    const searchValue = searchTerm.trim().toLowerCase()

    const matchesSearch =
      opportunity.title.toLowerCase().includes(searchValue) ||
      opportunity.city.toLowerCase().includes(searchValue)

    const matchesCategory =
      selectedCategory === "All" ||
      opportunity.category === selectedCategory

    const matchesAvailability =
      !availableOnly || opportunity.availableSeats > 0

    const matchesSaved =
      !savedOnly || savedIds.includes(opportunity.id)

    return (
      matchesSearch &&
      matchesCategory &&
      matchesAvailability &&
      matchesSaved
    )
  })

  const sortedOpportunities = [...filteredOpportunities].sort(
    (a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title)
      }

      if (sortBy === "seats") {
        return b.availableSeats - a.availableSeats
      }

      return new Date(a.date) - new Date(b.date)
    }
  )

  function handleSave(opportunityId) {
    setSavedIds((currentSavedIds) =>
      currentSavedIds.includes(opportunityId)
        ? currentSavedIds.filter((id) => id !== opportunityId)
        : [...currentSavedIds, opportunityId]
    )
  }

  function handleResetFilters() {
    setSearchTerm("")
    setSelectedCategory("All")
    setAvailableOnly(false)
    setSavedOnly(false)
    setSortBy("date")
  }

  return (
    <>
      <Navbar />
      <HeroSection />

      <main className="min-h-screen bg-[#F5F1E8] px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 rounded-xl border border-[#E9E2D4] bg-white px-5 py-4">
            <p className="text-sm text-[#77776D]">
              These are illustrative sample opportunities created
              for demonstration. They are not confirmed real events.
            </p>
          </div>

          <OpportunityFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            availableOnly={availableOnly}
            setAvailableOnly={setAvailableOnly}
            savedOnly={savedOnly}
            setSavedOnly={setSavedOnly}
            sortBy={sortBy}
            setSortBy={setSortBy}
            categories={categories}
            onReset={handleResetFilters}
          />

          <section id="opportunities" className="mt-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold text-[#263D35]">
                Explore opportunities
              </h2>

              <p className="text-sm text-[#77776D]">
                {sortedOpportunities.length} opportunities found
                <span className="mx-2">|</span>
                {savedIds.length} saved
              </p>
            </div>

            <OpportunityList
              opportunities={sortedOpportunities}
              savedIds={savedIds}
              onSave={handleSave}
            />
          </section>
        </div>
      </main>
    </>
  )
}
