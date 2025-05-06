import { cva } from 'class-variance-authority'

const searchboxContainerBaseClass = `
    transition ease-out duration-500
    flex flex-col 2xl:hidden
    w-full h-full
    fixed top-0 right-0 z-50
    bg-surface-primary
    px-7 py-5
    overflow-y-scroll
`

export const searchboxContainerClasses = cva(searchboxContainerBaseClass, {
  variants: {
    showMobileSearchbox: {
      true: '',
      false: 'translate-x-[110vw]',
    },
  },
})

const menuItemBaseClass =
  'xl:max-w-max pb-4 pt-4 text-white hover:text-white xl:py-0 xl:text-cta-primary xl:hover:text-cta-primary'

export const menuItemClasses = cva(menuItemBaseClass, {
  variants: {
    isDesktopMenuOpen: {
      true: 'after:block after:w-full  after:-bottom-2 xl:after:bg-navbar-content-primary after:left-0 after:rounded',
      false: '',
    },
    isFirstItem: {
      true: '',
      false:
        'border-t-[0.0325rem] border-secondary xl:border-none hover:after:bg-transparent xl:hover:after:bg-navbar-content-primary',
    },
  },
})

export const menuItemLabelClasses = cva('', {
  variants: {
    isDesktop: {
      true: 'text-primary',
      false: '',
    },
    isMenuOpen: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    { isDesktop: true, isMenuOpen: true, className: 'font-normal' },
    { isDesktop: true, isMenuOpen: false, className: 'font-normal' },
    { isDesktop: false, isMenuOpen: true, className: 'font-bold' },
    { isDesktop: false, isMenuOpen: false, className: 'font-normal' },
  ],
})

const hamburgerMenuContainerBaseClass = 'h-screen container bg-navbar-content-primary xl:hidden'

export const hamburgerMenuContainerClasses = cva(hamburgerMenuContainerBaseClass, {
  variants: {
    isMobileMenuOpen: {
      true: 'block',
      false: 'hidden',
    },
  },
  defaultVariants: { isMobileMenuOpen: false },
})

const mobileHamburgerIconAndLogoWrapperBaseClass = 'flex flex-row items-center xl:hidden'

export const mobileHamburgerIconAndLogoWrapperClasses = cva(mobileHamburgerIconAndLogoWrapperBaseClass, {
  variants: {
    isMobileMenuOpen: {
      true: 'gap-3 md:gap-8',
      false: 'gap-8',
    },
  },
  defaultVariants: { isMobileMenuOpen: false },
})
