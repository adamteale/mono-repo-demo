import { cva } from 'class-variance-authority'
import { OrFormColumn } from './or-form.types'

const titleBaseClass = 'text-base mb-3'
export const titleClasses = cva(titleBaseClass, {
  variants: {
    columns: {
      [OrFormColumn.ONE]: 'font-bold leading-5 tracking-[0.2px] sm:text-lg sm:leading-6 sm:tracking-[0.2px]',
      [OrFormColumn.TWO]: 'font-medium leading-6 tracking-[0.5px] sm:text-2xl sm:leading-10 sm:tracking-[0.5px]',
      [OrFormColumn.FOUR]: 'font-medium leading-6 tracking-[0.5px] sm:text-2xl sm:leading-10 sm:tracking-[0.5px]',
    },
  },
  defaultVariants: {},
})

const subtitleBaseClass = 'leading-5 tracking-[0.2px] sm:leading-6 tracking-[0.2px]'
export const subtitleClasses = cva(subtitleBaseClass, {
  variants: {
    columns: {
      [OrFormColumn.ONE]: 'text-sm sm:text-base',
      [OrFormColumn.TWO]: 'text-base font-normal',
      [OrFormColumn.FOUR]: 'text-base font-normal',
    },
  },
  defaultVariants: {},
})

const formGridBaseClass = 'grid grid-cols-1'
export const formGridClasses = cva(formGridBaseClass, {
  variants: {
    columns: {
      [OrFormColumn.ONE]: 'gap-5',
      [OrFormColumn.TWO]: 'gap-5 sm:grid-cols-2',
      [OrFormColumn.FOUR]: 'gap-5 sm:grid-cols-4',
    },
  },
  defaultVariants: { columns: OrFormColumn.ONE },
})

const spanBaseClass = 'flex justify-end'
export const spanClasses = cva(spanBaseClass, {
  variants: {
    columns: {
      [OrFormColumn.ONE]: 'col-span-1',
      [OrFormColumn.TWO]: 'col-span-2',
      [OrFormColumn.FOUR]: 'col-span-3',
    },
  },
  defaultVariants: { columns: OrFormColumn.ONE },
})
