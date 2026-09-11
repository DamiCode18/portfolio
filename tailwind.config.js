/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // big display headings use the system face (SF Pro on Apple devices);
        // League Spartan stays the body font
        display: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "sans-serif",
        ],
      },
      colors: {
        accent: "#FF7A00",
        // theme-aware tokens, defined as CSS variables in styles/globals.css
        bg: "var(--bg)",
        surface: "var(--surface)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        subtle: "var(--subtle)",
        line: "var(--border)",
        "line-strong": "var(--border-strong)",
        pastel: {
          yellow: "#F5D97A",
          blue: "#8FC1E3",
          green: "#9ED5B5",
          pink: "#E8A9C0",
        },
      },
      keyframes: {
        giggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%, 100%": { transform: "rotate(5deg)" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "15%": { transform: "rotate(14deg)" },
          "30%": { transform: "rotate(-8deg)" },
          "40%": { transform: "rotate(14deg)" },
          "50%": { transform: "rotate(-4deg)" },
          "60%": { transform: "rotate(10.0deg)" },
          "70%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0px) rotate(var(--tilt, -3deg))" },
          "50%": { transform: "translateY(-10px) rotate(var(--tilt, -3deg))" },
        },
      },
      animation: {
        giggle: "giggle 3s ease-in-out infinite",
        wave: "wave 2s infinite",
        marquee: "marquee 20s linear infinite",
        drift: "drift 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
