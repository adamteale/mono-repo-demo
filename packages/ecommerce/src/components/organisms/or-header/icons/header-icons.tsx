import { useRef, useState } from 'react'
import { HeaderIconsProps } from '../..'
import { BasketIcon } from './basket-icon'
import { UserIcon } from './user-icon'
import { useClickOutside } from '../../../utils'
// import { FavoritesIcon } from './favorites-icon'

const DELAY_AFTER_HOVER = 500

export const HeaderIcons = ({
  popUpBasket,
  basketIconLink = { href: '/basket' },
  // favoritesIconLink = { href: '/favorites' },
  basketProductNotification,
  basketTotalItems,
  userIconLink,
}: HeaderIconsProps) => {
  const basketRef = useRef<HTMLDivElement>(null)
  const [isBasketDisplayed, setBasketDisplayed] = useState(false)
  const [basketDelayHandler, setBasketDelayHandler] = useState<NodeJS.Timeout>()

  useClickOutside(basketRef, () => setBasketDisplayed(false))

  if (popUpBasket) popUpBasket.handleCloseBasket = () => setBasketDisplayed(false)

  const handleBasketMouseLeave = () => {
    setBasketDelayHandler(
      setTimeout(() => {
        setBasketDisplayed(false)
      }, DELAY_AFTER_HOVER),
    )
  }

  const handleBasketMouseEnter = () => {
    setBasketDisplayed(true)
    if (basketDelayHandler) clearTimeout(basketDelayHandler)
  }

  return (
    <nav aria-labelledby="Courtesy Navigation" className="flex gap-3 ml-3 lg:gap-6 lg:ml-6 items-center">
      {/* <FavoritesIcon linkProps={favoritesIconLink} /> */}
      <BasketIcon
        className="flex items-center"
        basketRef={basketRef}
        linkProps={basketIconLink}
        basketTotalQuantity={basketTotalItems ?? 0}
        isBasketDisplayed={isBasketDisplayed}
        popUpBasket={popUpBasket}
        basketProductNotification={basketProductNotification}
        handleBasketMouseEnter={handleBasketMouseEnter}
        handleBasketMouseLeave={handleBasketMouseLeave}
      />
      {userIconLink?.href && <UserIcon linkProps={userIconLink} />}
    </nav>
  )
}
