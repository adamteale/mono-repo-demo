import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MlSizeSelector } from '../ml-size-selector'
import { sizesMock } from './mocks/ml-size-selector.mock'

describe('molecules/ml-size-selector', () => {
  describe('when the component is created', () => {
    it('should render correctly', () => {
      const { container } = render(<MlSizeSelector options={sizesMock} />)
      expect(container).toBeTruthy()
    })
  })

  describe('when sizes is not empty', () => {
    it('should renders AtSizeSelector for each size', () => {
      render(<MlSizeSelector options={sizesMock} />)

      sizesMock.forEach((size) => {
        const sizeButton = screen.getByText(size.text)
        expect(sizeButton).toBeInTheDocument()
      })
    })
  })

  describe('when sizes is empty', () => {
    it('should does not render AtSizeSelector', () => {
      render(<MlSizeSelector options={[]} />)

      const sizeButtons = screen.queryAllByRole('button')
      expect(sizeButtons.length).toBe(0)
    })
  })
})
