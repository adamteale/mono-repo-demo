import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OrHeroBannerProps, OrHeroBannerVariant, OrHeroBannerLayoutType } from './or-hero-banner.types'
import { OrHeroBanner } from './or-hero-banner'
import { AtButtonVariants } from '../../atoms'

const props: OrHeroBannerProps = {
  title: 'Lorem Ipsum',
  subtitle: 'Lorem Ipsum',
  image: {
    imageDesktop: {
      src: 'https://picsum.photos/1920/1080',
      alt: 'lorem ipsum',
    },
  },
  variant: OrHeroBannerVariant.CONTENT_BANNER,
  dataTestId: 'banner'
}

const dataTestId = 'banner'

describe('organisms/or-banner', () => {
  it('should render correctly', () => {
    const { container, getByTestId } = render(<OrHeroBanner {...props} dataTestId={dataTestId} />)
    expect(container).toBeTruthy()
    const banner = getByTestId(dataTestId)
    expect(banner).toBeInTheDocument()
  })

  it('should not render a button if not provided via props', () => {
    const { container } = render(<OrHeroBanner {...props} />)

    expect(container).toBeTruthy()
    const button = container.querySelector('button')
    expect(button).not.toBeInTheDocument()
  })

  it('should render a button if provided via props', () => {
    const label = 'primary button'

    const { container } = render(
      <OrHeroBanner
        {...props}
        buttons={[{ label: label, href: '#', buttonStyleProps: { variant: AtButtonVariants.PRIMARY } }]}
      />,
    )

    expect(container).toBeTruthy()
    const button = screen.getByText(label)
    expect(button).toBeInTheDocument()
  })

  it('should apply the w-full class when variant is Image Banner and layoutType is Fluid', () => {
    const { getByTestId } = render(<OrHeroBanner {...props} dataTestId={dataTestId} variant={OrHeroBannerVariant.IMAGE_BANNER} layoutType={OrHeroBannerLayoutType.FLUID} />)
    const banner = getByTestId(dataTestId)
    expect(banner).toHaveClass('w-full')
  })
})
