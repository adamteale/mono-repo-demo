import { Entry, EntryFieldTypes, EntrySkeletonType } from 'contentful'
import { TypeStepSkeleton } from '../semantics/step'

interface TypeStepperFields {
  steps?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeStepSkeleton>>
}

export type TypeStepperSkeleton = EntrySkeletonType<TypeStepperFields, 'tmStepper'>

export type ContentfulStepper = Entry<TypeStepperSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
