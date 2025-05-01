import { ImageFormat } from './ml-media.types'

// !TODO: Change this for other non-contentful CMS
export function transformImageFormat(imageUrl: string, imageFormat: ImageFormat): string {
  if (!imageFormat) {
    return imageUrl
  }

  const supportedFormats = Object.values(ImageFormat)
  if (!supportedFormats.includes(imageFormat)) {
    throw new Error(`Unsupported format. Supported formats are: ${supportedFormats.join(', ')}.`)
  }

  const separator = imageUrl.includes('?') ? '&' : '?'
  const transformedUrl = `${imageUrl}${separator}fm=${imageFormat}`
  return transformedUrl
}
