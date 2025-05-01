import { cva } from 'class-variance-authority'

//HEADER
const brandContainerBaseClass = 'flex flex-row items-center xl:hidden'
export const brandContainerClasses = cva(brandContainerBaseClass, {
  variants: {
    isMobileMenuOpen: {
      true: 'gap-3 md:gap-8',
      false: 'gap-8',
    },
  },
  defaultVariants: { isMobileMenuOpen: false },
})

//HEADER ITEMS
const menuItemBaseClass =
  'pb-4 pt-4 text-white hover:text-white xl:max-w-max xl:py-0 xl:text-primary xl:hover:text-primary'
export const menuItemClasses = cva(menuItemBaseClass, {
  variants: {
    isMenuOpenDesktop: {
      true: 'after:block after:w-full after:-bottom-2 after:left-0 after:rounded xl:after:bg-navbar-content-primary',
      false: '',
    },
    isIndexZero: {
      true: '',
      false:
        'border-t border-secondary hover:after:bg-transparent xl:border-none xl:hover:after:bg-navbar-content-primary',
    },
  },
  defaultVariants: { isMenuOpenDesktop: false, isIndexZero: true },
})
