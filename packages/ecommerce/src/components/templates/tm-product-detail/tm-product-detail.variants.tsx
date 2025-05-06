import { cva } from 'class-variance-authority'

const imageInteractiveContainerBaseClass = 'aspect-square mr-4 2xl:mr-0 h-max 3xl:h-125 xl:col-span-2 2xl:col-span-1'

export const imageInteractiveContainerClasses = cva(imageInteractiveContainerBaseClass, {
  variants: {
    firstTwo: {
      true: '2xl:h-170 2xl:col-span-2',
      false: '2xl:h-auto 2xl:aspect-square 2xl:col-span-1',
    },
  },
})

const imageInteractiveBaseClass = 'min-w-115 xl:max-w-150 2xl:max-w-none 2xl:min-w-0'

export const imageInteractiveClasses = cva(imageInteractiveBaseClass, {
  variants: {
    firstTwo: {
      true: '2xl:w-140',
      false: '2xl:w-110',
    },
  },
})
