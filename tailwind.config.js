/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10202e",
        body: "#4b5b68",
        muted: "#6b7a86",
        green: {
          DEFAULT: "#22b573",
          dark: "#0e6b46",
          darker: "#0a5537",
          soft: "#e7f6ef",
        },
        mint: "#f2faf6",
        line: "#e6eaee",
        flag: {
          DEFAULT: "#b45309",
          chip: "#fef3e2",
        },
        whatsapp: "#25d366",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        card: "0 10px 30px rgba(16,32,46,.06)",
        badge: "0 2px 8px rgba(16,32,46,.05)",
        btn: "0 6px 18px rgba(14,107,70,.28)",
        step: "0 6px 16px rgba(14,107,70,.3)",
      },
    },
  },
  plugins: [],
};
