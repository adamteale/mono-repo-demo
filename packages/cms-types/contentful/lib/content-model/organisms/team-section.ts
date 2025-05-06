import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeVerticalTeamSkeleton } from '../molecules/vertical-team'

interface TypeTeamSectionFields {
  title: EntryFieldTypes.Symbol
  description: EntryFieldTypes.Symbol
  teamCards: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeVerticalTeamSkeleton>>
}

export type TypeTeamSectionSkeleton = EntrySkeletonType<TypeTeamSectionFields, 'orTeamSection'>

export type ContentfulTeamSection = Entry<TypeTeamSectionSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
