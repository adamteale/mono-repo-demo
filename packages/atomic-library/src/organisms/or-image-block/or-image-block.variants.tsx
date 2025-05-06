import { cva } from 'class-variance-authority'

const baseClass = 'flex  flex-col'

export const containerClasses = cva(baseClass, {
  variants: {
    layout: {
      single: 'w-fit xl:w-full',
      double: 'w-full flex-col sm:flex-row gap-5 md:gap-8 xl:gap-12',
      triple: 'w-full gap-5 md:gap-8 xl:gap-12',
    },
    vertical: {
      true: '',
      false: '',
    },
    inverted: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    { layout: 'triple', vertical: false, className: 'sm:flex-row' },
    { layout: 'triple', vertical: false, inverted: true, className: 'flex-col-reverse sm:flex-row-reverse' },
    { layout: 'triple', vertical: true, inverted: true, className: 'flex-col-reverse' },
  ],
  defaultVariants: {
    layout: 'triple',
  },
})

const imagesContainerBaseClass = 'flex gap-5 max-xl:w-full md:gap-8 xl:gap-12'

export const imagesContainerClasses = cva(imagesContainerBaseClass, {
  variants: {
    vertical: {
      true: 'flex-col sm:flex-row',
      false: 'flex-col',
    },
  },

  defaultVariants: {
    vertical: false,
  },
})

const firstImageContainerBaseClass =
  'w-full h-108 md:h-110 lg:h-120 xl:max-w-126 xl:w-full xl:h-auto xl:max-h-160 xl:min-h-129 xl:aspect-[61/72]'

export const firstImageContainerClasses = cva(firstImageContainerBaseClass, {
  variants: {
    vertical: {
      true: '',
      false: '',
    },
    layout: {
      single: '',
      double: '',
      triple: '',
    },
  },
  compoundVariants: [
    { layout: 'single', vertical: false, className: 'sm:w-full md:w-full lg:w-147' },
    { layout: 'double', vertical: false, className: 'sm:min-w-68 md:min-w-79 lg:min-w-67' },
    { layout: 'triple', vertical: false, className: 'sm:min-w-68 sm:w-68 md:min-w-79 md:w-79 lg:min-w-67' },
  ],
  defaultVariants: {
    vertical: false,
  },
})

const imagesWrapperBaseClass = 'sm:min-w-68 sm:w-full md:min-w-79 md:w-full lg:min-w-0 lg:w-68'

export const imagesWrapperClasses = cva(imagesWrapperBaseClass, {
  variants: {
    vertical: {
      true: 'xl:aspect-[5/6]',
      false: '',
    },
    layout: {
      single: '',
      double: 'h-108 sm:h-full xl:min-w-60 xl:w-auto xl:max-w-68',
      triple: 'h-48 md:h-52 lg:h-84 xl:w-full xl:h-full xl:min-w-60 xl:max-w-68 xl:min-h-60 xl:max-h-70',
    },
  },
  defaultVariants: {
    vertical: false,
  },
})

const textContainerBaseClass = 'flex flex-col gap-6'

export const textContainerClasses = cva(textContainerBaseClass, {
  variants: {
    vertical: {
      true: 'w-full',
      false: 'xl:min-w-60 xl:max-w-68',
    },
    layout: {
      single: '',
      double: '',
      triple: '',
    },
  },
  compoundVariants: [{ layout: 'single', vertical: false, className: 'xl:w-full xl:max-w-none' }],
  defaultVariants: {
    vertical: false,
  },
})
