import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TmShippingInfo } from './tm-shipping-info'
import { tmShippingInfoProps } from './tm-shipping-info.mock'

describe('templates/tm-shiping-info', () => {
  it('should render the component correctly', () => {
    const { getByTestId, getByText } = render(<TmShippingInfo {...tmShippingInfoProps} />)
    expect(getByTestId('tm-shipping-info')).toBeInTheDocument()
    expect(getByTestId('or-order-summary')).toBeInTheDocument()
    expect(getByText(tmShippingInfoProps.copyright)).toBeInTheDocument()
  })
})
