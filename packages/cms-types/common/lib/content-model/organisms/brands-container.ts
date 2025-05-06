import { CMSBrand } from '../molecules'

export interface CMSBrandsContainer {
  title: string
  seeMoreLabel?: string
  showLink: boolean
  background: 'primary' | 'secondary'
  blocks: CMSBrand[]
  contentTypeId?: string
}
