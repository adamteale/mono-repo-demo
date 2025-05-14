// tailwind.config.common.js

const colors = require('tailwindcss/colors');

console.log("tailwind.config.common.js loaded")

module.exports = {
  presets: [require("nativewind/preset")],
  content: [
    "../../apps/app-core/src/**/*.{js,jsx,ts,tsx}",
    "../../apps/app-expo/src/**/*.{js,jsx,ts,tsx}",
    "../../apps/app-next/src/**/*.{js,jsx,ts,tsx}",
    "../../packages/atomic-library/src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1024px",
        xxl: "1300px",
        xxxl: "1400px",
      },
      fontSize: {
        button: "20px",
        h3: "28px",
        body: "20px"
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        red: colors.red,
        yellow: colors.yellow,
        green: colors.green,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.purple,
        pink: colors.pink,
        'primary': '#182958',
        'secondary': '#yourSecondaryColor',
        'icon-active': '#yourIconActiveColor',
        'text-base': '#yourTextBaseColor',
        backgroundPrimary: "#f0f5fe",
        backgroundSecondary: "#fff",
        backgroundTertiary: "#2B3859",
        backgroundWhite: "#fff",
        buttonCtaBg: "#EE4124",
        buttonCtaBorder: "#EE4124",
        buttonPrimaryBg: "#24386E",
        buttonPrimaryBorder: "#FFFFFF",
        buttonSecondaryBg: "#FFFFFF",
        buttonSecondaryBorder: "#24386E",
        ctaOrange: "#EE4124",
        primaryBlue: "#24386E",
        textPrimary: "#182958"
      },
      borderWidth: {
        'button-primary': '2px'
      },
      borderRadius: {
        'button-cta': '8px'
      }
    },
  },
  plugins: [
  ],
};