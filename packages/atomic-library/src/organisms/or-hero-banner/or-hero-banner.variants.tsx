import { cva } from 'class-variance-authority'
import { OrHeroBannerAuthorTextColor, OrHeroBannerContentAlignment, OrHeroBannerLayoutType, OrHeroBannerVariant } from './or-hero-banner.types'

//HERO BANNER
const heroBannerContainerBaseClass = 'flex relative bg-surface-primary'
export const heroBannerContainerClasses = cva(heroBannerContainerBaseClass, {
  variants: {
    variant: {
      [OrHeroBannerVariant.CONTENT_BANNER]: 'flex-col-reverse',
      [OrHeroBannerVariant.IMAGE_BANNER]: '',
    },
    contentAlignment: {
      [OrHeroBannerContentAlignment.CENTER]: '',
      [OrHeroBannerContentAlignment.LEFT]: 'xl:flex-row',
      [OrHeroBannerContentAlignment.RIGHT]: 'xl:flex-row-reverse',
    },
    layoutType: {
      [OrHeroBannerLayoutType.CONTAINED]: '',
      [OrHeroBannerLayoutType.FLUID]: '',
    }
  },
  compoundVariants: [
    {
      variant: OrHeroBannerVariant.IMAGE_BANNER,
      layoutType: OrHeroBannerLayoutType.FLUID,
      class: 'w-full'
    },
    {
      variant: OrHeroBannerVariant.IMAGE_BANNER,
      layoutType: OrHeroBannerLayoutType.CONTAINED,
      class: 'w-[90rem]'
    },
    {
      variant: OrHeroBannerVariant.CONTENT_BANNER,
      layoutType: OrHeroBannerLayoutType.FLUID,
      class: 'w-[90rem]'
    },
    {
      variant: OrHeroBannerVariant.CONTENT_BANNER,
      layoutType: OrHeroBannerLayoutType.CONTAINED,
      class: 'w-[90rem]'
    }
  ],
  defaultVariants: { variant: OrHeroBannerVariant.CONTENT_BANNER, contentAlignment: OrHeroBannerContentAlignment.LEFT, layoutType: OrHeroBannerLayoutType.CONTAINED },
})

//BANNER CONTENT
const titleBaseClass = ''
export const titleClasses = cva(titleBaseClass, {
  variants: {
    variant: {
      [OrHeroBannerVariant.CONTENT_BANNER]: 'text-xl font-bold md:text-2xl xl:line-clamp-3 xl:text-3xl',
      [OrHeroBannerVariant.IMAGE_BANNER]:
        'text-xl font-bold leading-7 md:text-2xl md:leading-10 xl:text-3xl xl:leading-[3.75rem]',
    },
  },
  defaultVariants: { variant: OrHeroBannerVariant.CONTENT_BANNER },
})

const subtitleBaseClass = 'font-normal text-lg leading-6 tracking-0.1'
export const subtitleClasses = cva(subtitleBaseClass, {
  variants: {
    variant: {
      [OrHeroBannerVariant.CONTENT_BANNER]: 'xl:line-clamp-5',
      [OrHeroBannerVariant.IMAGE_BANNER]: 'md:text-xl md:leading-7',
    },
  },
  defaultVariants: { variant: OrHeroBannerVariant.CONTENT_BANNER },
})

//BANNER AUTHOR
const authorInfoContainerBaseClass = 'flex flex-col gap-2'
export const authorInfoContainerClasses = cva(authorInfoContainerBaseClass, {
  variants: {
    textColor: {
      [OrHeroBannerAuthorTextColor.PRIMARY]: 'text-primary',
      [OrHeroBannerAuthorTextColor.SECONDARY]: 'text-secondary',
    },
  },
  defaultVariants: { textColor: OrHeroBannerAuthorTextColor.PRIMARY },
})
