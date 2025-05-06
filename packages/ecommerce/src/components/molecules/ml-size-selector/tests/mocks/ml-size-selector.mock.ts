import { AtSizeSelectorProps } from '../../../../atoms'

export const sizesMock: AtSizeSelectorProps[] = [
  { text: '30', isSoldOut: false },
  { text: '31', isSoldOut: true, onClick: () => alert('Size out of stock') },
  { text: '32', isSoldOut: false },
  { text: '33', isSoldOut: false },
  { text: '34', isSoldOut: false },
  { text: '35', isSoldOut: true, onClick: () => alert('Size out of stock') },
  { text: '36', isSoldOut: false },
  { text: '37', isSoldOut: false },
  { text: '38', isSoldOut: false },
  { text: '39', isSoldOut: true, onClick: () => alert('Size out of stock') },
  { text: '40', isSoldOut: false },
  { text: '41', isSoldOut: false },
  { text: '42', isSoldOut: false },
  { text: '43', isSoldOut: true, onClick: () => alert('Size out of stock') },
  { text: '44', isSoldOut: false },
  { text: '45', isSoldOut: false },
]
