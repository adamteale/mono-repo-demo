import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import { MlProductCard } from './ml-product-card'
import { MlProductCardProps } from './ml-product-card.types'

const clickOnImage = vi.fn()

const linkTestId = 'product-image-link'

const defaultProps: MlProductCardProps = {
  image: { src: '#' },
  link: {
    href: '#',
    dataTestId: linkTestId,
    onClick: (e) => {
      e?.preventDefault()
      clickOnImage()
    },
  },
  name: 'Product name',
  price: '$34.99',
  addToBasketOnClick: vi.fn(),
}

describe('molecule/ml-product-card', () => {
  describe('when the component is created', () => {
    it('should render correctly', () => {
      const { container } = render(<MlProductCard {...defaultProps} />)
      expect(container).toBeTruthy()
    })

    it('should render the name', () => {
      const { getByText } = render(<MlProductCard {...defaultProps} />)
      expect(getByText(defaultProps.name)).toBeInTheDocument()
    })
  })

  describe('when a user clicks the image', () => {
    it('should call onClick', () => {
      const { getByTestId } = render(<MlProductCard {...defaultProps} />)
      fireEvent.click(getByTestId(linkTestId))
      expect(clickOnImage).toHaveBeenCalled()
    })
  })

  describe('when card has discount', () => {
    it('should show the discount price', () => {
      const originalPrice = '$49.99'
      const { getByText } = render(<MlProductCard {...defaultProps} originalPrice={originalPrice} />)
      expect(getByText(originalPrice)).toBeInTheDocument()
    })
  })

  describe('when having optional properties', () => {
    describe('when brand label is defined', () => {
      it('should render brand label', () => {
        const brand = 'Brand'
        const { getByText } = render(
          <MlProductCard
            {...defaultProps}
            brand={{
              label: brand,
            }}
          />,
        )
        expect(getByText(brand)).toBeInTheDocument()
      })
    })
  })

  describe('when a user clicks the Add To Cart button', () => {
    it('should call addToCartOnClick', () => {
      const { getByTestId } = render(<MlProductCard {...defaultProps} />)
      fireEvent.click(getByTestId('product-card-add-to-cart'))
      expect(defaultProps.addToBasketOnClick).toHaveBeenCalled()
    })
  })
})
