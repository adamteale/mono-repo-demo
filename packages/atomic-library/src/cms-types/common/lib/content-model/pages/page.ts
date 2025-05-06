export interface CMSPage {
  fields: {
    [key: string]: any
  }
  tags?: string[]
  contentTypeId: string
  updatedAt: string
  locale?: string | string[]
}
