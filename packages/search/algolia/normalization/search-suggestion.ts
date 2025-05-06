import Link from 'next/link'

import { OrSearchItem } from '@components-library/ecommerce'
import { getProductUrl } from '../services'
import { AlgoliaHit } from '../types'
import { AutocompleteCollection, BaseItem } from '@algolia/autocomplete-core'

export const normalizeSearchSuggestion = (
  suggestions: AutocompleteCollection<BaseItem & AlgoliaHit>[] | undefined,
  slugKey: string,
  placeholderImage: string,
): OrSearchItem[] => {
  const results: OrSearchItem[] = []

  if (!suggestions) {
    return results
  }

  suggestions.forEach((collection) => {
    collection.items.forEach((item) => {
      const firstVariant = item.variants[0]

      const image = {
        src: firstVariant.image?.src ?? placeholderImage,
        alt: item.name ?? 'Product Name',
      }

      const price = firstVariant.price?.formatted ?? ''

      results.push({
        slug: item.slug,
        name: item.name,
        link: {
          href: getProductUrl({ id: item.objectID, slug: item.slug, slugKey }),
          linkWrapper: Link,
        },
        description: item.description,
        image,
        price,
      })
    })
  })

  return results
}
