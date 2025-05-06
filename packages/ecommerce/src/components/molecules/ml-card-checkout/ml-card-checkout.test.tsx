import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { MlCardCheckoutProps } from './ml-card-checkout.types'
import { MlCardCheckout } from './ml-card-checkout'

const defaultProps: MlCardCheckoutProps = {
  title: 'Title',
  subtitle: 'subtitle',
  body: 'body',
  button: { children: 'Button' },
  className: '',
  icon: 'check',
  bottomText: 'bottomText',
}

describe('molecules/ml-card-checkout', () => {
  it('should render correctly', () => {
    const { getByText } = render(<MlCardCheckout {...defaultProps} />)
    expect(getByText(defaultProps.title as string)).toBeInTheDocument()
    expect(getByText(defaultProps.subtitle as string)).toBeInTheDocument()
    expect(getByText(defaultProps.button?.children?.toString() as string)).toBeInTheDocument()
    expect(getByText(defaultProps.body as string)).toBeInTheDocument()
    expect(getByText(defaultProps.bottomText as string)).toBeInTheDocument()
  })
})
