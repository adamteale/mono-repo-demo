import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BannerSplitImage, BannerSplitImageProps } from './BannerSplitImage'

const splitProps: BannerSplitImageProps = {
  image: { imageDesktop: { src: 'image.jpg', alt: 'Image alt text' } },
  author: {
    authorName: 'John Doe',
    authorPicture: { src: 'https://example.com/john-doe.jpg' },
    publicationDate: '2022-01-01',
    isLightText: true,
  },
}

describe('BannerSplitImage', () => {
  it('renders the image and author', () => {
    const { getByAltText, getByText } = render(<BannerSplitImage {...splitProps} />)

    const imageElement = getByAltText('Image alt text')
    const authorElement = getByText('John Doe')

    expect(imageElement).toBeInTheDocument()
    expect(authorElement).toBeInTheDocument()
  })

  it('does not render anything if image is not provided', () => {
    const { container } = render(<BannerSplitImage author={splitProps.author} />)

    expect(container.firstChild).toBeNull()
  })
})
