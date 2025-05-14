/** @type {import('tailwindcss').Config} */

const commonConfig = require('@mono-repo-demo/tailwind-config');

console.log("tailwind.config.js loaded")
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [commonConfig], 
    theme: {
      extend: {},
    },
    plugins: [],
  }