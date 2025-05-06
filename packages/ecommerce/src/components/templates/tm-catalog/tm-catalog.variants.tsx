import { cva } from "class-variance-authority";

const containerBaseClass = 'container flex flex-col py-8 md:py-10 xl:py-12 gap-8 md:gap-10'
export const containerClasses = cva(containerBaseClass, {
    variants: {
        hasQuery: {
            true: 'mt-8',
            false: ''
        }
    },
    defaultVariants: { hasQuery: false }
})

const desktopFilterContainerBaseClass = 'container grid py-8 md:py-10 lg:py-10 xl:py-12 lg:gap-12 xl:grid-cols-3 3xl:grid-cols-4'
export const desktopFilterContainerClasses = cva(desktopFilterContainerBaseClass, {
    variants: {
        isLoading: {
            true: 'cursor-progress',
            false: ''
        }
    },
    defaultVariants: { isLoading: true }
})