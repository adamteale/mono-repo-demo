import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TmCheckoutCompleted } from './tm-checkout-completed'
import { TmCheckoutCompletedProps } from './tm-checkout-completed.types'

const mockProps = {
  successfullOrderTitle: 'title',
  subtitle: 'subtitle',
  body: 'body text',
  bottomText: 'bottom text',
  copyright: 'copyright',
} as TmCheckoutCompletedProps

describe('templates/tm-checkout-completed', () => {
  it('should render the component correctly', () => {
    const { getByTestId } = render(<TmCheckoutCompleted {...mockProps} />)

    expect(getByTestId('ml-card-checkout')).toBeInTheDocument()
    expect(getByTestId('copyright')).toBeInTheDocument()
  })
})
