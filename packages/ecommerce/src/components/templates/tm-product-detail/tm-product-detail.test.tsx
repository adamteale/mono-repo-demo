import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { TmProductDetail } from './tm-product-detail'
import { defaultProps } from './tm-product-detail.mock'

describe('templates/TmProductDetail', () => {
  it('should display the product brand and name', () => {
    const { getAllByText } = render(<TmProductDetail {...defaultProps} />)

    const brandElements = getAllByText(defaultProps.productDetails.product.brand!)
    const nameElements = getAllByText(defaultProps.productDetails.product.name)

    expect(brandElements.length).toBeGreaterThan(0)
    expect(nameElements).toBeTruthy()
  })

  it('should render the breadcrumb component with Home and Category links', async () => {
    const { getByText, findAllByText } = render(<TmProductDetail {...defaultProps} />)

    const homeLinks = await findAllByText('Home')

    expect(homeLinks.length).toBe(2)
    expect(getByText('Category')).toBeInTheDocument()
  })

  it('should render the product images or carousel based on the screen size', () => {
    const { getAllByAltText } = render(<TmProductDetail {...defaultProps} />)

    expect(getAllByAltText(defaultProps.productImages[0].alt!)).toHaveLength(2)
  })

  it('should render the product details correctly', () => {
    const { getAllByText } = render(<TmProductDetail {...defaultProps} />)

    expect(getAllByText(defaultProps.productDetails.product.brand!)).toHaveLength(2)
    expect(getAllByText(defaultProps.productDetails.product.name)).toHaveLength(2)
  })

  describe('when carouselProps are provided', () => {
    it('should render the carousel component with the provided children', () => {
      const { getByText } = render(<TmProductDetail {...defaultProps} />)

      expect(getByText(defaultProps.carouselProps.children![0] as any)).toBeInTheDocument()
      expect(getByText(defaultProps.carouselProps.children![1] as any)).toBeInTheDocument()
    })

    it('should render all provided product images', () => {
      const { getAllByRole } = render(<TmProductDetail {...defaultProps} />)

      const images = getAllByRole('img')

      expect(images.length).toBe(defaultProps.productImages.length * 2)
    })
  })
})
