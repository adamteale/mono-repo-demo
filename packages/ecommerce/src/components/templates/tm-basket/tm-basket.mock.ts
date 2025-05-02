import { TmBasketProps } from './tm-basket.types'

export const defaultProps: TmBasketProps = {
  basketItemsLabels: {
    title: 'Your cart',
    individualItemLabel: 'item',
    multipleItemsLabel: 'items',
  },
  emptyBasketLabels: {
    title: `Your bag it's empty.`,
    subtitle: 'Once you add items to your cart, it will appear here',
    buttonProps: {
      label: 'Shop now',
      href: '#',
    },
  },
  items: [],
  totalItems: 0,
  carouselProps: {
    title: '',
    children: ['ChildrenCarousel', 'ChildrenCarousel2'],
  },
}

export const orderSummaryProps = {
  summaryItems: [
    {
      name: 'Test Item 1',
      value: 'Some Item Value',
    },
    {
      name: 'Test Item 2',
      value: 'Some Item Value2',
    },
  ],
  orderInfo: {
    subtotalLabel: '300',
    subtotal: '300',
    discounts: '0',
  },
  totalPriceLabel: '300',
  totalPrice: '300',
}

export const itemsWithProps = [
  { title: 'Test Item 1', price: '100', index: '1', productLink: { label: '1.com' }, onDeleteItem: () => {} },
  { title: 'Test Item 2', price: '200', index: '2', productLink: { label: '2.com' }, onDeleteItem: () => {} },
]
