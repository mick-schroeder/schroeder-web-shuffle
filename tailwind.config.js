/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",

  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx,mdx}`,
    `./src/mdx-pages/**/*.{js,jsx,ts,tsx,mdx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx,mdx}`,
    `./src/components/**/*.{js,jsx,ts,tsx,mdx}`,
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
