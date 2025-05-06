import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BannerImage } from './BannerImage'
import { MlMediaProps } from '../../../../molecules'
import { OrHeroBannerVariant } from '../../or-hero-banner.types'

const imageProps: MlMediaProps = { imageDesktop: { src: 'image.jpg', alt: 'Image Alt' } }

describe('BannerImage', () => {
  it('should render null when variant is Content Banner', () => {
    const { container } = render(<BannerImage image={imageProps} variant={OrHeroBannerVariant.CONTENT_BANNER} />)
    expect(container.firstChild).toBeNull()
  })

  it('should render MlMedia component when variant is Image Banner and image is provided', () => {
    const { getByTestId } = render(<BannerImage image={imageProps} variant={OrHeroBannerVariant.IMAGE_BANNER} />)
    expect(getByTestId('ml-media-bg-image')).toBeInTheDocument()
  })
})
