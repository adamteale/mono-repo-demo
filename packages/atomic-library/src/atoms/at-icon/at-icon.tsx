import { getIcon } from './get-icon'
import { AtIconProps, iconColors } from './at-icon.types'

export const AtIcon = ({
  className = '',
  color = 'primary',
  src,
  size = 24,
  type,
  dataTestId,
  ariaHidden = 'false',
}: AtIconProps) => {
  // TODO: keeping this for retrocompatibility with ml-vertical. Will be removed when component does not
  // support icon upload from CMS
  if (src) return <img className={className} src={src} alt={type} width={size} height={size} />

  const Icon = type && getIcon(type, iconColors[color ?? 'currentColor'], size, className, dataTestId, ariaHidden)
  if (Icon) return Icon
  return null
}
