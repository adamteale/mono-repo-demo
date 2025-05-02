import { cva } from 'class-variance-authority'

// REGULAR CARD
const regularBaseClasses = {
  container:
    'flex flex-row items-start w-full h-full bg-surface-primary text-primary overflow-hidden px-4 py-5 md:gap-6',
}

export const regularContainerClasses = cva(regularBaseClasses.container, {
  variants: { showBottomBorder: { true: 'border-b-[0.0313rem] border-secondary', false: '' } },
})

// COMPACT CARD
const compactBaseClasses = {
  container:
    'flex flex-row items-start w-full h-full bg-surface-primary text-primary overflow-hidden px-4 py-4 whitespace-nowrap',
  content: 'relative flex flex-col w-full gap-2',
  headerCard: 'relative flex flex-row items-start gap-3',
  informativeMessage: 'absolute z-10 top-0 left-0 ml-2 mt-2',
  imageLink: 'w-full h-[8.5rem]',
  image: 'h-[8.5rem] w-full object-contain',
  body: 'flex flex-col w-full overflow-hidden',
  detailsContainer: 'flex flex-col w-full gap-3',
  title: 'text-base w-fit md:max-w-[calc(100%-1.5rem)]',
  sku: 'flex flex-row text-sm md:leading-5 whitespace-nowrap gap-1',
  minorDetails: 'flex flex-col text-sm gap-1 font-normal w-fit',
  priceContainer: 'hidden flex-row gap-2 items-center text-lg',
  originalPrice: 'text-quaternary line-through decoration-1 text-sm',
  originalPrinceQuantity: 'flex gap-2 items-end text-lg flex-col',
}

export const compactContainerClasses = cva(compactBaseClasses.container, {
  variants: {
    showBottomBorder: {
      true: 'border-b-[0.0313rem] border-secondary',
      false: '',
    },
    mobileCard: {
      true: '',
      false: 'md:gap-4',
    },
  },
  defaultVariants: { showBottomBorder: false, mobileCard: false },
})

export const compactContentClasses = cva(compactBaseClasses.content, {
  variants: {
    mobileCard: {
      true: '',
      false: 'md:flex-row md:gap-4',
    },
  },
  defaultVariants: { mobileCard: false },
})

export const compactHeaderCardClasses = cva(compactBaseClasses.headerCard, {
  variants: {
    mobileCard: {
      true: '',
      false: 'md:max-w-[11.71875rem]',
    },
  },
  defaultVariants: { mobileCard: false },
})

export const compactInformativeMessageClasses = cva(compactBaseClasses.informativeMessage, {
  variants: {
    mobileCard: {
      true: '',
      false: 'md:text-base',
    },
  },
  defaultVariants: { mobileCard: false },
})

export const compactImageLinkClasses = cva(compactBaseClasses.imageLink, {
  variants: {
    mobileCard: {
      true: '',
      false: 'md:w-44 md:h-44',
    },
  },
  defaultVariants: { mobileCard: false },
})

export const compactImageClasses = cva(compactBaseClasses.image, {
  variants: {
    mobileCard: {
      true: '',
      false: 'md:h-full',
    },
  },
  defaultVariants: { mobileCard: false },
})

export const compactBodyClasses = cva(compactBaseClasses.body, {
  variants: {
    mobileCard: {
      true: '',
      false: 'md:flex-row',
    },
  },
  defaultVariants: { mobileCard: false },
})

export const compactDetailsContainerClasses = cva(compactBaseClasses.detailsContainer, {
  variants: {
    mobileCard: {
      true: '',
      false: 'md:justify-between',
    },
  },
  defaultVariants: { mobileCard: false },
})

export const compactTitleBaseClasses = cva(compactBaseClasses.title, {
  variants: {
    mobileCard: {
      true: '',
      false: 'md:text-lg',
    },
  },
  defaultVariants: { mobileCard: false },
})

export const compactSkuClasses = cva(compactBaseClasses.sku, {
  variants: {
    mobileCard: {
      true: '',
      false: 'md:text-base',
    },
  },
  defaultVariants: { mobileCard: false },
})

export const compactMinorDetailsClasses = cva(compactBaseClasses.minorDetails, {
  variants: {
    mobileCard: { true: '', false: 'md:text-base' },
  },
  defaultVariants: { mobileCard: false },
})

export const compactPriceContainerClasses = cva(compactBaseClasses.priceContainer, {
  variants: {
    mobileCard: {
      true: '',
      false: 'md:flex',
    },
  },
  defaultVariants: { mobileCard: false },
})
export const compactOriginalPriceClasses = cva(compactBaseClasses.originalPrice, {
  variants: {
    mobileCard: {
      true: '',
      false: 'md:text-lg',
    },
  },
  defaultVariants: { mobileCard: false },
})

export const compactOriginalPrinceQuantityClasses = cva(compactBaseClasses.originalPrinceQuantity, {
  variants: {
    mobileCard: {
      true: '',
      false: 'md:hidden md:text-lgx',
    },
  },
  defaultVariants: { mobileCard: false },
})
