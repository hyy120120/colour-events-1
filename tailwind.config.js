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
        background: "#08090d",
        foreground: "#ffffff",
        card: "#0e1017",
        brand: {
          red: "#e52d27",      // Vibrant Signature Red
          crimson: "#b31217",  // Deep Ruby Red
          gold: "#d4af37",     // Accent Gold
          dark: "#08090d",
          surface: "#0e1017",
          border: "rgba(229, 45, 39, 0.3)",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "Outfit", "system-ui", "sans-serif"],
        serif: ["var(--font-cinzel)", "Cinzel", "serif"],
        mono: ["var(--font-outfit)", "Outfit", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.35, transform: "scale(1)" },
          "50%": { opacity: 0.7, transform: "scale(1.06)" },
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
