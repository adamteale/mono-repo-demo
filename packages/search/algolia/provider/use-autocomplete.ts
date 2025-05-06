import { useEffect, useMemo } from 'react'
import { LiteClient } from 'algoliasearch/lite'
import { createAutocomplete } from '@algolia/autocomplete-core'
import { getAlgoliaResults } from '@algolia/autocomplete-preset-algolia'
import { SearchActionTypes, SearchDispatch, SearchState } from './types'

export const useAutocomplete = (
  client: LiteClient,
  indexName: string,
  dispatch: SearchDispatch,
  state: SearchState,
) => {
  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        onStateChange({ state }) {
          // Synchronize the Autocomplete state with the React state.
          dispatch({
            type: SearchActionTypes.SET_AUTOCOMPLETE_STATE,
            payload: state,
          })
        },
        // @ts-expect-error autocomplete-core types are not up to date
        getSources() {
          return [
            // Use an Algolia index source.
            {
              sourceId: 'products',
              getItemInputValue({ item }) {
                return item.query
              },
              getItems() {
                return getAlgoliaResults({
                  searchClient: client,
                  queries: [
                    {
                      indexName,
                      params: {
                        hitsPerPage: 5,
                      },
                    },
                  ],
                })
              },
              getItemUrl({ item }) {
                return item.slug
              },
            },
          ]
        },
      }),
    [client, dispatch, indexName],
  )

  useEffect(() => {
    if (autocomplete && !state.autocomplete) {
      dispatch({
        type: SearchActionTypes.SET_AUTOCOMPLETE_API,
        payload: autocomplete,
      })
    }
  }, [state.autocomplete, autocomplete, dispatch])

  return autocomplete
}
