

import Button from "./Button"

export default function OpportunityFilters({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  availableOnly,
  setAvailableOnly,
  savedOnly,
  setSavedOnly,
  sortBy,
  setSortBy,
  categories,
  onReset,
}) {
  return (
    <section className="rounded-2xl border border-[#E9E2D4] bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-[#263D35]">
          Find your next opportunity
        </h2>
        <p className="mt-1 text-sm text-[#77776D]">
          Search, filter and explore opportunities that interest you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <label  htmlFor="opportunity-search" className="mb-2 block text-sm font-medium text-[#263D35]" >
            Search
          </label>

          <input id="opportunity-search"type="search" value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search by title or city..."
            className="w-full rounded-lg border border-[#D9D2C5] px-4 py-3 text-sm outline-none transition focus:border-[#263D35] focus:ring-2 focus:ring-[#B89B5E]/30"   />
        </div>

        <div>
          <label
            htmlFor="category-filter"
            className="mb-2 block text-sm font-medium text-[#263D35]" >
            Category
          </label>

          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="w-full rounded-lg border border-[#D9D2C5] bg-white px-4 py-3 text-sm outline-none focus:border-[#263D35] focus:ring-2 focus:ring-[#B89B5E]/30">
            <option value="All">All categories</option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="sort-filter"
            className="mb-2 block text-sm font-medium text-[#263D35]" >
            Sort by
          </label>
          <select  id="sort-filter"value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="w-full rounded-lg border border-[#D9D2C5] bg-white px-4 py-3 text-sm outline-none focus:border-[#263D35] focus:ring-2 focus:ring-[#B89B5E]/30">
            <option value="date">Earliest date</option>
            <option value="title">Title A–Z</option>
            <option value="seats">Most available seats</option>
          </select>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-5">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-[#4E5B52]">
          <input type="checkbox" checked={availableOnly}
            onChange={(event) => setAvailableOnly(event.target.checked)}
            className="h-4 w-4 accent-[#263D35] focus:ring-[#B89B5E]" />
          Available only
        </label>
        <label className="flex cursor-pointer items-center gap-2 text-sm text-[#4E5B52]">
          <input type="checkbox"checked={savedOnly} onChange={(event) => setSavedOnly(event.target.checked)}
            className="h-4 w-4 accent-[#263D35] focus:ring-[#B89B5E]"/>
          Saved only
        </label>
        <div className="ml-auto">
          <Button variant="outline" onClick={onReset}>
            Reset filters
          </Button>
        </div>
      </div>
    </section>
  )
}
