import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TmCheckout, TmCheckoutProps } from './tm-checkout'

const tmCheckoutProps: TmCheckoutProps = {
  children: 'content',
  copyright: 'copyright text',
  orderSummaryProps: {
    totalPrice: '$0.00',
  },
}

describe('templates/tm-shiping-info', () => {
  it('should render the component correctly', () => {
    const { getByTestId, getByText } = render(<TmCheckout {...tmCheckoutProps} />)
    expect(getByTestId('tm-checkout')).toBeInTheDocument()
    expect(getByTestId('or-order-summary')).toBeInTheDocument()
    expect(getByText(tmCheckoutProps.copyright)).toBeInTheDocument()
  })
})
