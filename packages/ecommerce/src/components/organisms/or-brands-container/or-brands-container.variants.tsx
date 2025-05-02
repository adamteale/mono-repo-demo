import { cva } from 'class-variance-authority'

const containerBaseClass = 'container flex flex-col'

export const containerClasses = cva(containerBaseClass, {
  variants: {
    showLink: {
      true: 'gap-8 sm:py-20 md:gap-10 lg:py-16 xl:py-16 xl:gap-12',
      false: 'gap-6 py-10 px-6 sm:px-8 md:gap-10 md:py-16 md:px-16 xl:gap-12 xl:py-24 xl:px-32',
    },
  },
  defaultVariants: { showLink: false },
})

const headerContainerBaseClass = 'flex flex-row items-center'

export const headerContainerClasses = cva(headerContainerBaseClass, {
  variants: {
    showLink: {
      true: 'justify-between xl:max-w-[74rem]',
      false: 'justify-center',
    },
  },
  defaultVariants: { showLink: false },
})

const titleBaseClass = 'text-primary text-start tracking-0.1'

export const titleClasses = cva(titleBaseClass, {
  variants: {
    showLink: {
      true: 'py-4 text-xl font-bold',
      false: 'text-lgx md:text-xl xl:text-2xl',
    },
  },
  defaultVariants: { showLink: false },
})

const brandsContainerBaseClass = 'flex flex-row flex-wrap justify-center overflow-hidden'

export const brandsContainerClasses = cva(brandsContainerBaseClass, {
  variants: {
    showLink: {
      true: 'gap-y-6 gap-x-6 max-h-[29.25rem] sm:max-h-[19rem] md:justify-between md:gap-y-10 md:max-h-[20rem] lg:justify-center lg:gap-x-[1.6875rem] xl:gap-y-12 xl:gap-x-12 xl:max-h-[20.5rem] xl:max-w-[74rem]',
      false: 'gap-y-4 gap-x-4 xl:gap-x-auto xl:flex-nowrap xl:justify-between xl:items-center xl:self-stretch',
    },
  },
  defaultVariants: { showLink: false },
})
