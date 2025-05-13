/** @type {import('tailwindcss').Config} */
const sharedConfig = require('tailwind-config/tailwind.config.js')

module.exports = {
  ...sharedConfig,
  presets: [require("nativewind/preset")],
  content: ['./src/**/*.{ts,tsx}'],
}
