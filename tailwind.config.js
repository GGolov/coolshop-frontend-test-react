/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "cool-blue": "#021B79",
      "cool-indigo": "#6610f2",
      "cool-purple": "#6f42c1",
      "cool-pink": "#e83e8c",
      "cool-red": "#dc3545",
      "cool-orange": "#fd7e14",
      "cool-yellow": "#ffc107",
      "cool-green": "#28a745",
      "cool-teal": "#20c997",
      "cool-cyan": "#17a2b8",
      "cool-white": "#fff",
      "cool-gray": "#6c757d",
      "cool-gray-dark": "#343a40",
      "cool-mid-blue": "#057BFF",
      "cool-dark-blue": "#001560",
      "cool-dark-grey": "#8F9EAF",
      "cool-primary": "#07509E",
      "cool-secondary": "#D9D9D9",
      "cool-success": "#28a745",
      "cool-info": "#17a2b8",
      "cool-warning": "#ffc107",
      "cool-danger": "#dc3545",
      "cool-light": "#f8f9fa",
      "cool-dark": "#343a40",
    },
  },
  plugins: [],
}
