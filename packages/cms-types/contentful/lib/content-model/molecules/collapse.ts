import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeDropdownSkeleton } from './dropdown'

interface TypeCollapseFields {
  dropdownElements: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeDropdownSkeleton>>
  hasBackgroundColor?: EntryFieldTypes.Boolean
  showDivider?: EntryFieldTypes.Boolean
  dividerPosition?: EntryFieldTypes.Symbol<'top' | 'bottom'>
  initiallyOpenIndex?: EntryFieldTypes.Number
}

export type TypeCollapseSkeleton = EntrySkeletonType<TypeCollapseFields, 'mlCollapse'>

export type ContentfulCollapse = Entry<TypeCollapseSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
