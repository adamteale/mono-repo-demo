import { cva } from 'class-variance-authority'

const baseClass = 'rounded-lg flex flex-row gap-[0.0313rem] transition-colors'

export const paginationClasses = cva(baseClass, {
  variants: {
    disabled: {
      true: 'bg-neutral-50',
      false: '',
    },
  },
  defaultVariants: {
    disabled: false,
  },
})
