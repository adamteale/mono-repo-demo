import { cva } from 'class-variance-authority'

const baseClasses = {
  button:
    'focus:outline-none flex items-center justify-between border border-primary bg-surface-primary transition-all disabled:cursor-default disabled:text-cta-content-disabled disabled:border-secondary px-4 py-2 w-35',
  optionsContainer: 'absolute z-10 mt-1 transition-all shadow bg-surface-primary flex flex-col w-35 max-h-[11.75rem]',
  optionButton: 'hover:bg-surface-secondary px-4 py-2 h-9 transition-colors focus:outline-none flex',
}

export const buttonClasses = cva(baseClasses.button, {
  variants: {
    optionsShown: {
      true: 'rounded-t',
      false: 'rounded',
    },
  },
  defaultVariants: { optionsShown: false },
})

export const optionsContainerClasses = cva(baseClasses.optionsContainer, {
  variants: {
    optionsShown: {
      true: 'visible',
      false: 'opacity-0 invisible',
    },
    moreThanFiveOptions: {
      true: 'p-1 overflow-y-scroll ml-dropdown-quantity-scrollbar rounded',
      false: 'rounded-b',
    },
  },
  defaultVariants: { optionsShown: false, moreThanFiveOptions: false },
})

export const optionButtonClasses = cva(baseClasses.optionButton, {
  variants: {
    moreThanFiveOptions: {
      true: 'rounded-sm',
      false: '',
    },
  },
  defaultVariants: { moreThanFiveOptions: false },
})
