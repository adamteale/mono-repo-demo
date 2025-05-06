import { cva } from 'class-variance-authority'

const ringBaseClass = 'flex justify-center items-center h-6 w-6 border rounded-3xl'

export const ringClasses = cva(ringBaseClass, {
  variants: {
    isActive: {
      true: 'bg-quaternary border-primary',
      false: 'bg-transparent border-cta-disabled',
    },
  },
  defaultVariants: {
    isActive: false,
  },
})

const stepTextBaseClass = 'text-center text-base'

export const stepTextClasses = cva(stepTextBaseClass, {
  variants: {
    isActive: {
      true: 'text-white',
      false: 'text-cta-content-disabled',
    },
  },
  defaultVariants: {
    isActive: false,
  },
})

export const labelTextClasses = cva('', {
  variants: {
    isActive: {
      true: 'text-primary',
      false: 'text-cta-content-disabled',
    },
  },
  defaultVariants: {
    isActive: false,
  },
})

const dividerBaseClass = 'w-full border-[0.03125rem]'

export const dividerClasses = cva(dividerBaseClass, {
  variants: {
    isActive: {
      true: 'border-primary',
      false: 'border-cta-disabled',
    },
  },
  defaultVariants: {
    isActive: false,
  },
})
