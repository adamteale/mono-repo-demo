import { AtIcon } from '../at-icon'
import { AtPlayButtonColor, AtPlayButtonProps, AtPlayButtonSize } from './at-play-button.types'

export const AtPlayButton = ({
  color = AtPlayButtonColor.SECONDARY,
  size = AtPlayButtonSize.SMALL,
  isLoading = false,
  onClick = () => {},
  className,
}: AtPlayButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center w-full h-full transition-colors ${className}`}
      type="button"
      onClick={onClick}
    >
      <AtIcon type={isLoading ? 'spinner' : 'play'} color={color} size={size === AtPlayButtonSize.LARGE ? 120 : 75} />
    </button>
  )
}
