import { cva } from 'class-variance-authority'

const basketContainerBaseClass =
  'shadow absolute max-h-[37.5rem] mt-5 z-30 p-4 bg-surface-primary md:w-[25rem] md:rounded-lg'
export const basketContainerClasses = cva(basketContainerBaseClass, {
  variants: {
    visible: {
      true: '',
      false: 'hidden',
    },
  },
  defaultVariants: { visible: true },
})

const itemsContainerBaseClass = 'max-h-[24rem]'
export const itemsContainerClasses = cva(itemsContainerBaseClass, {
  variants: {
    multipleItems: {
      true: 'overflow-y-auto at-scrollbar',
      false: '',
    },
  },
  defaultVariants: { multipleItems: true },
})
