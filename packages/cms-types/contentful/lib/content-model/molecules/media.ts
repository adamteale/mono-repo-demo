import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'

interface TypeMediaFields {
  imageDesktop: EntryFieldTypes.AssetLink
  imageTablet?: EntryFieldTypes.AssetLink
  imageMobile?: EntryFieldTypes.AssetLink
}

export type TypeMediaSkeleton = EntrySkeletonType<TypeMediaFields, 'mlMedia'>

export type ContentfulMedia = Entry<TypeMediaSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
