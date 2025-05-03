import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeHeaderSkeleton } from '../organisms/header'
import { TypeBasketSkeleton } from '../templates/basket'
import { TypeCatalogSkeleton } from '../templates/catalog'
import { TypeFlexSkeleton } from '../templates/flex'
import { TypeFooterSkeleton } from '../organisms/footer'
import { TypeStepperSkeleton } from '../templates/stepper'
import { TypeLoginSkeleton } from '../templates/login'
import { TypeContactUsSkeleton } from '../templates/contact-us'
import { TypeCheckoutCompletedSkeleton } from '../templates/checkout-completed'

export interface TypePageFields {
  title: EntryFieldTypes.Symbol
  slug: EntryFieldTypes.Symbol
  metaDescription?: EntryFieldTypes.Symbol
  metaKeywords?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
  canonicalUrl?: EntryFieldTypes.Symbol
  noIndex?: EntryFieldTypes.Boolean
  noFollow?: EntryFieldTypes.Boolean
  socialShareImage?: EntryFieldTypes.AssetLink
  header: EntryFieldTypes.EntryLink<TypeHeaderSkeleton>
  template: EntryFieldTypes.EntryLink<
    | TypeBasketSkeleton
    | TypeCatalogSkeleton
    | TypeFlexSkeleton
    | TypeStepperSkeleton
    | TypeLoginSkeleton
    | TypeContactUsSkeleton
    | TypeCheckoutCompletedSkeleton
  >
  footer?: EntryFieldTypes.EntryLink<TypeFooterSkeleton>
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, 'pgPage'>

export type ContentfulPage = Entry<TypePageSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
