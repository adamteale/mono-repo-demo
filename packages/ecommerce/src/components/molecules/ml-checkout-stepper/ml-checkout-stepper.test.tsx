import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { MlCheckoutStepper } from './ml-checkout-stepper'
import { MlCheckoutStepperProps } from './ml-checkout-stepper.types'

const defaultProps: MlCheckoutStepperProps = {
  steps: [
    {
      label: 'Shipping',
      step: '1',
      isActive: true,
    },
    {
      label: 'Payment',
      step: '2',
      isActive: false,
    },
    {
      label: 'Order Review',
      step: '3',
      isActive: false,
    },
  ],
}

describe('molecules/ml-checkout-stepper', () => {
  it('should render correctly', () => {
    const { getByRole, getAllByRole } = render(<MlCheckoutStepper {...defaultProps} />)
    expect(getByRole('list')).toBeInTheDocument()
    expect(getAllByRole('listitem')).toHaveLength(defaultProps.steps.length)
  })
})
