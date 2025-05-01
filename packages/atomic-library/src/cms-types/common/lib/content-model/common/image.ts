export interface CMSImage {
  file: {
    details: {
      image: {
        height: string
        width: string
      }
      size: number
    }
    fileName: string
    url: string
  }
  title: string
}
