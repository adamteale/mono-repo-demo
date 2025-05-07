import { cva } from 'class-variance-authority'

const resultContainerBaseClass =
  'absolute max-w-full w-full border border-neutral-300 z-50 py-3 px-2.5 shadow-select bg-surface-primary rounded-lg overflow-hidden'

export const resultsContainerClasses = cva(resultContainerBaseClass, {
  variants: {
    hasHelpText: {
      true: 'mt-1',
      false: 'mt-3',
    },
  },
  defaultVariants: { hasHelpText: false },
})

const resultBaseClass =
  'bg-surface-primary py-2 pl-2 hover:bg-surface-secondary text-primary text-sm rounded-tiny cursor-pointer'
export const resultClasses = cva(resultBaseClass, {
  variants: {
    active: {
      true: 'border border-secondary py-[0.4375rem] pl-[0.4375rem]',
      false: '',
    },
  },
  defaultVariants: { active: false },
})
