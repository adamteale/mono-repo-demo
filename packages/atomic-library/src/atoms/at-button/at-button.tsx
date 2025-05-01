import { AtIcon } from '../at-icon'
import { AtButtonIconPosition, AtButtonActionType, AtButtonProps } from './at-button.types'
import { buttonHandlers } from './handlers'
import { buttonVariants } from './at-button.variants'
export { AtButtonIconPosition, AtButtonActionType }

export const AtButton = ({
  target,
  actionType,
  actionValue,
  children,
  dataTestId = '',
  gtmData,
  icon,
  iconType,
  iconPosition,
  onClick,
  isLoading,
  className = '',
  buttonType,
  disabled,
  variant,
  size,
  form,
}: AtButtonProps) => {
  const hasIcon = !!icon || !!iconType

  const handleOnClick = onClick
    ? (e: React.MouseEvent<HTMLButtonElement>) => onClick(e, { gtmData, actionType, actionValue })
    : (e: React.MouseEvent<HTMLButtonElement>) =>
        buttonHandlers[actionType ?? AtButtonActionType.OPEN_URL](e, { actionValue, target })

  const buttonVariant = buttonVariants(size, isLoading)

  return (
    <button
      type={buttonType ?? 'button'}
      data-testid={dataTestId}
      onClick={handleOnClick}
      className={`${buttonVariant({ variant })} ${className}`}
      disabled={disabled || isLoading}
      form={form}
    >
      <span>{children}</span>

      {hasIcon && !isLoading && (
        <AtIcon
          className={iconPosition === AtButtonIconPosition.LEFT ? 'order-first mr-2' : 'ml-2'}
          src={icon}
          type={iconType}
          color="currentColor"
          size={24}
        />
      )}

      {isLoading && (
        <AtIcon
          className={`animate-spin ${iconPosition === AtButtonIconPosition.LEFT ? 'order-first mr-2' : 'ml-2'}`}
          type="spinner"
          color="currentColor"
        />
      )}
    </button>
  )
}
