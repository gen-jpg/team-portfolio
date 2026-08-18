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
          DEFAULT: "#FDFCFA",
          soft: "#EFEBE4",
          muted: "#C1BAAC",
        },
        ink: {
          DEFAULT: "#29373B",
          soft: "#4A5558",
          muted: "#989082",
        },
        accent: {
          DEFAULT: "#419C93",
          hover: "#486764",
          soft: "#D7EBE8",
        },
        forest: {
          DEFAULT: "#486764",
          hover: "#3A5452",
        },
        taupe: "#989082",
        greige: "#C1BAAC",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        ui: ["var(--font-ui)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 22px 55px rgba(41, 55, 59, 0.10)",
        card: "0 14px 40px rgba(41, 55, 59, 0.06)",
        lift: "0 18px 48px rgba(41, 55, 59, 0.12)",
      },
      spacing: {
        22: "5.5rem",
      },
      maxWidth: {
        content: "76rem",
      },
      letterSpacing: {
        label: "0.22em",
      },
      borderRadius: {
        card: "1.75rem",
        banner: "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
