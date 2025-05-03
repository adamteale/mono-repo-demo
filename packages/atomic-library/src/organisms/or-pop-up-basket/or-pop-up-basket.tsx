import { Fragment } from 'react'
import { AtButtonVariants, AtDivider, AtLink } from '@components-library/common'
import { OrPopUpBasketProps } from './or-pop-up-basket.types'
import { basketContainerClasses, itemsContainerClasses } from './or-pop-up-basket.variants'
import { MlCardBasket, MlCardBasketType } from '../../molecules'

export const OrPopUpBasket = ({
  dataTestId = '',
  items,
  leftButton,
  originalSubtotalPrice,
  rightButton,
  itemsLabel,
  subtotalPrice,
  title,
  subtotalPriceLabel,
  isVisible = true,
  className = '',
  handleCloseBasket,
}: OrPopUpBasketProps) => {
  return (
    <div className={`${basketContainerClasses({ visible: isVisible })} ${className}`} data-testid={dataTestId}>
      {/* Header */}
      <div className="flex flex-row gap-2 items-center">
        <h4 className="text-left text-primary text-xl font-medium mr-2">{title}</h4>
        {itemsLabel && <span className="text-primary">{itemsLabel}</span>}
      </div>

      {items && items.length > 0 && <AtDivider className="my-4" />}

      {/* Items */}
      {items && items.length > 0 && (
        <div className={itemsContainerClasses({ multipleItems: items.length > 1 })}>
          {items.map((item, index) => {
            return (
              <Fragment key={`basket-card-${item.index}`}>
                <div className="mr-4">
                  <MlCardBasket
                    {...item}
                    showInputQuantity={true}
                    className="bg-contain block"
                    content={MlCardBasketType.COMPACT}
                    mobileCard={true}
                    showBottomBorder={index !== items.length - 1}
                  />
                </div>
              </Fragment>
            )
          })}
        </div>
      )}

      <AtDivider className="my-4" />

      {/* Buttons */}
      <div>
        <div className="flex justify-between mb-4">
          <h5 className="font-medium text-primary">{subtotalPriceLabel} </h5>
          <div className="text-primary text-sm sm:text-lg flex flex-row gap-1">
            {originalSubtotalPrice && <span className="line-through text-neutral-500">{originalSubtotalPrice}</span>}
            <span className="font-bold" data-testid="sub-total-price">
              {subtotalPrice}
            </span>
          </div>
        </div>
        {(leftButton || rightButton) && (
          <div className="grid grid-cols-2 gap-x-3 items-center justify-center">
            {leftButton && (
              <AtLink
                buttonStyleProps={{ variant: AtButtonVariants.SECONDARY }}
                onClick={handleCloseBasket}
                {...leftButton}
                className="!h-12"
              />
            )}
            {rightButton && (
              <AtLink
                buttonStyleProps={{ variant: AtButtonVariants.PRIMARY }}
                onClick={handleCloseBasket}
                {...rightButton}
                className="!h-12"
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
