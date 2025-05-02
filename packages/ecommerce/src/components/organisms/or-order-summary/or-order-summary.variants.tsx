import { cva } from 'class-variance-authority'

const containerBaseClass = 'bg-surface-primary rounded-lg border-secondary px-4 py-6 md:px-6 md:py-8'

export const containerClasses = cva(containerBaseClass, {
  variants: {
    withCart: {
      true: 'border-0 md:border space-y-6 md:space-y-8',
      false: 'space-y-5 border-[0.5px]',
    },
  },
  defaultVariants: { withCart: false },
})

const itemListContainerBaseClass = 'space-y-6'

export const itemListContainerClasses = cva(itemListContainerBaseClass, {
  variants: {
    withCart: {
      true: '',
      false: 'py-5',
    },
    defaultVariants: { withCart: false },
  },
})

const cartItemListContainerBaseClass = 'md:max-h-[34.0625rem] md:pr-6'

export const cartItemListContainerClasses = cva(cartItemListContainerBaseClass, {
  variants: {
    moreThanTwoItems: {
      true: 'overflow-y-auto compact-cart-scrollbar',
      false: '',
    },
  },
  defaultVariants: { moreThanTwoItems: false },
})
