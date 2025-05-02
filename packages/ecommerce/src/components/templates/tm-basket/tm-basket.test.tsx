import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { TmBasket } from './tm-basket'
import { defaultProps, orderSummaryProps, itemsWithProps } from './tm-basket.mock'

describe('templates/tm-basket', () => {
  describe('when the basket is empty', () => {
    it('should render the empty basket state correctly', () => {
      const { getByTestId, getByText } = render(<TmBasket {...defaultProps} />)

      expect(getByTestId('total-items-summary')).toHaveTextContent(`${defaultProps.items!.length} items`)
      expect(getByTestId('title')).toHaveTextContent(defaultProps.emptyBasketLabels!.title!)
      expect(getByTestId('subtitle')).toHaveTextContent(defaultProps.emptyBasketLabels!.subtitle!)
      expect(getByText(defaultProps.emptyBasketLabels!.buttonProps!.label!)).toBeInTheDocument()
    })
  })

  describe('when the basket has items', () => {
    it('should render the basket items correctly', () => {
      const { getByTestId } = render(
        <TmBasket
          {...defaultProps}
          orderSummaryProps={orderSummaryProps}
          items={itemsWithProps}
          totalItems={itemsWithProps.length}
        />,
      )

      expect(getByTestId('total-items-summary')).toHaveTextContent(`${itemsWithProps.length} items`)
      expect(getByTestId('order-summary')).toBeInTheDocument()
      expect(getByTestId('basket-item-list')).toBeInTheDocument()
    })
  })

  describe('when carousel props are provided', () => {
    it('should render the carousel component with the provided children', () => {
      const { getByText } = render(<TmBasket {...defaultProps} />)

      expect(getByText(defaultProps.carouselProps!.children![0] as any)).toBeInTheDocument()
      expect(getByText(defaultProps.carouselProps!.children![1] as any)).toBeInTheDocument()
    })
  })
})
