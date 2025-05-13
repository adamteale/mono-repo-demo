/** @type {import('tailwindcss').Config} */

const commonConfig = require('@monorepo-demo/tailwind-config');

module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "../app-core/src/**/*.{js,jsx,ts,tsx}",
      "../../packages/atomic-library/src/**/*.{js,jsx,ts,tsx}"
    ],
    presets: [commonConfig], 
  }