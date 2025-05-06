export interface HeadProps {
  slug: string
  baseUrl: string
  metaTitle?: string
  metaDescription?: string
  metaKeywords?: string[]
  canonicalUrl?: string
  faviconUrl?: string
  noIndex?: boolean
  noFollow?: boolean
  socialShareImageSrc?: string
  // Intended to use the Head component from Next.js
  wrapper?: React.ComponentType<any> | 'head'
}
