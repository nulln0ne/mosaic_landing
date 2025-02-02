import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#282A29',
        secondary: '#F6F6F6',
        accent: '#E5E5E5',
        highlight: '#FF5733',
      },
    },
  },
  plugins: [],
} satisfies Config;
