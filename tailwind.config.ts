import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        paper: "#f5f1e8",
        sand: "#d9c7a4",
        accent: "#ff8a3d",
        accentSoft: "#ffd5b8",
        moss: "#e8f0e3",
        steel: "#d7dde6",
      },
      boxShadow: {
        soft: "0 20px 50px rgba(7, 17, 31, 0.12)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top, rgba(255,255,255,0.75), rgba(245,241,232,0.95) 35%, rgba(235,228,214,1) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
