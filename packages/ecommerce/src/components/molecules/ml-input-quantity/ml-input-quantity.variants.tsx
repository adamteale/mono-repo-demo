import { cva } from 'class-variance-authority'
import { MlInputQuantitySize } from './ml-input-quantity.types'

const buttonBaseClass = 'flex items-center justify-center border-[0.03125rem] border-secondary bg-cta-fill-tertiary transition-colors'
export const buttonClasses = cva(buttonBaseClass, {
  variants: {
    disabled: {
      true: 'bg-feedback-disabled',
      false: 'active:border-primary active:border-[0.0625rem]',
    },
    position: {
      left: 'rounded-l',
      right: 'rounded-r',
    },
    size: {
        [MlInputQuantitySize.LARGE]: 'h-[2.5625rem] w-[2.5625rem]',
        [MlInputQuantitySize.SMALL]: 'h-[2.0625rem] w-[2.0625rem]'
    }
  },
  defaultVariants: { disabled: false }
})

const inputBaseClass =
  'text-center text-lg font-medium rounded-none border-y-[0.03125rem] border-secondary bg-cta-secondary [&::-webkit-inner-spin-button]:appearance-none hover:outline-none focus:outline-none transition-colors'
export const inputClasses = cva(inputBaseClass, {
  variants: {
    disabled: {
      true: 'text-cta-content-disabled',
      false: 'text-primary',
    },
    size: {
        [MlInputQuantitySize.LARGE]: 'h-[2.5625rem] w-10',
        [MlInputQuantitySize.SMALL]: 'h-[2.0625rem] w-8'
    }
  },
  defaultVariants: { disabled: false }
})