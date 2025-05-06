import { cva } from 'class-variance-authority'

const containerBaseClass = 'container h-screen bg-navbar-content-primary xl:hidden'
export const containerClasses = cva(containerBaseClass, {
  variants: {
    isMobileMenuOpen: {
      true: 'block',
      false: 'hidden',
    },
  },
  defaultVariants: { isMobileMenuOpen: false },
})
