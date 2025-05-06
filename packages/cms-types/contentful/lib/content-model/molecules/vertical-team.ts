import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeMediaSkeleton } from './media'

interface TypeVerticalTeamFields {
  image: EntryFieldTypes.EntryLink<TypeMediaSkeleton>
  teamName: EntryFieldTypes.Symbol
  role: EntryFieldTypes.Symbol
  roleDescription: EntryFieldTypes.Symbol
}

export type TypeVerticalTeamSkeleton = EntrySkeletonType<TypeVerticalTeamFields, 'mlVerticalTeam'>

export type ContentfulVerticalTeam = Entry<TypeVerticalTeamSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
