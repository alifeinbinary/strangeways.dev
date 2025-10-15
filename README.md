# Strangeways.dev

Modern, fast, and minimal portfolio site built with React, TypeScript, Vite, and Tailwind CSS. This repo contains the source for `strangeways.dev`, including a responsive layout, themed UI, and example components for pages like About, Contact, and a portfolio grid.

---

## Features

- **React + TypeScript** for a robust developer experience
- **Vite** for lightning-fast dev server and builds
- **Tailwind CSS** (v4) for utility-first styling and typography
- **ESLint** with React rules for consistent code quality
- **Ready-to-run** scripts for development, build, preview, and lint

---

## Tech Stack

- **Framework:** React, React DOM
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS, PostCSS, Autoprefixer
- **Linting:** ESLint (+ React hooks, React Refresh, etc.)

See `package.json` for exact versions.

---

## Prerequisites

- Node.js 18+ (recommended) or 20+
- A package manager: npm, pnpm, or yarn

> This repository specifies `packageManager: pnpm` in `package.json`, but you can use npm or yarn just fine. Examples for all three are below.

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/alifeinbinary/strangeways.dev.git
cd strangeways.dev
```

Install dependencies:

- Using pnpm

```bash
pnpm install
```

- Using npm

```bash
npm install
```

- Using yarn

```bash
yarn install
```

Run the development server:

- Using pnpm

```bash
pnpm dev
```

- Using npm

```bash
npm run dev
```

- Using yarn

```bash
yarn dev
```

Then open the printed local URL (usually <http://localhost:5173/>) in your browser.

---

## Scripts

The following scripts are defined in `package.json`:

- `dev` — Start the Vite dev server
- `build` — Type-check (`tsc -b`) and build production assets via Vite
- `preview` — Preview the production build locally
- `lint` — Run ESLint on the project

Run them with your preferred package manager, e.g.:

```bash
# pnpm
pnpm dev
pnpm build
pnpm preview
pnpm lint

# npm
npm run dev
npm run build
npm run preview
npm run lint

# yarn
yarn dev
yarn build
yarn preview
yarn lint
```

---

## Project Structure

```text
strangeways.dev/
├─ public/                  # Static assets served as-is
├─ src/
│  ├─ assets/              # Local images, icons, etc.
│  ├─ components/          # UI components (e.g., About, Contact, etc.)
│  ├─ data/                # Data sources (e.g., portfolio items)
│  ├─ theme/               # Theming, providers, hooks, utilities
│  ├─ App.tsx              # Root app component
│  └─ index.css            # Global styles (Tailwind)
├─ index.html              # App entry HTML
├─ vite.config.ts          # Vite configuration
├─ tailwind.config.js      # Tailwind configuration
├─ eslint.config.js        # ESLint configuration
├─ tsconfig*.json          # TypeScript configurations
└─ package.json
```

---

## Building for Production

```bash
# pnpm
pnpm build

# npm
npm run build

# yarn
yarn build
```

Preview the production build locally:

```bash
# pnpm
pnpm preview

# npm
npm run preview

# yarn
yarn preview
```

---

## Contributing

Contributions, issues, and feature requests are welcome! Please:

- **Open an issue** to discuss significant changes before submitting a PR.
- **Follow the existing code style** and run `lint` before pushing.

---

## License

This project is licensed under the **MIT License**. You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this software.

As a condition, the **copyright notice** and **permission notice** must be included
in all copies or substantial portions of the Software. In simple terms, you can use this code in your own projects (including commercial), but you must **include attribution** to the original author.

See the full license text in `LICENSE`.
