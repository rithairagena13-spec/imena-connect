
import { useState } from "react"
import Button from "./Button"

export default function AddOpportunityForm({ categories, onAdd, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    category: categories[0] || "",
    city: "",
    date: "",
    capacity: "",
    price: "",
  })

  const [errors, setErrors] = useState({})

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const newErrors = {}

    if (!formData.title.trim()) {
      newErrors.title = "Please enter an opportunity title."
    }

    if (!formData.category) {
      newErrors.category = "Please select a category."
    }

    if (!formData.city.trim()) {
      newErrors.city = "Please enter a city."
    }

    if (!formData.date || Number.isNaN(Date.parse(formData.date))) {
      newErrors.date = "Please enter a valid date."
    }

    if (
      formData.capacity === "" ||
      !Number.isInteger(Number(formData.capacity)) ||
      Number(formData.capacity) < 0
    ) {
      newErrors.capacity = "Capacity must be a whole number of 0 or more."
    }

    if (
      formData.price === "" ||
      !Number.isFinite(Number(formData.price)) ||
      Number(formData.price) < 0
    ) {
      newErrors.price = "Price must be 0 or more."
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      return
    }

    const newOpportunity = {
      id: `opp-${Date.now()}`,
      title: formData.title.trim(),
      category: formData.category,
      city: formData.city.trim(),
      date: formData.date,
      description: "A newly added community opportunity.",
      capacity: Number(formData.capacity),
      availableSeats: Number(formData.capacity),
      price: Number(formData.price),
      featured: false,
    }

    onAdd(newOpportunity)

    setFormData({
      title: "",
      category: categories[0] || "",
      city: "",
      date: "",
      capacity: "",
      price: "",
    })

    setErrors({})
  }

  function handleClear() {
    setFormData({
      title: "",
      category: categories[0] || "",
      city: "",
      date: "",
      capacity: "",
      price: "",
    })

    setErrors({})
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-[#E9E2D4] bg-white p-6 shadow-sm"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-[#263D35]">
          Add an opportunity
        </h2>
        <p className="mt-2 text-sm text-[#77776D]">
          Share a new workshop, event or learning opportunity.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="title" className="mb-2 block text-sm font-medium text-[#263D35]">
            Opportunity title
          </label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#D8D2C5] px-4 py-3 text-sm outline-none focus:border-[#526B55] focus:ring-2 focus:ring-[#526B55]/20"
          />
          {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="category" className="mb-2 block text-sm font-medium text-[#263D35]">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#D8D2C5] bg-white px-4 py-3 text-sm outline-none focus:border-[#526B55] focus:ring-2 focus:ring-[#526B55]/20"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
        </div>

        <div>
          <label htmlFor="city" className="mb-2 block text-sm font-medium text-[#263D35]">
            City
          </label>
          <input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#D8D2C5] px-4 py-3 text-sm outline-none focus:border-[#526B55] focus:ring-2 focus:ring-[#526B55]/20"
          />
          {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
        </div>

        <div>
          <label htmlFor="date" className="mb-2 block text-sm font-medium text-[#263D35]">
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#D8D2C5] px-4 py-3 text-sm outline-none focus:border-[#526B55] focus:ring-2 focus:ring-[#526B55]/20"
          />
          {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
        </div>

        <div>
          <label htmlFor="capacity" className="mb-2 block text-sm font-medium text-[#263D35]">
            Capacity
          </label>
          <input
            id="capacity"
            name="capacity"
            type="number"
            min="0"
            step="1"
            value={formData.capacity}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#D8D2C5] px-4 py-3 text-sm outline-none focus:border-[#526B55] focus:ring-2 focus:ring-[#526B55]/20"
          />
          {errors.capacity && <p className="mt-1 text-sm text-red-600">{errors.capacity}</p>}
        </div>

        <div>
          <label htmlFor="price" className="mb-2 block text-sm font-medium text-[#263D35]">
            Price (RWF)
          </label>
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            step="any"
            value={formData.price}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#D8D2C5] px-4 py-3 text-sm outline-none focus:border-[#526B55] focus:ring-2 focus:ring-[#526B55]/20"
          />
          {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <Button type="submit">Add opportunity</Button>
        <Button type="button" variant="secondary" onClick={handleClear}>
          Clear form
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  )
}
