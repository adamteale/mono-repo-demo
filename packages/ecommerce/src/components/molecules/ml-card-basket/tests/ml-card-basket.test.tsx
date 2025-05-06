import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import { MlCardBasket } from '../ml-card-basket'
import { cardBasketCompactMock, cardBasketMock } from './mocks/ml-card-basket.mock'

describe('molecules/ml-card-basket', () => {
  describe('when the default component is created', () => {
    it('should render correctly with full props', () => {
      const { getByText, getByAltText, getAllByTestId } = render(
        <MlCardBasket
          {...cardBasketMock}
          description={'Description if necessary.'}
          originalPrice={'144'}
          informativeMessage={'Last Pair'}
        />,
      )
      const sizeLabel = `${cardBasketCompactMock.sizeLabel}:`
      const colorLabel = `${cardBasketCompactMock.colorLabel}:`
      const closeButtons = getAllByTestId('delete-item-button')

      expect(getByAltText(cardBasketMock.image?.alt as string)).toBeInTheDocument()
      expect(getByText('Last Pair')).toBeInTheDocument()
      expect(getByText(cardBasketMock.eyebrowHeadline as string)).toBeInTheDocument()
      expect(getByText(cardBasketMock.title)).toBeInTheDocument()
      expect(getByText('Description if necessary.')).toBeInTheDocument()
      expect(getByText(sizeLabel)).toBeInTheDocument()
      expect(getByText(`${cardBasketMock.size}`)).toBeInTheDocument()
      expect(getByText(colorLabel)).toBeInTheDocument()
      expect(closeButtons.length).toBe(1)
      expect(closeButtons[0]).toBeInTheDocument()
    })

    it('should render correctly missing props', () => {
      const { getByText, getByAltText, getAllByTestId } = render(<MlCardBasket {...cardBasketMock} />)
      const sizeLabel = `${cardBasketCompactMock.sizeLabel}:`
      const colorLabel = `${cardBasketCompactMock.colorLabel}:`
      const closeButtons = getAllByTestId('delete-item-button')

      expect(getByAltText(cardBasketMock.image?.alt as string)).toBeInTheDocument()
      expect(getByText(cardBasketMock.eyebrowHeadline as string)).toBeInTheDocument()
      expect(getByText(cardBasketMock.title)).toBeInTheDocument()
      expect(getByText(sizeLabel)).toBeInTheDocument()
      expect(getByText(`${cardBasketMock.size}`)).toBeInTheDocument()
      expect(getByText(colorLabel)).toBeInTheDocument()
      expect(closeButtons.length).toBe(1)
      expect(closeButtons[0]).toBeInTheDocument()
    })
  })

  describe('when the user clicks on delete item button', () => {
    const onClose = vi.fn()
    it('should execute onDeleteItem handler', () => {
      const { getAllByTestId } = render(<MlCardBasket {...cardBasketMock} onDeleteItem={onClose} />)
      const closeButtons = getAllByTestId('delete-item-button')
      fireEvent.click(closeButtons[0])
      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })

  describe('when the compact component is created', () => {
    it('should render correctly', () => {
      const sizeLabel = `${cardBasketCompactMock.sizeLabel}:`
      const colorLabel = `${cardBasketCompactMock.colorLabel}:`

      const { getByText, getAllByText, getByAltText, getAllByTestId } = render(
        <MlCardBasket
          {...cardBasketCompactMock}
          originalPrice={'144'}
          informativeMessage={'Last Pair'}
          sku={'12244'}
          showSku={true}
        />,
      )
      const originalPrices = getAllByText('144')
      const prices = getAllByText(cardBasketCompactMock.price)
      const closeButtons = getAllByTestId('delete-item-button')

      expect(getByAltText(cardBasketCompactMock.image?.alt as string)).toBeInTheDocument()
      expect(getByText('Last Pair')).toBeInTheDocument()
      expect(getByText(cardBasketCompactMock.title)).toBeInTheDocument()
      expect(getByText(`${cardBasketCompactMock.skuLabel!}`)).toBeInTheDocument()
      expect(getByText('12244')).toBeInTheDocument()
      expect(getByText(sizeLabel)).toBeInTheDocument()
      expect(getByText(`${cardBasketCompactMock.size}`)).toBeInTheDocument()
      expect(getByText(colorLabel)).toBeInTheDocument()
      expect(originalPrices.length).toBe(1)
      expect(originalPrices[0]).toBeInTheDocument()
      expect(prices.length).toBe(1)
      expect(prices[0]).toBeInTheDocument()
      expect(closeButtons.length).toBe(1)
      expect(closeButtons[0]).toBeInTheDocument()
    })
  })

  describe('when the user clicks on delete item button', () => {
    const onClose = vi.fn()
    it('should execute onDeleteItem handler', () => {
      const { getAllByTestId } = render(<MlCardBasket {...cardBasketMock} onDeleteItem={onClose} />)
      const closeButtons = getAllByTestId('delete-item-button')
      fireEvent.click(closeButtons[0])
      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })
})
