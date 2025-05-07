import { cva } from 'class-variance-authority'

const buttonBaseClass =
  'min-w-11 min-h-11 w-min h-min border-2 rounded-full flex items-center justify-center hover:outline-none transition-colors'

const ringBaseClass = 'w-8 h-8 rounded-full'

export const buttonClasses = cva(buttonBaseClass, {
  variants: {
    isSelected: {
      true: '',
      false: 'border-transparent',
    },
    isSoldOut: {
      true: 'hover:border-secondary',
      false: 'hover:border-primary',
    },
  },
  compoundVariants: [
    { isSelected: true, isSoldOut: true, className: 'border-secondary' },
    { isSelected: true, isSoldOut: false, className: 'border-primary' },
  ],
  defaultVariants: {
    isSelected: false,
    isSoldOut: false,
  },
})

export const ringClasses = cva(ringBaseClass, {
  variants: {
    isSoldOut: {
      true: 'opacity-20',
      false: '',
    },
  },
  defaultVariants: {
    isSoldOut: false,
  },
})
