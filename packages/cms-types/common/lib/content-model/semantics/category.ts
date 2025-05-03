export interface CMSCategory {
  title: string
  reference?: string
  /** Should have this regex set on Contentful: `/^[0-9a-z-]+$/` (without the slashes) */
  slug?: string
  parent?: CMSCategory
  contentTypeId?: string
}
