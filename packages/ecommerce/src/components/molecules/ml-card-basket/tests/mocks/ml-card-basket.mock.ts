import { MlCardBasketProps } from '../../ml-card-basket.types'

export const cardBasketMock: MlCardBasketProps = {
  image: {
    src: 'blue-shoes.png',
    alt: 'image',
  },
  color: 'blue',
  title: 'Product name',
  productLink: {
    href: '#',
  },
  colorLabel: 'Color',
  sizeLabel: 'Size',
  eyebrowHeadline: 'BRAND',
  size: '8.5',
  price: '$119',
  index: 'blue-shoes-1',
  onDeleteItem: () => console.log('close'),
  onQuantityChange: () => console.log('quantity change'),
}

export const cardBasketCompactMock: MlCardBasketProps = {
  skuLabel: 'SKU:',
  image: {
    src: 'blue-shoes.png',
    alt: 'image',
  },
  color: 'blue',
  title: 'Product name',
  productLink: {
    href: '#',
  },
  colorLabel: 'Color',
  sizeLabel: 'Size',
  content: 'compact',
  size: '8.5',
  price: '$119',
  index: 'blue-shoes-1',
  onDeleteItem: () => console.log('close'),
  onQuantityChange: () => console.log('quantity change'),
}
