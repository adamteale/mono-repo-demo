import { CMSLink } from '../common/link'

export interface CMSMenuSubItem {
  titleLabel: string
  titleUrl?: string
  children: CMSLink[]
  contentTypeId?: string
}
