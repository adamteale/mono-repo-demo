import { CMSMenuItem } from '../molecules'
import { CMSRichText } from '../organisms'

type LegalSupportBlocks = CMSRichText

export interface CMSLegalSupport {
  title: string
  menuTitle: string
  menuItems: Array<CMSMenuItem>
  blocks: Array<LegalSupportBlocks>
}
