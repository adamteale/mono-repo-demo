import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TmOrderDetail } from './tm-order-detail'
import { defaultProps } from './tm-order-detail.mock'

describe('templates/tm-order-detail', () => {
  it('should render the component correctly', () => {
    const { getByTestId, getByText } = render(<TmOrderDetail {...defaultProps} />)

    expect(getByTestId('or-order-detail')).toBeInTheDocument()
    expect(getByTestId('or-order-summary')).toBeInTheDocument()
    expect(getByText(defaultProps.copyright)).toBeInTheDocument()
  })
})
