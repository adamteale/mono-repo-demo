import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { TmStepper } from './tm-stepper'
import { defaultProps } from './tm-stepper.mock'

describe('templates/tm-stepper', () => {
  describe('when rendering', () => {
    it('should render the stepper form correctly', () => {
      const { getByTestId } = render(<TmStepper {...defaultProps} />)
      expect(getByTestId('stepper-container')).toBeInTheDocument()
    })
  })

  describe('when displaying the content', () => {
    it('should displays the steps correctly', () => {
      const { getByText } = render(<TmStepper {...defaultProps} />)

      // Verify all steps are rendered
      expect(getByText(defaultProps.steps[0].label)).toBeInTheDocument()
      expect(getByText(defaultProps.steps[1].label)).toBeInTheDocument()
      expect(getByText(defaultProps.steps[2].label)).toBeInTheDocument()

      // Verify all initial steps are inactive
      defaultProps.steps.forEach((step) => {
        expect(getByText(step.label)).toHaveClass('text-cta-content-disabled')
      })
    })

    it('should renders the children content correctly', () => {
      const { getByText } = render(<TmStepper {...defaultProps} />)
      expect(getByText('Current View')).toBeInTheDocument()
    })
  })
})
