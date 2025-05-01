import { AtBadge, AtLink } from '../../../atoms'
import { OrPopUpBasket } from '../../or-pop-up-basket'
import { BasketIconProps } from '../or-header.types'
import { OrPopupProductAdded } from '../../or-popup-product-added'

export const BasketIcon = ({
  basketRef,
  linkProps = { href: '/basket' },
  basketTotalQuantity,
  isBasketDisplayed,
  popUpBasket,
  basketProductNotification,
  handleBasketMouseEnter,
  handleBasketMouseLeave,
  className = '',
}: BasketIconProps) => {
  const showPopUpBasket = !basketProductNotification && isBasketDisplayed && popUpBasket
  return (
    <div ref={basketRef} className={`${basketProductNotification ? 'relative' : ''}`}>
      {/* from viewports > 1024 */}
      <div
        className={`hidden lg:block relative h-6 ${className}`}
        onMouseEnter={handleBasketMouseEnter}
        onMouseLeave={handleBasketMouseLeave}
        data-testid="basket-icon-desktop"
      >
        {basketTotalQuantity > 0 && (
          <div className="relative">
            <AtBadge
              quantity={basketTotalQuantity}
              className="absolute left-3.5 -bottom-3.5 z-20"
              dataTestId="basket-quantity-desktop"
            />
          </div>
        )}

        {!showPopUpBasket && <AtLink {...linkProps} className="text-primary" iconProps={{ type: 'shopping-cart' }} />}

        {showPopUpBasket && (
          <div className="relative">
            <AtLink
              {...linkProps}
              className="!text-icon-active !hover:text-icon-active"
              iconProps={{ type: 'shopping-cart' }}
            />
            <OrPopUpBasket
              {...popUpBasket}
              dataTestId="pop-up-basket-container-desktop"
              className="min-w-[24rem] right-0"
            />
          </div>
        )}
      </div>

      {/* from viewports < 1024 */}
      <div className={`block static lg:hidden lg:relative h-6 ${className}`} data-testid="basket-icon-mobile">
        {basketTotalQuantity > 0 && (
          <div className="relative">
            <AtBadge
              quantity={basketTotalQuantity}
              className="absolute left-3.5 -bottom-3.5 z-20"
              dataTestId="basket-quantity-mobile"
            />
          </div>
        )}
        {!showPopUpBasket && (
          <>
            <AtLink
              onClick={handleBasketMouseEnter}
              className="hidden sm:block text-primary"
              iconProps={{ type: 'shopping-cart' }}
            />
            <AtLink {...linkProps} className="sm:hidden text-primary" iconProps={{ type: 'shopping-cart' }} />
          </>
        )}
        {showPopUpBasket && (
          <div className="relative">
            <AtLink onClick={handleBasketMouseEnter} className="text-primary" iconProps={{ type: 'shopping-cart' }} />
            <OrPopUpBasket
              {...popUpBasket}
              dataTestId="pop-up-basket-container-mobile"
              className="min-w-[24rem] right-0"
            />
          </div>
        )}
      </div>
      {!!basketProductNotification && (
        <OrPopupProductAdded {...basketProductNotification} className="absolute inline-block mt-12 right-0 z-10" />
      )}
    </div>
  )
}
