import { cva } from 'class-variance-authority'
import { classes } from '../../utils/cva'
import { AtButtonSize } from './at-button.types'

export const buttonVariants = (size?: AtButtonSize, isLoading?: boolean) => {
  const primary = {
    base: 'bg-cta-fill-primary text-cta-content-primary',
    hover: 'hover:bg-original-600',
    disabled: isLoading
      ? 'disabled:bg-cta-fill-primary disabled:pointer-events-none'
      : 'disabled:bg-neutral-300 disabled:pointer-events-none',
    active: 'active:bg-neutral-800 active:text-cta-content-primary',
  }

  const secondary = {
    base: 'bg-transparent text-cta-content-secondary border border-cta-primary',
    hover: 'hover:bg-neutral-100',
    disabled: 'disabled:text-cta-content-disabled disabled:pointer-events-none disabled:border-feedback-default',
    active: 'active:bg-fill-cta-tertiary active:text-cta-content-secondary active:border active:border-cta-primary',
  }

  const tertiary = {
    base: 'text-cta-content-secondary',
    hover: 'hover:underline hover:decoration-2 hover:underline-offset-4 hover:decoration-cta-primary',
    disabled:
      'disabled:text-feedback-default disabled:underline disabled:decoration-2 disabled:pointer-events-none disabled:underline-offset-4 disabled:decoration-feedback-default',
    active: 'active:text-cta-content-secondary active:underline active:opacity-80',
  }

  const quartenary = {
    base: 'bg-cta-fill-tertiary text-cta-content-secondary',
    hover: 'hover:bg-neutral-50 hover:text-cta-content-secondary',
    disabled: isLoading
      ? 'disabled:bg-cta-fill-tertiary disabled:text-feedback-default disabled:pointer-events-none'
      : 'disabled:bg-feedback-disabled disabled:text-cta-content-disabled disabled:pointer-events-none',
    active: 'active:bg-neutral-100 active:text-cta-content-secondary',
  }

  let sizeClass = ''

  switch (size) {
    case AtButtonSize.SMALL:
      sizeClass = 'h-12 text-sm'
      break
    case AtButtonSize.LARGE:
      sizeClass = 'h-14 text-base'
      break
    default:
      sizeClass = 'h-12 md:h-14 text-sm md:text-base'
  }

  return cva(
    // base classes
    `transition-colors w-full pl-6 pr-6 pt-4 pb-4 tracking-0.125 rounded-lg font-bold flex items-center justify-center leading-4 ${sizeClass}`,
    {
      variants: {
        variant: {
          primary: classes(primary),
          secondary: classes(secondary),
          tertiary: classes(tertiary),
          quartenary: classes(quartenary),
        },
      },
      defaultVariants: {
        variant: 'primary',
      },
    },
  )
}
