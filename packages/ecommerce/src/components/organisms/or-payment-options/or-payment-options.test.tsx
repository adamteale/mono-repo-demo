import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { OrPaymentOptions } from './or-payment-options'
import { defaultProps } from './or-payment-options.mock'

describe('organisms/or-payment-options', () => {
  it('should renders all payment options correctly', () => {
    const { getByText } = render(<OrPaymentOptions {...defaultProps} />)

    expect(getByText('Order Options')).toBeInTheDocument()
    expect(getByText('Debit/Credit Card')).toBeInTheDocument()
    expect(getByText('Paypal')).toBeInTheDocument()
    expect(getByText('Apple Pay')).toBeInTheDocument()
    expect(getByText('Review Order')).toBeInTheDocument()
    expect(getByText('Pay With Paypal')).toBeInTheDocument()
  })

  it('should render based on the checked property', () => {
    const { getByText, queryByTestId } = render(<OrPaymentOptions {...defaultProps} />)

    const paypalDescription = getByText(
      'You will be redirected to the PayPal website to complete your purchase securely. When you have finished, you will be returned to this page to review and place your order.',
    )
    expect(paypalDescription).toBeInTheDocument()

    const reviewOrderButton = getByText('Review Order')
    expect(reviewOrderButton).toBeInTheDocument()

    const form = queryByTestId('payment-option-0-form-container')
    expect(form).toBeInTheDocument()
  })

  it('should not render the form or description for unchecked payment options', () => {
    const props = { ...defaultProps }
    props.paymentOptions[0].radioProps.checked = false
    props.paymentOptions[1].radioProps.checked = false

    const { queryByText, queryByTestId } = render(<OrPaymentOptions {...props} />)

    const paypalDescription = queryByText(
      'You will be redirected to the PayPal website to complete your purchase securely. When you have finished, you will be returned to this page to review and place your order.',
    )
    expect(paypalDescription).toBeNull()

    const form = queryByTestId('payment-option-0-form-container')
    expect(form).toBeNull()
  })
})
