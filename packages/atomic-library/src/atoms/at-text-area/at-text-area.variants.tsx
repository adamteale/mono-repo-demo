import { cva } from 'class-variance-authority'

const baseContainerClass = 'border relative h-[9.625rem] w-full py-3 rounded-lg'

export const containerClasses = cva(baseContainerClass, {
  variants: {
    disabled: {
      true: 'bg-secondary pointer-events-none',
      false: 'bg-surface-primary',
    },
    error: {
      true: 'border-feedback-error',
      false: '',
    },
    active: {
      true: 'border-cta-primary',
      false: 'border-cta-secondary hover:border-cta-primary',
    },
  },
  compoundVariants: [{ error: true, active: true, className: 'border-feedback-error' }],
  defaultVariants: {
    disabled: false,
    error: false,
    active: false,
  },
})
