import { Filter } from '../search-service'
import { GlobalConfig } from '../../context/global'
import { CMSGlobalConfig } from '@cms-types/common'

export const normalizeGlobalData = (globalConfig?: CMSGlobalConfig | null): GlobalConfig => {
  if (!globalConfig) return {}

  return {
    filters: globalConfig.filters?.map((filter) => filter).filter(Boolean) as Filter[],
    sortByFilterOptions: globalConfig.sortByFilterOptions,
    catalogLabels: globalConfig.catalogLabels,
    colorPickerLabels: globalConfig.colorPickerLabels,
  }
}
