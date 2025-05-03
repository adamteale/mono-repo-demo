import { CMSProduct } from '../semantics'
import { CMSHeroBanner } from './hero-banner'

export interface CMSCarousel {
  title?: string
  linkLabel?: string
  linkUrl?: string
  layout: 'default' | 'banner'
  items: CMSProduct[] | CMSHeroBanner[]
  contentTypeId?: string
}
