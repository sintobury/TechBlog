import type { Config } from "tailwindcss";

export default {
  darkMode:['class'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        gray: "var(--gray)",
        black: "var(--black)",
        box: "var(--box)",
        warn: "var(--warn)",
        info: "var(--info)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        DEFAULT: {
          css:{
            '.callout-text > p': {
              margin: 0,
            }
          }
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
