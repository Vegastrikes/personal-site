import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(from var(--m_color-background) r g b / <alpha-value>)",
        iBackground: "rgb(from var(--m_color-item-background) r g b / <alpha-value>)",
        navbar: "rgb(from var(--m_color-navbar) r g b / <alpha-value>)",
        primary: "rgb(from var(--m_color-primary) r g b / <alpha-value>)",
        primaryHigh: "rgb(from var(--m_color-primaryHigh) r g b / <alpha-value>)",
        primaryDim: "rgb(from var(--m_color-primaryDim) r g b / <alpha-value>)",
        ghost: "rgb(from var(--m_color-ghost) r g b / <alpha-value>)",
        border: "rgb(from var(--m_color-border) r g b / <alpha-value>)",
        textDark: "rgb(from var(--m_color-textDark) r g b / <alpha-value>)",
        textPrimary: "rgb(from var(--m_color-textPrimary) r g b / <alpha-value>)",
      }
    },
  },
  plugins: [],
};

