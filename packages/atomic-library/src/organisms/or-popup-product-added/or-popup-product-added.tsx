import {
  AtButtonSize,
  AtButtonVariants,
  AtDivider,
  AtImage,
  AtLink,
  Color,
} from '@components-library/common'
import { OrPopupProductAddedProps } from './or-popup-product-added.types'
import { colorDotClasses } from './or-popup-product-added.variants'

export const OrPopupProductAdded = ({
  productName,
  productVariants,
  price,
  image,
  quantity,
  addedToBasketLabel = 'Product added to your cart',
  colorLabel = 'Color:',
  quantityLabel = 'Quantity:',
  dataTestId = 'or-popup-product-added',
  className = '',
  viewBasketButtonProps,
}: OrPopupProductAddedProps) => {
  return (
    <div data-testid={dataTestId} className={`${className}`}>
      <div className="relative h-36 w-full max-w-[20.625rem] md:max-w-[34.375rem] p-2 md:p-3 flex bg-white shadow-popup rounded-lg">
        {image && (
          <div className="w-30 h-30 relative flex-shrink-0 mr-3">
            <AtImage className="object-cover h-full w-full" {...image} />
          </div>
        )}
        <div className="hidden md:flex flex-col w-48 justify-between p-2">
          <div className="flex text-primary justify-between">
            <span className="font-medium truncate">{productName}</span>
            <span className="font-medium text-lg md:pl-1 lg:pl-2">{price}</span>
          </div>
          <div className="flex flex-col gap-y-0.5 lg:gap-y-1">
            {productVariants && Object.keys(productVariants).length > 0
              ? Object.keys(productVariants)
                  .map((variantKey, index) => {
                    const key = variantKey as keyof typeof productVariants
                    if (!productVariants[key]) return null
                    if (key === 'color') {
                      const colorKey = productVariants[key] as Color
                      return (
                        <div className="flex items-center" key={key}>
                          <span key={`color-${index}`} className="font-medium mr-1 text-sm text-primary leading-4">
                            {colorLabel}
                          </span>
                          <div className={colorDotClasses({ colorKey })}/>
                        </div>
                      )
                    }
                    return (
                      <div className="flex flex-row text-sm text-primary leading-4 capitalize" key={key}>
                        <span className="font-medium mr-1">{`${variantKey}:`}</span>
                        <span>{productVariants[key]}</span>
                      </div>
                    )
                  })
                  .filter(Boolean)
              : null}
            <div className="flex flex-row text-sm text-primary leading-4">
              <span className="font-medium mr-1">{quantityLabel}</span>
              <span>{quantity}</span>
            </div>
          </div>
        </div>
        <AtDivider className="flex h-[calc(100%_-_1rem)] border-l border-secondary-light mx-4 py-2 self-center" />
        <div className="flex flex-col w-44 md:w-48 py-2 md:px-2 justify-between">
          <span className="font-medium leading-4 text-base text-primary text-center">{addedToBasketLabel}</span>
          <AtLink
            buttonStyleProps={{ variant: AtButtonVariants.PRIMARY, size: AtButtonSize.SMALL }}
            {...viewBasketButtonProps}
          />
        </div>
      </div>
    </div>
  )
}
