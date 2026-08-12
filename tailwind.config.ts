import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F9F7F2",
          soft: "#F3EFE7",
          muted: "#E8E2D6",
        },
        ink: {
          DEFAULT: "#1C1917",
          soft: "#44403C",
          muted: "#78716C",
        },
        accent: {
          DEFAULT: "#704C38",
          hover: "#5A3C2C",
          soft: "#8B6A55",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(28, 25, 23, 0.06)",
        card: "0 4px 20px rgba(28, 25, 23, 0.04)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
