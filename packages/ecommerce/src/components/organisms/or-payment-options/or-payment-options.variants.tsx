import { cva } from 'class-variance-authority'

const buttonBaseClass = 'mt-6 md:mt-8 md:mb-2'

export const buttonClasses = cva(buttonBaseClass, {
  variants: {
    checked: {
      true: 'block',
      false: 'hidden',
    },
  },
  defaultVariants: { checked: false },
})
