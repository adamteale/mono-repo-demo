import { cva } from 'class-variance-authority'

const buttonBaseClass = 'h-8 sm:h-10 p-1 sm:p-2 border text-disabled-primary bg-cta-secondary'
export const buttonClasses = cva(buttonBaseClass, {
  variants: {
    disabled: {
      true: 'bg-disabled-secondary',
      false: 'active:text-input-secondary active:border-secondary border-primary rounded',
    },
    position: {
      left: 'rounded-l',
      right: 'rounded-r',
    },
  },
  defaultVariants: { disabled: false }
})

const inputBaseClass =
  'h-8 w-8 sm:w-10 sm:h-10 text-center text-primary text-lg border-y border-primary bg-cta-secondary [&::-webkit-inner-spin-button]:appearance-none hover:outline-none focus:outline-none'
export const inputClasses = cva(inputBaseClass, {
  variants: {
    disabled: {
      true: 'bg-disabled-secondary',
      false: '',
    },
  },
  defaultVariants: { disabled: false }
})
