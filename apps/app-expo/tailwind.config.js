/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,jsx,ts,tsx}", 
      "./src/**/*.{js,jsx,ts,tsx}",
      "../app-core/src/**/*.{js,jsx,ts,tsx}",
      "../../packages/atomic-library/src/**/*.{js,jsx,ts,tsx}"
    ],
    presets: [require("nativewind/preset")],
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
          primaryBlue: "#24386E",
          ctaOrange: "#EE4124",
          buttonPrimaryBg: "#24386E",
          buttonSecondaryBg: "#FFFFFF",
          buttonCtaBg: "#EE4124",
          buttonPrimaryBorder: "#FFFFFF",
          buttonSecondaryBorder: "#24386E",
          buttonCtaBorder: "#EE4124",
          backgroundPrimary: "#182958",
          backgroundSecondary: "#f0f5fe",
          backgroundTertiary: "#2B3859",
          backgroundWhite: "#fff",
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
    plugins: [],
  }