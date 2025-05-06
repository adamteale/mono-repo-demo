import { UiState } from 'instantsearch.js'
import { history } from 'instantsearch.js/es/lib/routers'
import { RouterProps } from 'instantsearch.js/es/middlewares'
import { environment } from '../config/environment'

/**
 * This custom routing is used to map the uiState/filters into a user and SEO friendly
 * URL using `paths` instead of query params for the active refinements
 *
 * If this functionality is not needed, just enabling the `routing` prop to true
 * will enable algolia to update the query params with each refinement
 */

// Pages where the query param `q` should be enabled
const SEARCH_PAGES = ['catalog', 'search']
const CONCATENATE_STRING = '-or-'
const indexName = environment.algolia.indexName ?? ''

/**
 * These filter keys should ideally come from the CMS
 * given the herierarchy of the provider, it makes it not possible
 * for the filter to be passed down into the provider from the CMS
 */
const filtersKeys = {
  'variants.brand': { type: 'list', title: 'Brands', key: 'brand' },
  'variants.price.amount': { type: 'list-range', title: 'Price', key: 'price' },
  'variants.color.key': { type: 'color', title: 'Color', key: 'color' },
  'variants.size': { type: 'size', title: 'Size', key: 'size' },
  categories: { type: 'list', title: '', key: 'categories' },
}

export const routing: RouterProps = {
  router: history({
    createURL: ({ qsModule, location, routeState }) => {
      const paths = location.pathname.split('/').filter(Boolean)
      // this should either be /catalog or /search when refinements are active.
      let basePath = paths[0] ?? ''
      // we dont want to append query params if a user search in a page that isnt the catalog template
      const isSearchPage = paths[0]?.includes(SEARCH_PAGES[0]) || paths[0]?.includes(SEARCH_PAGES[1])

      if (!isSearchPage) {
        // if is not search or catalog page
        // return the current url
        return location.href
      }

      const queryParameters: Record<string, string> = {}
      const refinementList = routeState as Record<string, string[]> | undefined
      const refinements = []

      if (refinementList) {
        for (const key of Object.keys(refinementList)) {
          const currentRefinement = refinementList[key]
          const filterData = filtersKeys[key as keyof typeof filtersKeys]

          if (filterData) {
            let name = filterData.title.toLowerCase() ?? key

            let finalValue
            if (filterData.type === 'list-range') {
              finalValue = currentRefinement.join(',')
            } else {
              finalValue = currentRefinement.join(CONCATENATE_STRING)
            }

            if (key === 'categories') {
              // the category should be the first path after `/catalog`
              refinements.unshift(finalValue)
            } else {
              refinements.push(`${name}-${finalValue}`)
            }
          }
        }
      }

      if (isSearchPage) {
        if (routeState.query) {
          queryParameters.query = encodeURIComponent(!routeState.query)
        }

        queryParameters.page = (routeState.page as string) || '1'
      }

      const qs = qsModule.stringify(queryParameters, {
        addQueryPrefix: true,
        arrayFormat: 'repeat',
      })

      const finalRefinements = refinements.length > 0 ? `/${refinements.join('/')}` : ''

      return `/${basePath}${finalRefinements}${qs}`
    },
    parseURL: ({ qsModule, location }) => {
      const { query = '', page } = qsModule.parse(location.search.slice(1))
      // the first element should be `/catalog`
      const [_, ...pathname] = location.pathname.split('/').filter(Boolean)
      const refinements: Record<string, string[]> = {}

      pathname.forEach((path) => {
        const aux = path.replaceAll(CONCATENATE_STRING, ',').split('-')
        const [filterKey, value] = aux
        const keys = Object.keys(filtersKeys)
        const filter = keys.find((f) => {
          const filterData = filtersKeys[f as keyof typeof filtersKeys]
          return filterData.title.toLowerCase() === filterKey.toLowerCase()
        })

        if (!filter && !refinements['categories']) {
          refinements['categories'] = [path]
        } else if (filter) {
          refinements[filter] = decodeURIComponent(value).split(',')
        }
      })

      return {
        query: decodeURIComponent(query as string),
        page: page as string,
        ...refinements,
      } as UiState
    },
  }),
  stateMapping: {
    stateToRoute: (uiState) => {
      const indexUiState = uiState[indexName]
      const refinements = indexUiState.refinementList
      const filters = Object.keys(filtersKeys).reduce((acc, key) => {
        const value = refinements ? refinements[key] : null

        if (value) {
          acc[key] = value
        }

        return acc
      }, {} as Record<string, string[]>)

      return {
        q: indexUiState.query ?? '',
        page: indexUiState.page,
        ...filters,
      } as UiState
    },
    routeToState: (routeState) => {
      const stateKeys = Object.keys(routeState).filter((key) => key !== 'page' && key !== 'query')
      const refinements: any = {}

      for (const key of stateKeys) {
        if (routeState[key]) {
          refinements[key] = routeState[key]
        }
      }

      return {
        [indexName]: {
          page: routeState.page,
          query: routeState.query,
          refinementList: refinements,
        },
      } as unknown as UiState
    },
  },
}
