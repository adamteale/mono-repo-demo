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
        backgroundPrimary: 'var(--color-background-primary)',
        backgroundSecondary: 'var(--color-background-secondary)',
        secondary: 'var(--color-secondary)',
        iconPrimary: 'var(--color-icon-primary)',
        surface: {
          primary: 'var(--color-surface-primary)',
          secondary: 'var(--color-surface-secondary)',
          tertiary: 'var(--color-surface-tertiary)',
        },
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary: 'var(--color-bg-tertiary)',
          quaternary: 'var(--color-bg-quaternary)',
        },
        feedback: {
          success: 'var(--color-feedback-success)',
          error: 'var(--color-feedback-error)',
          default: 'var(--color-feedback-default)',
          disabled: 'var(--color-feedback-disabled)',
        },
        footer: {
          fill: {
            primary: 'var(--color-footer-fill-primary)',
          },
        },
        navbar: {
          content: {
            primary: 'var(--color-navbar-content-primary)',
            secondary: 'var(--color-navbar-content-secondary)',
          },
          fill: {
            primary: 'var(--color-navbar-fill-primary)',
            secondary: 'var(--color-navbar-fill-secondary)',
            tertiary: 'var(--color-navbar-fill-tertiary)',
          },
        },
        brand: {
          primary: 'var(--color-brand-primary)',
          secondary: 'var(--color-brand-secondary)',
          tertiary: 'var(--color-brand-tertiary)',
        },
        link: {
          default: 'var(--color-link-default)',
          hover: 'var(--color-link-hover)',
          pressed: 'var(--color-link-pressed)',
          disabled: 'var(--color-link-disabled)',
        },
        cta: {
          fill: {
            primary: 'var(--color-cta-fill-primary)',
            secondary: 'var(--color-cta-fill-secondary)',
            tertiary: 'var(--color-cta-fill-tertiary)',
            press: 'var(--color-cta-fill-press)',
          },
          stroke: {
            primary: 'var(--color-cta-stroke-primary)',
            secondary: 'var(--color-cta-stroke-secondary)',
            tertiary: 'var(--color-cta-stroke-tertiary)',
            disabled: 'var(--color-cta-stroke-disabled)',
          },
          content: {
            primary: 'var(--color-cta-content-primary)',
            secondary: 'var(--color-cta-content-secondary)',
            tertiary: 'var(--color-cta-content-tertiary)',
            disabled: 'var(--color-cta-content-disabled)',
          },
        },
        stroke: {
          primary: 'var(--color-stroke-primary)',
          secondary: 'var(--color-stroke-secondary)',
          tertiary: 'var(--color-stroke-tertiary)',
        },
        icon: {
          primary: 'var(--color-icon-primary)',
          secondary: 'var(--color-icon-secondary)',
          tertiary: 'var(--color-icon-tertiary)',
          active: 'var(--color-icon-active)',
          quaternary: 'var(--color-icon-quaternary)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
          quaternary: 'var(--color-text-quaternary)',
        },
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