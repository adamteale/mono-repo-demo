import { IconProps } from '../at-icon.types'

export const BarsIcon = ({ className, fill, dataTestId, size = 24, ariaHidden }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`${className} ${fill}`}
      data-testid={dataTestId}
      aria-hidden={ariaHidden}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.8 7C20.8 7.55228 20.3523 8 19.8 8H4.2C3.64771 8 3.2 7.55228 3.2 7C3.2 6.44772 3.64771 6 4.2 6H19.8C20.3523 6 20.8 6.44772 20.8 7ZM20.8 12C20.8 11.4477 20.3523 11 19.8 11H4.2C3.64771 11 3.2 11.4477 3.2 12C3.2 12.5523 3.64771 13 4.2 13H19.8C20.3523 13 20.8 12.5523 20.8 12ZM19.8 16C20.3523 16 20.8 16.4477 20.8 17C20.8 17.5523 20.3523 18 19.8 18H4.2C3.64771 18 3.2 17.5523 3.2 17C3.2 16.4477 3.64771 16 4.2 16H19.8Z"
      />
    </svg>
  )
}
