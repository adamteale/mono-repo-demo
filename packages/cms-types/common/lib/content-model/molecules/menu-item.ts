import { CMSMenuSubItem } from './menu-sub-item'

export interface CMSMenuItem {
  titleLabel: string
  titleUrl?: string
  children?: CMSMenuSubItem[]
  contentTypeId?: string
}
