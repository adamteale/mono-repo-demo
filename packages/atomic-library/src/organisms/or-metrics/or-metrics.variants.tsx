import { cva } from 'class-variance-authority'
import { OrMetricsContentAlignment } from './or-metrics.types'

const metricsAndImageContainerBaseClass = 'flex flex-col items-center gap-16 xl:gap-40 3xl:gap-56'
export const metricsAndImageContainerClasses = cva(metricsAndImageContainerBaseClass, {
  variants: {
    contentAlignment: {
      [OrMetricsContentAlignment.LEFT]: 'lg:flex-row-reverse',
      [OrMetricsContentAlignment.RIGHT]: 'lg:flex-row',
    },
  },
  defaultVariants: { contentAlignment: OrMetricsContentAlignment.RIGHT },
})

const metricContainerBaseClass = 'flex flex-col gap-3 items-center text-center lg:items-start lg:text-left'
export const metricContainerClasses = cva(metricContainerBaseClass, {
  variants: {
    isArrayLengthThree: {
      true: '',
      false: '',
    },
    isIndexTwo: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      isArrayLengthThree: true,
      isIndexTwo: true,
      class: 'col-span-2 justify-self-center',
    },
  ],
  defaultVariants: { isArrayLengthThree: false, isIndexTwo: false },
})
