import { AtControlProps, AtControlSize } from '../atoms'

export const getNavigationArrowConfig = (
  disabled: boolean,
  type: 'prev' | 'next',
  onClick: () => void,
  direction: AtControlProps['icon'],
  size: AtControlSize = 'medium',
) => {
  const isPrevButton = type === 'prev'
  return {
    size,
    disabled,
    icon: direction,
    margin: isPrevButton ? 'ml-7' : 'mr-7',
    onClick,
  } as AtControlProps
}
