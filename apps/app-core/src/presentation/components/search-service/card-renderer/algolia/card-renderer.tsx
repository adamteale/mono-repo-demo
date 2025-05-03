import { MlColorPickerColorVariation, MlProductCard } from '@components-library/ecommerce'
import { SearchResponse } from '../../'
import { useBasket } from '../../../../context/basket/use-basket'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { AtImageProps } from '@components-library/common'
import { PLACEHOLDER_IMAGE_PATH } from '../../../../utils/normalization/files/constants'

export const cardRenderer = (product: SearchResponse, onBrandSelect?: (update: string) => void) => {
  return <MlProductCardRenderer hit={product} key={product.objectID} />
}

interface MlProductCardRendererProps {
  hit: SearchResponse
}

export const MlProductCardRenderer = ({ hit }: MlProductCardRendererProps) => {
  const { addProductToBasket } = useBasket()
  const [image, setImage] = useState<AtImageProps>({
    src: PLACEHOLDER_IMAGE_PATH,
    alt: hit.name ?? 'Product Image',
  })
  const [selectedColor, setSelectedColor] = useState(-1)

  const { images, colorsValues, sizes } = useMemo(() => {
    const colorsAdded = new Set()
    const sizesAdded = new Set()
    const colorsValues: MlColorPickerColorVariation[] = []
    const images: string[] = []

    hit?.variants?.forEach((variant) => {
      if (!variant.image?.src || colorsAdded.has(variant.color?.key)) return
      images.push(variant.image.src)
      colorsValues.push({
        colorKey: variant.color?.key,
        colorName: variant.color?.label,
      } as MlColorPickerColorVariation)
      colorsAdded.add(variant.color?.key)
      if (variant?.size) {
        sizesAdded.add(variant.size)
      }
    })

    return {
      images,
      colorsValues,
      sizes: Array.from(sizesAdded).length,
    }
  }, [hit])

  const addToBasket = useMemo(() => {
    /**
     * We don't want to add a product to the basket
     * in the catalog page if there are multiple combinations
     * of variants (color + size)
     */
    if (colorsValues.length >= 1 && sizes >= 1) {
      return undefined
    }

    let variant = hit.variants[0]

    if (selectedColor >= 0) {
      variant = hit.variants[selectedColor]
    }

    return () => addProductToBasket(hit.productId, 1, variant.sku, variant.variantId)
  }, [colorsValues.length, sizes, hit.variants, hit.productId, selectedColor, addProductToBasket])

  useEffect(() => {
    if (hit && hit.variants) {
      setImage({
        src: hit?.variants?.[0].image?.src ?? PLACEHOLDER_IMAGE_PATH,
        alt: hit.name ?? 'Product Image',
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hit])

  const handleColorClick = (index: number) => {
    setImage({
      src: images[index] ?? PLACEHOLDER_IMAGE_PATH,
      alt: hit.name ?? 'Product Image',
    })
    setSelectedColor(index)
  }

  const colors = {
    options: colorsValues,
    selectedColor: colorsValues?.[selectedColor]?.colorKey,
    onClick: handleColorClick,
  }

  const price = hit?.variants?.[0].price?.formatted ?? ''
  const brand = hit?.variants?.[0].brand ?? ''
  const brandLink = brand ? { label: brand, href: `products/${hit.slug}` } : undefined

  return (
    <MlProductCard
      name={hit.name ?? 'Product Name'}
      brand={brandLink}
      image={image}
      colors={colors}
      description={hit.description ?? ''}
      addToBasketOnClick={addToBasket}
      link={{
        href: `products/${hit.slug}`,
        linkWrapper: Link,
      }}
      price={price}
      outOfStock={false}
    />
  )
}
