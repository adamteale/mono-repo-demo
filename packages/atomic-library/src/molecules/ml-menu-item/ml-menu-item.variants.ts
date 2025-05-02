import { cva } from 'class-variance-authority'
import { classes } from '../../utils/cva'

const baseClass = 'flex items-center relative justify-between w-full text-primary active:font-bold'
const linkHoverClasses =
  'hover:after:block after:content-[""] hover:after:w-full after:absolute after:-bottom-2 after:bg-navbar-content-primary after:left-0 after:rounded after:h-px'

const small = {
  base: `text-base`,
  hover: `${linkHoverClasses}`,
}

const medium = {
  base: 'text-lg',
  hover: `${linkHoverClasses}`,
}

const large = {
  base: 'text-xl',
  hover: `${linkHoverClasses}`,
}

export const mlMenuItemVariants = cva(baseClass, {
  variants: {
    variant: {
      small: classes(small),
      medium: classes(medium),
      large: classes(large),
    },
  },
  defaultVariants: {
    variant: 'medium',
  },
})
