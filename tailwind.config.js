/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx,mdx}`,
    `./src/mdx-pages/**/*.{js,jsx,ts,tsx,mdx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx,mdx}`,
    `./src/components/**/*.{js,jsx,ts,tsx,mdx}`,
  ],
  theme: {
    extend: {
      webShuffleButton:
        "bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600",
      webShuffleLink:
        "inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
