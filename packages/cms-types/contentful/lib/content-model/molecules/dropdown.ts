import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'

interface TypeDropdownFields {
  title: EntryFieldTypes.Symbol
  content: EntryFieldTypes.RichText
  initiallyOpen?: EntryFieldTypes.Boolean
}

export type TypeDropdownSkeleton = EntrySkeletonType<TypeDropdownFields, 'mlDropdown'>

export type ContentfulDropdown = Entry<TypeDropdownSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
