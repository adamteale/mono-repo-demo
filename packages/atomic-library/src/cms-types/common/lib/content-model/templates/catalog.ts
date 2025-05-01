import { CMSCategory } from '../semantics'

export interface CMSCatalog {
  category: CMSCategory
  entryTitle: string
  useFiltersAsPath?: boolean | undefined
  contentTypeId?: string
}
