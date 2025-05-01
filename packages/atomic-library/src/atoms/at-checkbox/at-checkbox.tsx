import { AtIcon } from '../at-icon'
import { checkboxVariants } from './at-checkbox.variants'
import { AtCheckboxProps } from './at-checkbox.types'

export const AtCheckbox = ({
  label,
  checked = false,
  disabled = false,
  onClick,
  className = '',
  dataTestId = 'at-checkbox',
  required = false,
}: AtCheckboxProps) => {
  const handleInteraction = () => {
    if (!disabled) {
      onClick(!checked)
    }
  }

  return (
    <div
      role="checkbox"
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={0}
      onClick={handleInteraction}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleInteraction()
        }
      }}
      className={`${className} flex gap-2 items-center min-h-11 focus-within:outline focus-within:outline-cta-primary focus-within:outline-1 focus-within:outline-offset-4 max-w-fit rounded-lg cursor-pointer`}
    >
      <label className="sr-only">
        <input
          type="checkbox"
          className="sr-only"
          disabled={disabled}
          data-testid={dataTestId}
          required={required}
          checked={checked}
          onChange={handleInteraction}
          aria-hidden="true"
          tabIndex={-1}
        />
        {label}
      </label>
      <AtIcon
        size={21.595}
        type={checked && !disabled ? 'square-checked' : 'square'}
        color={!disabled ? 'primary' : 'disabled-primary'}
      />
      <span aria-hidden="true" className={`text-left leading-4 ${checkboxVariants({ disabled })}`}>
        {label}
      </span>
    </div>
  )
}
