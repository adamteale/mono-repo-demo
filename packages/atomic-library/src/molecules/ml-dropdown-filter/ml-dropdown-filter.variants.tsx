import { cva } from 'class-variance-authority'

const labelBaseClasses = 'text-primary'

export const labelClasses = cva(labelBaseClasses, {
  variants: {
    list: {
      true: 'mt-6',
      false: '',
    },
  },
  defaultVariants: { list: false },
})
