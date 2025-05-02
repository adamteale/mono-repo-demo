import { cva } from 'class-variance-authority'

const baseClasses = 'flex items-center justify-center w-35 h-35 rounded-xl overflow-hidden'

export const mlBrandClasses = cva(baseClasses, {
  variants: {
    link: {
      true: 'bg-cta-fill-tertiary border border-cta-secondary hover:border-cta-tertiary hover:opacity-50 active:border-cta-tertiary',
      false: '',
    },
  },
  defaultVariants: {
    link: false,
  },
})
