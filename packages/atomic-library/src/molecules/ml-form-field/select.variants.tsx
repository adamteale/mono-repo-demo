import { cva } from 'class-variance-authority'

const inputWrapperBaseClass = 'relative rounded-lg'
export const inputWrapperClasses = cva(inputWrapperBaseClass, {
  variants: {
    disabled: {
      true: 'cursor-not-allowed',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: { disabled: false },
})

const listboxWrapperBaseClass =
  'absolute max-w-full w-full max-h-[10.25rem] py-3 px-2.5 z-50 border border-tertiary rounded-lg bg-surface-primary overflow-hidden shadow-select'
export const listboxWrapperClasses = cva(listboxWrapperBaseClass, {
  variants: {
    helpText: {
      true: 'mt-6',
      false: 'mt-3',
    },
  },
  defaultVariants: { helpText: false },
})

const listboxBaseClass = 'flex flex-col max-h-35 overflow-y-auto ml-select-scrollbar'
export const listboxClasses = cva(listboxBaseClass, {
  variants: {
    scrollbar: {
      true: 'pr-2.5',
      false: '',
    },
  },
  defaultVariants: { scrollbar: false },
})

const optionBaseClass = 'bg-surface-primary py-1.5 pl-1 hover:bg-surface-secondary text-primary text-sm rounded-tiny'
export const optionClasses = cva(optionBaseClass, {
  variants: {
    disabled: {
      true: 'text-secondary cursor-not-allowed',
      false: 'cursor-pointer',
    },
    active: {
      true: 'border border-secondary py-[0.3125rem] pl-[0.1875rem]',
      false: '',
    },
  },
  defaultVariants: { disabled: false, active: false },
})
