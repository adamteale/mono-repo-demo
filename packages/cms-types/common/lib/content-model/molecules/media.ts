import { CMSImage } from '../common/image'

export interface CMSMedia {
  imageDesktop: CMSImage
  imageTablet?: CMSImage
  imageMobile?: CMSImage
  contentTypeId?: string
}
