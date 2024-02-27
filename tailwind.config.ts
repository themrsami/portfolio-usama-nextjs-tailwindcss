import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'slow-spin': 'spin 5s linear infinite',
      },
      spacing: {
        '100': '25rem',  // 400px
        '120': '30rem',  // 480px
        // Add as many as you need...
      },
      animationDelay: {
        '1': '1s',
        '2': '2s',
        '3': '3s',
        // Add as many as you need...
      }
    },
  },
  plugins: [],
};
export default config;
