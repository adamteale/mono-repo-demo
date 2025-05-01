import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { AtRadio } from './at-radio'
import { defaultProps, mockTitle, mockDescription } from './at-radio.mock'

describe('atoms/at-radio', () => {
  describe('when is active', () => {
    it('should render correctly with default props', () => {
      const { getByTestId, queryByText } = render(<AtRadio {...defaultProps} />)

      expect(queryByText(mockTitle.title)).not.toBeInTheDocument()
      expect(queryByText(mockDescription.description)).not.toBeInTheDocument()
      expect(getByTestId('at-radio')).not.toBeDisabled()
    })

    it('should render correctly if title is provided', () => {
      const { getByText } = render(<AtRadio {...defaultProps} {...mockTitle} />)

      expect(getByText(mockTitle.title)).toBeInTheDocument()
    })

    it('should render correctly if description is provided', () => {
      const { getByText } = render(<AtRadio {...defaultProps} {...mockDescription} />)

      expect(getByText(mockDescription.description)).toBeInTheDocument()
    })
  })

  describe('when is disabled', () => {
    it('should render correctly when disabled prop is true', () => {
      const { getByTestId } = render(<AtRadio {...defaultProps} disabled={true} />)

      expect(getByTestId('at-radio')).toBeDisabled()
    })
  })
})
