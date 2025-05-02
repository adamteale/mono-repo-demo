import { describe, it, expect, vi, beforeEach } from 'vitest'
import { addToBasket, updateBasketItem, removeItemFromBasket } from './services'
import { addProductToBasket, updateItemQuantity, deleteItemFromBasket } from '../../../services/basket'
import { basketMock } from '../../../test/fixtures'
import * as storageUtils from '../../storage-state'
import * as authTokenHandler from '../customer/auth-token-handler'
import { LOCAL_BASKET_ID } from '../../../context'
import { Basket } from '../../../types'

beforeEach(() => {
  vi.mock('../../storage-state', () => ({
    getStorageState: vi.fn(),
    setStorageState: vi.fn(),
  }))
  vi.mock('../customer/auth-token-handler', () => ({ resolveAccessToken: vi.fn() }))
  vi.mock('../../../services/basket', () => ({
    addProductToBasket: vi.fn(),
    algoliaClient: vi.fn(),
    updateItemQuantity: vi.fn(),
    deleteItemFromBasket: vi.fn(),
  }))
})

const accessTokenMock = 'token123'

describe('add-to-basket', () => {
  it('should add product to basket and update local storage if basket ID does not exist', async () => {
    const productIdMock = '123'
    const quantityMock = 2
    const basketIdMock = null

    vi.mocked(storageUtils.getStorageState).mockReturnValue(basketIdMock)
    vi.mocked(authTokenHandler.resolveAccessToken).mockResolvedValue(accessTokenMock)
    vi.mocked(addProductToBasket).mockResolvedValue({ basket: basketMock, itemAdded: false })

    const result = await addToBasket(productIdMock, quantityMock)

    expect(storageUtils.getStorageState).toHaveBeenCalledWith(LOCAL_BASKET_ID)
    expect(authTokenHandler.resolveAccessToken).toHaveBeenCalled()
    expect(addProductToBasket).toHaveBeenCalledWith(
      productIdMock,
      quantityMock,
      accessTokenMock,
      basketIdMock,
      undefined,
    )
    expect(storageUtils.setStorageState).toHaveBeenCalledWith(LOCAL_BASKET_ID, basketMock.id)
    expect(result?.basket).toEqual(basketMock)
  })
})

describe('update-basket', () => {
  it('should update item quantity in the basket', async () => {
    const basketItemIdMock = 'item123'
    const quantityMock = 3
    const basketIdMock = 'basket123'
    const updatedBasketMock: Basket = {
      id: 'some-id',
      totalPrice: { amount: 100, currency: 'USD', formatted: '$100' },
      totalItems: quantityMock,
      items: [
        {
          basketItemId: basketIdMock,
          quantity: quantityMock,
          name: 'fakeName',
          price: {
            amount: 100,
            formatted: '$100',
            currency: 'USD',
          },
          totalPrice: {
            amount: 100,
            formatted: '$100',
            currency: 'USD',
          },
          sku: 'fakeSku',
          slug: 'fakeSlug',
          productId: 'fakeProductId',
          shortDescription: 'fakeShortDescription',
          originalPrice: {
            amount: 100,
            formatted: '$100',
            currency: 'USD',
          },
          image: {
            src: 'fakeImageUrl',
          },
        },
      ],
    }

    vi.mocked(storageUtils.getStorageState).mockReturnValue(basketIdMock)
    vi.mocked(authTokenHandler.resolveAccessToken).mockResolvedValue(accessTokenMock)
    vi.mocked(updateItemQuantity).mockResolvedValue(updatedBasketMock)

    const result = await updateBasketItem(basketItemIdMock, quantityMock)

    expect(storageUtils.getStorageState).toHaveBeenCalledWith(LOCAL_BASKET_ID)
    expect(authTokenHandler.resolveAccessToken).toHaveBeenCalled()
    expect(updateItemQuantity).toHaveBeenCalledWith(basketItemIdMock, quantityMock, basketIdMock, accessTokenMock)
    expect(result).toEqual(updatedBasketMock)
  })
})

describe('remove-item-from-basket', () => {
  it('should remove an item from the basket', async () => {
    const basketItemIdMock = 'item123'
    const basketIdMock = 'basket123'
    vi.mocked(storageUtils.getStorageState).mockReturnValue(basketIdMock)
    vi.mocked(authTokenHandler.resolveAccessToken).mockResolvedValue(accessTokenMock)
    vi.mocked(deleteItemFromBasket).mockResolvedValue(basketMock)

    const result = await removeItemFromBasket(basketItemIdMock)

    expect(storageUtils.getStorageState).toHaveBeenCalledWith(LOCAL_BASKET_ID)
    expect(authTokenHandler.resolveAccessToken).toHaveBeenCalled()
    expect(deleteItemFromBasket).toHaveBeenCalledWith(basketIdMock, basketItemIdMock, accessTokenMock)
    expect(result).toEqual(basketMock)
  })
})
