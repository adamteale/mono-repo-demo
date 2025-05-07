import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { AtStepperItem } from './at-stepper-item'

const defaultStepperItemProps = {
  label: 'Shipping',
  step: '1',
  isActive: true,
}

describe('atoms/at-stepper-item', () => {
  describe('when is active', () => {
    it('should render correctly', () => {
      const { getByRole, getByText } = render(<AtStepperItem {...defaultStepperItemProps} />)
      expect(getByRole('stepper')).toBeInTheDocument()

      const stepElement = getByText(defaultStepperItemProps.step)
      const label = getByText(defaultStepperItemProps.label)
      const divider = getByRole('divider')

      expect(stepElement.parentElement).toHaveClass('bg-quaternary border-primary')
      expect(stepElement).toHaveClass('text-white')
      expect(label).toHaveClass('text-primary')
      expect(divider).toHaveClass('border-primary')
    })
  })

  describe('when is disabled', () => {
    it('should render correctly', () => {
      const { getByRole, getByText } = render(<AtStepperItem {...defaultStepperItemProps} isActive={false} />)
      expect(getByRole('stepper')).toBeInTheDocument()

      const stepElement = getByText(defaultStepperItemProps.step)
      const label = getByText(defaultStepperItemProps.label)
      const divider = getByRole('divider')

      expect(stepElement.parentElement).toHaveClass('bg-transparent border-cta-disabled')
      expect(stepElement).toHaveClass('text-cta-content-disabled')
      expect(label).toHaveClass('text-cta-content-disabled')
      expect(divider).toHaveClass('border-cta-disabled')
    })
  })
})
