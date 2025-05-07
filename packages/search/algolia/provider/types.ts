// import { Dispatch } from 'react'
// import { AutocompleteApi, AutocompleteCollection, AutocompleteState, BaseItem } from '@algolia/autocomplete-core'
// import { AlgoliaHit } from '../types'

// export enum SearchActionTypes {
//   START_ACTION = '@start-search-action',
//   UPDATE_QUERY = '@update-query',
//   SEARCH = '@search',
//   FAIL_ACTION = '@fail-search-action',
//   SET_AUTOCOMPLETE_API = '@set-autocomplete-api',
//   SET_AUTOCOMPLETE_STATE = '@set-autocomplete-state',
// }

// export type SearchAction =
//   | { type: SearchActionTypes.START_ACTION }
//   | { type: SearchActionTypes.UPDATE_QUERY; payload?: string }
//   | { type: SearchActionTypes.SEARCH; payload?: AlgoliaResponseData }
//   | { type: SearchActionTypes.FAIL_ACTION; error: string }
//   | { type: SearchActionTypes.SET_AUTOCOMPLETE_API; payload: AutocompleteApi<BaseItem> }
//   | { type: SearchActionTypes.SET_AUTOCOMPLETE_STATE; payload: AutocompleteState<BaseItem> }

// export enum SearchContextStatus {
//   INITIAL = 'INITIAL',
//   PENDING = 'PENDING',
//   RESOLVED = 'RESOLVED',
//   REJECTED = 'REJECTED',
// }

// export type SearchDispatch = Dispatch<SearchAction>

// export interface SearchState {
//   status: SearchContextStatus
//   results?: AlgoliaResponseData
//   isResolved: boolean
//   error?: Error | string
//   autocomplete?: AutocompleteApi<BaseItem>
//   autocompleteState?: AutocompleteState<BaseItem>
//   query?: string
// }

// export interface SearchQueryDto {
//   text?: string
// }

// export interface UseSearch {
//   state: SearchState
//   search: (query: SearchQueryDto) => Promise<void>
// }

// export type SearchResponse = AlgoliaHit

// export interface AlgoliaResponseData {
//   results: SearchResponse[]
//   totalCount: number
//   totalPages: number
//   currentPage: number
//   amountPerPage: number
//   suggestions?: AutocompleteCollection<BaseItem>[]
// }
