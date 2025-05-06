import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeMediaSkeleton, TypeVideoPlayerSkeleton } from '../molecules'
import { TypeImageBlockSkeleton, TypeRichTextSkeleton } from '../organisms'
import { TypeImageInteractiveBlock } from '../organisms/image-interactive-block'

interface TypeBlogArticleFields {
  entryTitle: EntryFieldTypes.Symbol
  tagLabel?: EntryFieldTypes.Symbol
  category?: EntryFieldTypes.Symbol
  title: EntryFieldTypes.Symbol
  description: EntryFieldTypes.Text
  media: EntryFieldTypes.EntryLink<TypeMediaSkeleton>
  authorName?: EntryFieldTypes.Symbol
  authorPicture?: EntryFieldTypes.AssetLink
  authorSecionTextColor: 'primary' | 'secondary'
  publicationDate: EntryFieldTypes.Symbol
  keywords: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
  blocks?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<
      TypeRichTextSkeleton | TypeVideoPlayerSkeleton | TypeImageBlockSkeleton | TypeImageInteractiveBlock
    >
  >
}

export type TypeBlogArticleSkeleton = EntrySkeletonType<TypeBlogArticleFields, 'tmBlogArticle'>
export type ContentfulBlogArticle = Entry<TypeBlogArticleSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
