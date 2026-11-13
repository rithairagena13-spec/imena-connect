
# IMENA CONNECT

### Discover Opportunities. Connect. Grow.

IMENA CONNECT is a responsive React web application designed to help people discover workshops, career events, community activities, short courses, and other opportunities across Rwanda.

The platform brings opportunities from different fields together in one place, making it easier for users to explore activities, find relevant events, and save opportunities they are interested in.

**Note:** The opportunities currently displayed are fictional sample data created for demonstration purposes. They are not confirmed real events.

## Features

- **Explore Opportunities:** Browse opportunities across different categories and locations in Rwanda.
- **Search:** Search opportunities by title or city.
- **Category Filtering:** Filter opportunities by category.
- **Availability Filtering:** Display only opportunities with available seats.
- **Saved Opportunities:** Save and remove opportunities from your saved list.
- **Sorting:** Sort opportunities by earliest date, title (A–Z), or available seats.
- **Add Opportunities:** Submit new opportunities through a controlled form.
- **Form Validation:** Validate required fields, dates, capacity, and prices before submission.
- **Opportunity Status:** Display featured, free, paid, available, and fully booked statuses.
- **Loading and Error States:** Demonstrate loading, error, and ready interface states.
- **Responsive Navigation:** Navigate through the application using desktop links or a mobile hamburger menu.
- **Responsive Layout:** Adapt the interface to different screen sizes.

## Technologies Used

- React
- JavaScript (ES6+)
- Tailwind CSS v4
- Vite
- HTML5

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rithairagena13-spec/imena-connect.git
   ```

2. Navigate into the project folder:

   ```bash
   cd imena-connect
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL provided by Vite in your browser.

### Build for Production

To create a production build, run:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
imena-connect/
├── public/
├── src/
│   ├── components/
│   │   ├── AddOpportunityForm.jsx
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── OpportunityCard.jsx
│   │   ├── OpportunityFilters.jsx
│   │   └── OpportunityList.jsx
│   ├── data/
│   │   └── seedOpportunities.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Main Components

| Component | Responsibility |
|---|---|
| `Navbar` | Provides desktop and mobile navigation. |
| `HeroSection` | Introduces the platform and highlights its purpose. |
| `OpportunityFilters` | Handles searching, filtering, and sorting. |
| `OpportunityList` | Displays opportunities and the empty-results state. |
| `OpportunityCard` | Displays individual opportunity information and save actions. |
| `AddOpportunityForm` | Collects and validates new opportunity information. |
| `Button` | Provides reusable styled buttons. |
| `Badge` | Displays opportunity categories and statuses. |

## React Concepts Applied

- Functional components
- JSX
- Props and component communication
- `useState` for managing application state
- Event handling
- Conditional rendering
- Rendering lists with `.map()`
- Unique React keys
- Array methods such as `filter()`, `map()`, and `sort()`
- Controlled form inputs
- Immutable state updates
- Form validation

## Project Limitations

This is a frontend demonstration project. It does not currently use a backend, database, authentication system, or external API.

New opportunities and saved selections are managed in React state and are not permanently stored after refreshing the page.

## Author

**Ritha IRAGENA**

GitHub: [rithairagena13-spec](https://github.com/rithairagena13-spec)

---

*IMENA CONNECT — Discover Opportunities. Connect. Grow.*