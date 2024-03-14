/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html", "./src/**/*.{html,js,ts,jsx,tsx,vue}",
    './src/views/**/*.{html,js,vue}',
    './src/components/**/*.{html,js,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}