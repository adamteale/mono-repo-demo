import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { OrCarouselBannerProps } from './or-carousel-banner.types'
import { OrCarouselBanner } from './or-carousel-banner'
import { OrHeroBannerProps } from '../or-hero-banner'

const slides = new Array(9).fill({
  type: 'default',
  title: 'Lorem Ipsum',
  subtitle: 'Lorem Ipsum',
  image: {
    imageDesktop: {
      src: 'https://picsum.photos/1920/1080',
      alt: 'lorem ipsum',
    },
  },
} as OrHeroBannerProps)

const props: OrCarouselBannerProps = {
  slides,
  className: '',
  interval: undefined,
  hideIndicators: false,
}

const dataTestId = 'or-carousel-banner'
const sliderLibrarySelector = '.swiper.swiper-initialized'

describe('organism/or-carousel-banner', () => {
  it('should render correctly', () => {
    const { getByTestId, container } = render(<OrCarouselBanner {...props} dataTestId={dataTestId} />)

    expect(container).toBeTruthy()

    const banner = getByTestId(dataTestId)
    expect(banner).toBeInTheDocument()

    const slider = container.querySelector(sliderLibrarySelector)
    expect(slider).toBeInTheDocument()

    const atControl = getByTestId(`${dataTestId}-at-control-bullets`)
    expect(atControl).toBeInTheDocument()
  })

  it('should not show at-control if hideIndicators is set to true', () => {
    const { getByTestId, container } = render(
      <OrCarouselBanner {...props} dataTestId={dataTestId} hideIndicators={true} />,
    )

    expect(container).toBeTruthy()
    expect(() => getByTestId(`${dataTestId}-at-control-bullets`)).toThrow()
  })

  it('should not render the or-carousel-banner component if there is only one slide', () => {
    const { container } = render(
      <OrCarouselBanner
        {...props}
        slides={[
          {
            title: 'Lorem Ipsum',
            subtitle: 'Lorem Ipsum',
            image: {
              imageDesktop: {
                src: 'https://picsum.photos/1920/1080',
                alt: 'lorem ipsum',
              },
            },
          },
        ]}
        dataTestId={dataTestId}
      />,
    )

    expect(container).toBeTruthy()
    const slider = container.querySelector(sliderLibrarySelector)
    expect(slider).to.not.toBeInTheDocument()
  })
})
