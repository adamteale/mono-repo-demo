import { AtIcon, IconType } from '../at-icon'
import { AtControlProps, ControlIconProps, AtControlIcon } from './at-control.types'
import { controlArrow } from './at-control.variants'

const Icon = ({ icon }: { icon: AtControlIcon }) => {
  const iconType = /^less|plus$/i.test(icon) ? icon : `angle-${icon}`

  return <AtIcon type={iconType as IconType} color="text-primary" />
}

export const ControlIcon = ({ className = '', icon = 'left', size = 'medium', style }: ControlIconProps) => {
  return (
    <span style={style} className={`${controlArrow({ size })} ${className}`}>
      <Icon icon={icon} />
    </span>
  )
}

export const AtControl = ({
  className = '',
  size = 'medium',
  icon = 'left',
  dataTestId,
  label,
  onClick,
}: AtControlProps) => {
  return (
    <button
      className={`${controlArrow({ size })} ${className}`}
      type="button"
      onClick={onClick}
      aria-label={label}
      data-testid={dataTestId}
    >
      <Icon icon={icon} />
    </button>
  )
}
