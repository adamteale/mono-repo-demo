import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { OrImageInteractiveBlock } from './or-image-interactive-block'
import { OrImageInteractiveBlockProps } from './or-image-interactive-block.types'

const bodyText = 'Test Body'

const defaultProps: OrImageInteractiveBlockProps = {
  body: bodyText,
  images: [
    { image: { src: 'test-image-1.jpg', alt: 'image-1' } },
    { image: { src: 'test-image-2.jpg', alt: 'image-2' } },
  ],
  subtitle: 'Test Subtitle',
}

describe('organisms/or-image-interactive-block', () => {
  it('should render correctly with images and subtitle', () => {
    const { getByText, queryAllByAltText } = render(<OrImageInteractiveBlock {...defaultProps} />)

    expect(getByText(defaultProps.subtitle)).toBeInTheDocument()
    expect(getByText(bodyText)).toBeInTheDocument()
    expect(queryAllByAltText(defaultProps.images[0].image.alt as string)).toHaveLength(2) // Mobile + Desktop
    expect(queryAllByAltText(defaultProps.images[1].image.alt as string)).toHaveLength(2) // Mobile + Desktop
  })
})
