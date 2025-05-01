import { CMSVideo } from '../common/video'
import { CMSMedia } from './media'

export interface CMSVideoPlayer {
  video?: CMSVideo
  videoUrl?: string
  thumbnail?: CMSMedia
  contentTypeId?: string
}
