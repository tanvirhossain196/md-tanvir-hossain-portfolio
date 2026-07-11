import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0C",
        bgsoft: "#111114",
        panel: "#15151999",
        panelsolid: "#15151A",
        line: "#26262B",
        paper: "#F1F1EF",
        paperdim: "#9A9AA2",
        accent: "#4C8DFF",
        accentsoft: "#8AB4FF",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
