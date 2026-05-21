/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "Noto Sans SC",
          "PingFang SC",
          "Microsoft YaHei",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        ink: "#111827",
        muted: "#4B5563",
        navy: "#0F2747",
        deep: "#0B1220",
        business: "#1E3A8A",
        gold: "#C9A227",
        line: "#E5E7EB",
        paper: "#F7F8FA",
      },
      boxShadow: {
        premium: "0 24px 80px rgba(15, 39, 71, 0.12)",
        fine: "0 14px 40px rgba(15, 39, 71, 0.08)",
      },
    },
  },
  plugins: [],
};
