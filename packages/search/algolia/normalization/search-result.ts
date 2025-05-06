import Link from 'next/link'

import { OrSearchItem } from '@components-library/ecommerce'
import { getProductUrl } from '../services'
import { AlgoliaHit } from '../types'

export const normalizeSearchResult = (result: AlgoliaHit, slugKey: string, placeholderImage: string): OrSearchItem => {
  const firstVariant = result.variants[0]

  const image = {
    src: firstVariant.image?.src ?? placeholderImage,
    alt: result.name ?? 'Product Name',
  }

  const price = firstVariant.price?.formatted ?? ''

  const searchResult: OrSearchItem = {
    slug: result.slug,
    name: result.name ?? '',
    link: {
      href: getProductUrl({ id: result.objectID, slug: result.slug, slugKey }),
      linkWrapper: Link,
    },
    description: result.description ?? '',
    image,
    price,
  }

  return searchResult
}
