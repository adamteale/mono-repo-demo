import { environment } from '../../config/environment'

type Sort = {
  label: string
  order: 'ascendant' | 'descendant'
  sort: 'price' | 'name'
}

/**
 * Normalizes the sort options from the CMS
 * into the `items` that the algolia `useSortBy` hook expects
 * if the `value` of the index does not exist on the algolia application
 * it will crash the web app.
 */
export const normalizeSortOptions = (options: Sort[] | undefined) => {
  const indexName = environment.algolia.indexName ?? ''

  if (!options || !indexName) return []

  return options.map((option) => {
    const type = option.order === 'ascendant' ? 'asc' : 'desc'
    const sort = option.sort === 'price' ? 'price' : 'name'
    // we consider `name` `asc` as the default index name
    const value = sort === 'name' && type === 'asc' ? indexName : `${indexName}_${sort}_${type}`

    return {
      label: option.label,
      value,
    }
  })
}
