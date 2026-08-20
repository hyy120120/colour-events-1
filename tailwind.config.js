/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050507",
        foreground: "#f5f5f7",
        card: "#0d0d12",
        brand: {
          red: "#e52d27",
          crimson: "#b31217",
          gold: "#d4af37",
          dark: "#050507",
          surface: "#111116",
          border: "rgba(255, 255, 255, 0.1)",
        },
      },
      fontFamily: {
        sans: ["var(--font-golos)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
        // Micro-labels/tags across the whole site use `font-mono` in Tailwind
        // classes — remapping it from a typewriter monospace to the premium
        // Outfit sans instantly upgrades every uppercase label site-wide.
        mono: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.4, transform: "scale(1)" },
          "50%": { opacity: 0.8, transform: "scale(1.05)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        pulseGlow: "pulseGlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
