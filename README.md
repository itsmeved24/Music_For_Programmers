# musicForCoding

> "A series of mixes intended for listening while programming to focus the brain and inspire the mind."

**musicForCoding** is a specialized web application designed to provide a focused auditory environment for developers and creators. It features a curated collection of audio episodes, a custom audio player, and a terminal-inspired aesthetic to minimize distractions and enhance flow.

![Svelte](https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

## ✨ Features

- **Immersive Audio Player**: Custom-built player with play/pause, seek, volume control, and skip functionality.
- **Episodic Content**: Browse a library of coding mixes with detailed track listings, release dates, and descriptions.
- **Audio Visualization**: Real-time audio visualization components.
- **Focus Mode**:
  - **Fullscreen Toggle**: Immerse yourself completely by removing browser distractions.
  - **Minimalist Aesthetic**: Dark-themed, terminal-style UI using `IBM Plex Mono` for a comfortable coding atmosphere.
- **Favorites System**: Save your preferred episodes for quick access.
- **Responsive Design**: Adapts to different screen sizes with a 3-column layout for desktop and optimized views for smaller devices.

## 🛠️ Tech Stack

- **Framework**: [Svelte 5](https://svelte.dev/) & [SvelteKit](https://kit.svelte.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS with custom variables, GSAP for animations.
- **State Management**: Svelte Stores (`audioStore`, `favorites`).
- **Testing**: Vitest & Playwright.

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm, pnpm, or yarn

### Installation

1.  **Clone the repository** (if applicable) or download the source.

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    pnpm install
    # or
    yarn
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  **Open in Browser**:
    Visit `http://localhost:5173` (or the URL shown in your terminal).

## 📂 Project Structure

```
src/
├── lib/
│   ├── audio/          # Audio logic (EnhancedAudioManager)
│   ├── components/     # UI Components (AudioPlayer, Visualizer, EpisodeList)
│   ├── data/           # Static data (Episodes list)
│   ├── stores/         # Svelte stores (Audio state, Favorites)
│   ├── styles/         # Global styles
│   └── types/          # TypeScript interfaces
├── routes/
│   └── +page.svelte    # Main Application Page
└── ...
```

## 📜 Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build locally.
- `npm run check`: Run `svelte-check` against the codebase.
- `npm run lint`: Run ESLint and Prettier checks.
- `npm run format`: Format code using Prettier.
- `npm run test`: Run unit tests.

## 🤝 Contributing

Contributions are welcome! Please feel free to feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<p align="center">Made with ♥ by Vansia</p>