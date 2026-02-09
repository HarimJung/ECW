<<<<<<< All By Harim Jung

=======
# ECW Technical Proposal Dashboard

This repository contains the source code for the ECW (Education Cannot Wait) Technical Proposal dashboard. It visualizes key performance indicators, financial data, and strategic outcomes using interactive charts and a responsive layout.

## Tech Stack

- **Framework:** React 19 (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Visualization:** Recharts
- **Icons:** FontAwesome (CDN)

## Project Structure

```bash
├── components/
│   ├── ArchitectureView.tsx    # Technical strategy & data flow documentation
│   ├── Dashboard.tsx           # Main dashboard layout
│   ├── KPICard.tsx             # Reusable stat cards
│   └── charts/                 # Individual chart components
│       ├── ButterflyChart.tsx  # FER vs MYRP comparison
│       ├── CrisisPie.tsx       # Crisis type distribution
│       ├── DonorTreemap.tsx    # Donor contribution hierarchy
│       └── ...
├── App.tsx                     # Main entry point & routing
└── index.html                  # HTML entry
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HarimJung/ECW.git
   cd ECW
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

## Deployment

This project is configured for seamless deployment on **Vercel**.

1. Connect your GitHub repository to Vercel.
2. The framework preset should auto-detect **Vite**.
3. Deploy.

Live Demo: [https://ecw-x-harim-jung.vercel.app](https://ecw-x-harim-jung.vercel.app)
>>>>>>> All By Harim Jung (Add project documentation)
