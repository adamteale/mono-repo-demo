import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { OrOrderSummary, OrOrderSummaryProps } from './'

const defaultTooltipContent =
  '(e.g., “Free shipping over $50”) or the difference required to qualify (e.g., “Add $15.35 to qualify for free shipping”).'

const defaultProps: OrOrderSummaryProps = {
  title: 'Order Summary',
  totalPriceLabel: '10',
  items: [],
  orderLabelArray: [
    {
      label: 'Subtotal',
      value: '$150.50',
      tooltipContent: defaultTooltipContent,
    },
    {
      label: 'Discounts',
      value: '$0.00',
      tooltipContent: defaultTooltipContent,
    },
    {
      label: 'Shipping',
      value: '$0.00',
      tooltipContent: defaultTooltipContent,
    },
  ],
  totalPrice: '10',
  buttonProps: {
    label: 'CHECKOUT',
    href: '#',
  },
}

describe('organisms/or-order-summary', () => {
  describe('when the component is created', () => {
    it('should render correctly', () => {
      const { container } = render(<OrOrderSummary {...defaultProps} />)

      expect(container).toBeTruthy()
    })
  })
})
