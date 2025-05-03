import { useRange } from 'react-instantsearch'

/**
 * This title should come from CMS
 */
const mappedTitles = {
  'variants.price.amount': 'Price',
}

export const useRangeFilter = (attribute: string) => {
  const { start, range, refine } = useRange({ attribute })
  const { min, max } = range

  const toMaxValue = (Number.isFinite(start[1]) ? start[1] : max) as number
  const fromMaxValue = (Number.isFinite(start[0]) ? start[0] : min) as number

  const from = Math.max(min as number, fromMaxValue)
  const to = Math.min(max as number, toMaxValue)

  const clearRange = () => refine([from, to])
  const refineFn = (min: number, max: number) => refine([min, max])

  const filter = {
    type: 'list-range',
    key: attribute,
    title: mappedTitles[attribute as keyof typeof mappedTitles] ?? attribute,
  }

  return [filter, refineFn, clearRange] as const
}
