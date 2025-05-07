import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { AtTag } from './at-tag'

describe('atoms/at-tag', () => {
  describe('when the component is created', () => {
    it('should render correctly', () => {
      const text = 'Out of scope'
      const { container, getByText } = render(<AtTag text={text} />)
      expect(container).toBeTruthy()
      expect(getByText(text)).toBeInTheDocument()
    })
  })
})
