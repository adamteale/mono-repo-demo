import { MouseEventHandler } from 'react'
import { Target } from '../../types'
import { AtIcon } from '../at-icon'
import { AtLinkProps, IconPositions } from './at-link.types'
import { buttonVariants } from '../at-button/at-button.variants'
import { linkVariant } from './at-link.variants'

export const AtLink = ({
  children,
  iconProps,
  iconPosition = IconPositions.RIGHT,
  target,
  href,
  onClick,
  className = '',
  textClasses = '',
  gtmData,
  label,
  linkWrapper,
  style,
  dataTestId,
  ariaCurrent,
  role,
  buttonStyleProps = {},
  tabIndex,
  ...props
}: AtLinkProps) => {
  const iconExtraClass =
    iconPosition === IconPositions.LEFT
      ? `order-first self-center ${label ? 'mr-1' : ''}`
      : `${label ? 'self-center ml-1' : ''}`

  const handleOnClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    onClick?.(e, { gtmData })
  }
  const Link = linkWrapper ? linkWrapper : 'a'

  const { variant, size } = buttonStyleProps

  const buttonVariant = buttonVariants(size)

  return (
    <Link
      href={href}
      rel={target === Target.BLANK ? 'noopener noreferrer' : ''}
      data-testid={dataTestId}
      onClick={handleOnClick}
      target={target}
      aria-current={ariaCurrent}
      style={style}
      role={role}
      className={`${variant ? buttonVariant({ variant }) : linkVariant()} cursor-pointer ${className}`}
      tabIndex={tabIndex}
      {...props}
    >
      {children ?? (
        <>
          {label && <span className={`flex items-center ${textClasses}`}>{label}</span>}
          {iconProps && <AtIcon className={iconExtraClass} {...iconProps} color="currentColor" />}
        </>
      )}
    </Link>
  )
}
