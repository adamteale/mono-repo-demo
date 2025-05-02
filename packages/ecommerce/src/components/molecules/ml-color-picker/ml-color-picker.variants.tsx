import { cva } from 'class-variance-authority'

// GRID
const colorNameBaseClasses = 'items-center flex text-primary text-sm'

export const colorNameClasses = cva(colorNameBaseClasses, {
  variants: {
    isSoldOut: {
      true: 'opacity-20',
      false: '',
    },
  },
  defaultVariants: { isSoldOut: false },
})
