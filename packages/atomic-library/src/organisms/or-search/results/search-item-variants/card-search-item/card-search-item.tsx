import { useMemo } from 'react'
import { CardSearchItemProps } from './card-search-item.types'
import { AtImage, AtLink, AtTag } from '@components-library/common'

export const CardSearchItem = ({
  link,
  name,
  shortDescription,
  price,
  originalPrice,
  discountPercentage,
  image,
  discountLabel = '% Off',
  className = '',
  onClick,
}: CardSearchItemProps) => {
  const hasDiscount = useMemo(() => !!discountPercentage && !!originalPrice, [discountPercentage, originalPrice])

  return (
    <AtLink onClick={onClick} {...link}>
      <div
        className={`flex flex-row gap-4 min-h-max w-full p-3 border-[0.03125rem] border-secondary hover:ring-[0.0625rem] ring-stroke-secondary rounded-lg transition-all ${className}`}
        data-testid="result-info"
      >
        {/* Image */}
        {image && (
          <div className="w-[6.25rem] h-[6.25rem] min-w-[6.25rem] max-h-[6.25rem] relative">
            <AtImage className="h-full w-full rounded object-contain" {...image} />

            {/* Discount Tag */}
            {!!discountPercentage && (
              <AtTag
                className="absolute top-2 left-2 max-w-[5.25rem] md:!px-2 md:!py-1"
                textClassName="md:text-sm md:leading-[0.9375rem] line-clamp-1"
                text={`${discountPercentage}${discountLabel}`}
              />
            )}
          </div>
        )}

        {/* Information Container */}
        <div className="flex flex-col gap-y-2 w-full min-w-0 justify-center">
          {/* Title */}
          <div className="max-w-fit text-primary text-base font-normal leading-5" data-testid="result-name">
            <span className="line-clamp-1">{name}</span>
          </div>

          {/* Description */}
          {!!shortDescription && (
            <p className="font-normal text-quaternary text-xs leading-4 line-clamp-2" data-testid="result-description">
              {shortDescription}
            </p>
          )}

          {/* Prices Container */}
          <div className="flex flex-row items-center gap-2">
            {/* Actual Price */}
            {price && (
              <span className="text-base font-bold text-primary" data-testid="result-price">
                {price}
              </span>
            )}

            {/* Strikethrough Price */}
            {hasDiscount && (
              <span
                className="line-through text-base leading-5 font-light text-quaternary"
                data-testid="result-original-price"
              >
                {originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </AtLink>
  )
}
