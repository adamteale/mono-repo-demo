import { CMSMedia } from '../molecules'

export interface CMSMetrics {
  image?: CMSMedia
  title?: string
  description?: string
  metricArray: { value: string; title: string; description: string }[]
  align?: 'left' | 'right'
  contentTypeId?: string
}
