import { cva } from 'class-variance-authority'

const arrowBaseClass = 'absolute top-[40%] z-20 transform transition-opacity ease-in-out delay-150'
export const arrowClasses = cva(arrowBaseClass, {
  variants: {
    showArrows: {
      true: 'opacity-100',
      false: 'opacity-0',
    },
    position: {
      left: 'justify-self-start left-16',
      right: 'justify-self-end right-16',
    },
  },
  defaultVariants: { showArrows: false, position: 'right' },
})
