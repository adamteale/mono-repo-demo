import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeMediaSkeleton } from './media'

interface TypeVideoPlayerFields {
  video?: EntryFieldTypes.AssetLink
  videoUrl?: EntryFieldTypes.Symbol
  thumbnail?: EntryFieldTypes.EntryLink<TypeMediaSkeleton>
}

export type TypeVideoPlayerSkeleton = EntrySkeletonType<TypeVideoPlayerFields, 'mlVideoPlayer'>

export type ContentfulVideo = Entry<TypeVideoPlayerSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
