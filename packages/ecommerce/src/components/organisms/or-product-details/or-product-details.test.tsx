import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { OrProductDetailsProps } from './or-product-details.types'
import { OrProductDetails } from './or-product-details'
import { GridColorPickerProps, MlSizeSelectorProps, sizesMock } from '../../molecules'

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))
vi.stubGlobal('ResizeObserver', ResizeObserverMock)

const addToBasketOnClick = vi.fn(async () => true)

const defaultProps: OrProductDetailsProps = {
  product: {
    id: 'id',
    name: 'Product name',
    price: '$140.00',
    stock: 10,
  },
  addToBasket: {
    onClick: addToBasketOnClick,
    addedLabel: 'Added',
    defaultLabel: 'Add To Cart',
  },
}

const colorPickerProps: GridColorPickerProps = {
  options: [
    { colorKey: 'white', colorName: 'white' },
    { colorKey: 'blue', colorName: 'blue' },
    { colorKey: 'green', colorName: 'green' },
    { colorKey: 'red', colorName: 'red' },
    { colorKey: 'grey', colorName: 'grey' },
    { colorKey: 'purple', colorName: 'purple' },
    { colorKey: 'black', colorName: 'black' },
    { colorKey: 'yellow', colorName: 'yellow', isSoldOut: true },
    { colorKey: 'pink', colorName: 'pink', isSoldOut: true },
  ],
}
const sizeSelectorProps: MlSizeSelectorProps = { options: sizesMock }

describe('organisms/or-product-details', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('when the component is created', () => {
    it('should render correctly', () => {
      const { container } = render(<OrProductDetails {...defaultProps} />)

      expect(container).toBeInTheDocument()
    })
  })

  describe('when "add to cart" button is clicked', () => {
    describe('if there are no variants', () => {
      it('should be clicked and change label to {addedLabel}', async () => {
        const { getByTestId } = render(<OrProductDetails {...defaultProps} />)
        const button = getByTestId('add-to-basket-btn')

        expect(button).toHaveTextContent(defaultProps.addToBasket.defaultLabel!)

        const user = userEvent.setup()
        await user.click(button)

        expect(addToBasketOnClick).toHaveBeenCalledOnce()
        expect(button).toHaveTextContent(defaultProps.addToBasket.addedLabel!)
      })
    })

    describe('if there are variants and they have not been selected', () => {
      it('should show tooltip and not add anything', async () => {
        const props: OrProductDetailsProps = {
          ...defaultProps,
          colors: {
            colorPickerProps: colorPickerProps,
          },
          sizes: {
            sizeSelectorProps,
          },
        }
        const { getByTestId } = render(<OrProductDetails {...props} />)
        const button = getByTestId('add-to-basket-btn')

        expect(button).toHaveTextContent(defaultProps.addToBasket.defaultLabel!)

        const user = userEvent.setup()
        await user.click(button)

        const tooltip = getByTestId('at-tooltip')
        expect(tooltip).toBeInTheDocument()
        expect(tooltip).toBeVisible()
      })
    })

    describe('when there are variants and one option from each have been selected', () => {
      it('should add item to cart, changing the button labels', async () => {
        const props: OrProductDetailsProps = {
          ...defaultProps,
          colors: {
            colorPickerProps: colorPickerProps,
            selectedOptionValue: '#FFFFFF;white',
          },
          sizes: {
            sizeSelectorProps,
            selectedOptionValue: '17',
          },
        }
        const { getByTestId } = render(<OrProductDetails {...props} />)
        const button = getByTestId('add-to-basket-btn')

        expect(button).toHaveTextContent(defaultProps.addToBasket.defaultLabel!)

        const user = userEvent.setup()
        await user.click(button)

        expect(addToBasketOnClick).toHaveBeenCalledOnce()
        expect(button).toHaveTextContent(defaultProps.addToBasket.addedLabel!)
      })
    })

    describe('when is out of stock', () => {
      it('button should have {notifyMeLabel} content and it should call notifyMeOnClick', async () => {
        const notifyMeOnClick = vi.fn()
        const notifyMeLabel = 'Notify Me Test'
        const props: OrProductDetailsProps = {
          ...defaultProps,
          product: {
            ...defaultProps.product,
            stock: 0,
          },
          addToBasket: {
            ...defaultProps.addToBasket,
            notifyMeOnClick,
            notifyMeLabel,
          },
        }
        const { getByTestId } = render(<OrProductDetails {...props} />)
        const button = getByTestId('add-to-basket-btn')

        expect(button).toHaveTextContent(notifyMeLabel)

        const user = userEvent.setup()
        await user.click(button)

        expect(notifyMeOnClick).toHaveBeenCalledOnce()
      })
    })
  })
})
