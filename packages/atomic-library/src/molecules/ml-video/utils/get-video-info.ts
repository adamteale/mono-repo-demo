import { MlMediaFit } from '../../ml-media'

export const getVideoId = (url: string) => {
  const youtubeMatch = url.match(youtubeUrlMatcher)
  if (youtubeMatch) {
    return { type: 'youtube', id: youtubeMatch[1] }
  }

  const vimeoMatch = url.match(vimeoUrlMatcher)
  if (vimeoMatch) {
    return { type: 'vimeo', id: vimeoMatch[1] }
  }

  const isValidVideo = validVideoMatcher.test(url)
  if (isValidVideo) {
    return { type: 'other', id: url }
  }

  return { type: 'invalid', id: '' }
}

export const getVideoThumbnail = (videoDetails: { type: string; id: string }) => {
  let thumbnailSrc = ''

  switch (videoDetails.type) {
    case 'youtube':
      thumbnailSrc = `https://img.youtube.com/vi/${videoDetails.id}/maxresdefault.jpg`
      break

    case 'vimeo':
      thumbnailSrc = `https://vumbnail.com/${videoDetails.id}_large.jpg`
      break
  }

  return {
    asBackground: true,
    fit: 'cover' as MlMediaFit,
    imageDesktop: {
      src: thumbnailSrc,
      alt: `Thumbnail for video: ${videoDetails.id}`,
    },
  }
}

export const getVideoSrc = (videoDetails: { type: string; id: string }) => {
  switch (videoDetails.type) {
    case 'youtube':
      return `https://www.youtube.com/embed/${videoDetails.id}?autoplay=1`

    case 'vimeo':
      return `https://player.vimeo.com/video/${videoDetails.id}?autoplay=1`

    case 'other':
      return videoDetails.id
  }
}

const youtubeUrlMatcher =
  /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
const vimeoUrlMatcher = /(?:vimeo\.com\/)([0-9]+)/
const validVideoMatcher = /\.(mp4|avi|mov|flv|wmv)$/i
