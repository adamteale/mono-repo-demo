import { cva } from 'class-variance-authority'

const containerBaseClass = 'flex flex-col bg-white rounded-lg border border-stone-200 gap-6 py-4'

export const containerClasses = cva(containerBaseClass, {
  variants: {
    isDescriptionAbsent: {
      true: 'px-4 md:px-6',
      false: 'px-3',
    },
    checked: {
      true: 'cursor-default',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: {
    isDescriptionAbsent: false,
    checked: false,
  },
})

const radioWrapperBaseClass = 'flex flex-row'

export const radioWrapperClasses = cva(radioWrapperBaseClass, {
  variants: {
    descriptionChecked: {
      true: '',
      false: 'items-center',
    },
  },
  defaultVariants: {
    descriptionChecked: false,
  },
})

const bodyWrapperBaseClass = 'flex ml-2 justify-between w-full'

export const bodyWrapperClasses = cva(bodyWrapperBaseClass, {
  variants: {
    checked: {
      true: 'md:flex-row',
      false: 'flex-row',
    },
    descriptionChecked: {
      true: 'gap-8',
      false: 'items-center',
    },
  },
  defaultVariants: {
    checked: false,
    descriptionChecked: false,
  },
})

const singleImageWrapperBaseClass = 'mb-3 flex-row gap-2 order-1'

export const singleImageWrapperClasses = cva(singleImageWrapperBaseClass, {
  variants: {
    checked: {
      true: 'flex md:hidden',
      false: 'hidden',
    },
  },
  defaultVariants: {
    checked: false,
  },
})

const multipleImagesWrapperBaseClass = 'flex-row gap-2 min-w-[5.625rem] h-fit'

export const multipleImagesWrapperClasses = cva(multipleImagesWrapperBaseClass, {
  variants: {
    checked: {
      true: 'hidden md:flex',
      false: 'flex',
    },
    isMultipleImages: {
      true: 'hidden md:flex',
      false: 'flex',
    },
  },
  defaultVariants: {
    checked: false,
    isMultipleImages: false,
  },
})
