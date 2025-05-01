import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import { AtTextArea } from './at-text-area'

describe('atoms/at-text-area', () => {
  describe('when the component is mounted', () => {
    it('should render correctly', () => {
      const { container } = render(<AtTextArea />)
      expect(container).toBeTruthy()
      expect(container).toBeInTheDocument()
    })

    it('should displays the label when provided', () => {
      const label = 'Test Label'
      const { getByText } = render(<AtTextArea label={label} />)
      expect(getByText(label)).toBeInTheDocument()
    })
  })

  describe('when a user types something', () => {
    it('should calls handleChange on input change', () => {
      const handleChange = vi.fn()
      const { getByTestId } = render(<AtTextArea handleChange={handleChange} />)
      const textArea = getByTestId('text-area')
      fireEvent.change(textArea, { target: { value: 'new value' } })
      expect(handleChange).toHaveBeenCalledWith('new value')
    })

    it('should show the text value', async () => {
      const { getByTestId } = render(<AtTextArea dataTestId="input" value="abc" />)

      const input = getByTestId('input')
      expect(input).toHaveValue('abc')
    })
  })

  it('should displays help text when provided and not in error state', () => {
    const helpText = 'This is help text'
    const { getByText } = render(<AtTextArea helpText={helpText} />)
    expect(getByText(helpText)).toBeInTheDocument()
  })

  it('should displays error text when in error state', () => {
    const errorText = 'Error message'
    const { getByText } = render(<AtTextArea error={true} errorText={errorText} />)
    expect(getByText(errorText)).toBeInTheDocument()
  })

  it('should applies the disabled state correctly', () => {
    const { getByTestId } = render(<AtTextArea disabled={true} />)
    expect(getByTestId('text-area')).toBeDisabled()
  })

  it('should applies the readOnly state correctly', () => {
    const { getByTestId } = render(<AtTextArea readOnly={true} />)
    expect(getByTestId('text-area')).toHaveAttribute('readOnly')
  })
})
