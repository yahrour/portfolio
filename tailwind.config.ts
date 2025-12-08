import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        foreground: "rgba(var(--foreground))",
        secondary: "rgba(var(--secondary))",
        bcolor: "rgba(var(--bcolor))",
      },
    },
  },
  plugins: [],
};

export default config;
