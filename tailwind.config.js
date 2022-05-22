module.exports = {
  mode: "jit",
  purge: ["./app/**/*.{js,jsx,ts,tsx,md,mdx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
