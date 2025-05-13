/** @type {import('tailwindcss').Config} */
const commonConfig = require('@monorepo-demo/tailwind-config');

console.log("tailwind.config.js expo loaded", commonConfig)

module.exports = {
    presets: [commonConfig], 
    content: [
      "./app/**/*.{js,jsx,ts,tsx}", 
      "./src/**/*.{js,jsx,ts,tsx}",
      "../app-core/src/**/*.{js,jsx,ts,tsx}",
      "../../packages/atomic-library/src/**/*.{js,jsx,ts,tsx}"
    ],
    
  }