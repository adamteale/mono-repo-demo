import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'

interface TypeStepFields {
  label: EntryFieldTypes.Symbol
  template: EntryFieldTypes.EntryLink<any> // Change this with new checkout templates
}

export type TypeStepSkeleton = EntrySkeletonType<TypeStepFields, 'smStep'>

export type ContentfulStep = Entry<TypeStepSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
