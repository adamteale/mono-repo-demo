/** @type {import('tailwindcss').Config} */

const commonConfig = require('@mono-repo-demo/tailwind-config');
console.log("tailwind.config.js expo loaded", commonConfig);

module.exports = {
    content: [
      "./app/**/*.{js,jsx,ts,tsx}",
      "./src/**/*.{js,jsx,ts,tsx}",
      "../app-core/src/**/*.{js,jsx,ts,tsx}",
      "../../packages/atomic-library/src/**/*.{js,jsx,ts,tsx}"
    ],
    presets: [commonConfig], 
    theme: {
      extend: {
        colors: {
          backgroundPrimary: "#182958",
          backgroundSecondary: "#fff",
          secondary: "#fff",
          iconPrimary: "#fff",
        }
      }
    }
  }