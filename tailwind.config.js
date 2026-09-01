/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sn: ["ServiceNow Sans", "Inter", "system-ui", "sans-serif"],
        serif: ["Source Serif 4", "Georgia", "serif"],
      },
      colors: {
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
          50: "var(--color-accent-50)",
        },
        primary: "var(--color-primary)",
        success: "var(--color-success)",
        error: "var(--color-error)",
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tertiary: "var(--color-text-tertiary)",
          inverted: "var(--color-text-inverted)",
        },
        secondary: {
          content: "var(--color-secondary-content)",
        },
        surface: {
          primary: "var(--color-bg-primary)",
          tertiary: "var(--color-bg-tertiary)",
        },
        neutral: {
          DEFAULT: "var(--color-neutral)",
          300: "var(--color-neutral-300)",
          400: "var(--color-neutral-400)",
          700: "var(--color-neutral-700)",
        },
        red: {
          50: "var(--color-red-50)",
          100: "var(--color-red-100)",
          200: "var(--color-red-200)",
          600: "var(--color-red-600)",
          900: "var(--color-red-900)",
        },
        yellow: {
          50: "var(--color-yellow-50)",
          100: "var(--color-yellow-100)",
          900: "var(--color-yellow-900)",
        },
        orange: {
          900: "var(--color-orange-900)",
        },
        amber: {
          100: "var(--color-amber-100)",
          200: "var(--color-amber-200)",
        },
        blue: {
          100: "var(--color-blue-100)",
          300: "var(--color-blue-300)",
          700: "var(--color-blue-700)",
          900: "var(--color-blue-900)",
        },
        indigo: {
          100: "var(--color-indigo-100)",
          200: "var(--color-indigo-200)",
          300: "var(--color-indigo-300)",
          600: "var(--color-indigo-600)",
        },
        green: {
          100: "var(--color-green-100)",
          200: "var(--color-green-200)",
          500: "var(--color-green-500)",
          900: "var(--color-green-900)",
        },
        violet: {
          500: "var(--color-violet-500)",
          600: "var(--color-violet-600)",
        },
      },
    },
  },
  plugins: [],
};
