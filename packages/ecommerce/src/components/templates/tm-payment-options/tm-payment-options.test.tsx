import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { defaultProps } from './tm-payment-options.mock'
import { TmPaymentOptions } from './tm-payment-options'

describe('templates/tm-payment-options', () => {
  it('should render the component correctly', () => {
    const { getByTestId, getByText } = render(<TmPaymentOptions {...defaultProps} />)

    expect(getByTestId('or-payment-options')).toBeInTheDocument()
    expect(getByTestId('or-order-summary')).toBeInTheDocument()
    expect(getByText(defaultProps.copyright)).toBeInTheDocument()
  })
})
