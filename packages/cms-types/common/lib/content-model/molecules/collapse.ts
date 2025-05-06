import { CMSDropdown } from "./dropdown"
export interface CMSCollapse {
  dropdownElements: CMSDropdown[]
  hasBackgroundColor?: boolean
  showDivider?: boolean
  dividerPosition?: 'top' | 'bottom'
  initiallyOpenIndex?: number
  contentTypeId?: string
}
