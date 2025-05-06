export type MimeType =
  | 'image/png'
  | 'image/jpeg'
  | 'image/gif'
  | 'image/webp'
  | 'image/svg+xm'
  | 'image/tiff'
  | 'video/mp4'

export type ContentfulFile = {
  title: string
  description?: string
  file: {
    url: string
    details: {
      image?: {
        width: number
        height: number
      }
    }
    contentType: MimeType
  }
}
