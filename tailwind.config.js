/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sn: ["ServiceNow Sans", "Inter", "system-ui", "sans-serif"],
        serif: ["Source Serif 4", "Georgia", "serif"],
      },
      keyframes: {
        "shadow-in": {
          "0%": {
            boxShadow:
              "0px 1px 2px -1px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.1)",
            transform: "translateY(6px)",
          },
          "100%": {
            boxShadow:
              "0px 8px 10px -6px rgba(0,0,0,0.1), 0px 20px 25px -5px rgba(0,0,0,0.1)",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "shadow-in": "shadow-in 700ms cubic-bezier(0.16,1,0.3,1) 250ms both",
      },
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          content: "var(--color-primary-content)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          content: "var(--color-secondary-content)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          content: "var(--color-accent-content)",
          hover: "var(--color-accent-hover)",
          active: "var(--color-accent-active)",
          50: "var(--color-accent-50)",
        },
        neutral: {
          DEFAULT: "var(--color-neutral)",
          content: "var(--color-neutral-content)",
          50: "var(--color-neutral-50)",
          200: "var(--color-neutral-200)",
          300: "var(--color-neutral-300)",
          400: "var(--color-neutral-400)",
          500: "var(--color-neutral-500)",
          600: "var(--color-neutral-600)",
          700: "var(--color-neutral-700)",
          900: "var(--color-neutral-900)",
        },
        ink: "var(--color-ink)",
        base: {
          100: "var(--color-base-100)",
          200: "var(--color-base-200)",
          300: "var(--color-base-300)",
          "300-active": "var(--color-base-300-active)",
          content: "var(--color-base-content)",
        },
        info: {
          DEFAULT: "var(--color-info)",
          content: "var(--color-info-content)",
        },
        success: {
          DEFAULT: "var(--color-success)",
          content: "var(--color-success-content)",
        },
        warning: {
          DEFAULT: "var(--color-warning)",
          content: "var(--color-warning-content)",
        },
        error: {
          DEFAULT: "var(--color-error)",
          content: "var(--color-error-content)",
        },
        link: "var(--color-link)",
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tertiary: "var(--color-text-tertiary)",
          inverted: "var(--color-text-inverted)",
        },
        background: {
          primary: "var(--color-background-primary)",
          secondary: "var(--color-background-secondary)",
          tertiary: "var(--color-background-tertiary)",
          inverted: "var(--color-background-inverted)",
        },
        surface: {
          primary: "var(--color-surface-primary)",
          secondary: "var(--color-surface-secondary)",
        },
        border: {
          DEFAULT: "var(--color-border-default)",
          subtle: "var(--color-border-subtle)",
          strong: "var(--color-border-strong)",
        },
        red: {
          50: "var(--color-red-50)",
          100: "var(--color-red-100)",
          200: "var(--color-red-200)",
          600: "var(--color-red-600)",
          700: "var(--color-red-700)",
          900: "var(--color-red-900)",
        },
        yellow: {
          50: "var(--color-yellow-50)",
          100: "var(--color-yellow-100)",
          300: "var(--color-yellow-300)",
          600: "var(--color-yellow-600)",
          700: "var(--color-yellow-700)",
          900: "var(--color-yellow-900)",
        },
        orange: {
          50: "var(--color-orange-50)",
          100: "var(--color-orange-100)",
          200: "var(--color-orange-200)",
          600: "var(--color-orange-600)",
          700: "var(--color-orange-700)",
          900: "var(--color-orange-900)",
        },
        amber: {
          100: "var(--color-amber-100)",
          200: "var(--color-amber-200)",
        },
        blue: {
          50: "var(--color-blue-50)",
          100: "var(--color-blue-100)",
          200: "var(--color-blue-200)",
          300: "var(--color-blue-300)",
          700: "var(--color-blue-700)",
          800: "var(--color-blue-800)",
          900: "var(--color-blue-900)",
        },
        indigo: {
          50: "var(--color-indigo-50)",
          100: "var(--color-indigo-100)",
          200: "var(--color-indigo-200)",
          300: "var(--color-indigo-300)",
          600: "var(--color-indigo-600)",
          700: "var(--color-indigo-700)",
          900: "var(--color-indigo-900)",
        },
        green: {
          50: "var(--color-green-50)",
          100: "var(--color-green-100)",
          200: "var(--color-green-200)",
          500: "var(--color-green-500)",
          700: "var(--color-green-700)",
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
