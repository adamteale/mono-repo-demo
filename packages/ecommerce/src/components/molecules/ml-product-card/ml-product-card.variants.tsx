import { cva } from 'class-variance-authority'

const tagBaseClass = 'absolute z-10 left-2 top-2 md:left-3 md:top-3'
export const tagClasses = cva(tagBaseClass, {
  variants: {
    outOfStock: {
      true: '!bg-feedback-warning',
      false: '',
    },
  },
  defaultVariants: { outOfStock: false },
})
