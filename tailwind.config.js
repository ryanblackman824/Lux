/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sn: ["ServiceNow Sans", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
