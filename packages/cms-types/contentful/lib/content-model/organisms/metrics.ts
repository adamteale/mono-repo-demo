import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeMediaSkeleton } from '../molecules/media'

interface TypeMetricsFields {
  image?: EntryFieldTypes.EntryLink<TypeMediaSkeleton>
  title?: EntryFieldTypes.Symbol
  description?: EntryFieldTypes.Symbol
  metricArray: EntryFieldTypes.Object<{ value: string; title: string; description: string }>[]
  align?: EntryFieldTypes.Symbol<'left' | 'right'>
}

export type TypeMetricsSkeleton = EntrySkeletonType<TypeMetricsFields, 'orMetrics'>

export type ContentfulMetrics = Entry<TypeMetricsSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
