import {
  descriptionClasses,
  radioTextContainerClasses,
  titleClasses,
  radioInputClasses,
  radioContainerClasses,
} from './at-radio.variants'
import { AtRadioProps } from './at-radio.types'

export const AtRadio = ({
  title,
  titleClassName,
  description,
  checked = false,
  disabled = false,
  onChange,
  className = '',
  inputName,
  ariaLabelAddOn,
  dataTestId = 'at-radio',
}: AtRadioProps) => {
  return (
    <label className={`${radioContainerClasses({ disabled })} ${className}`}>
      <input
        type="radio"
        role="radio"
        name={inputName}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        data-testid={dataTestId}
        className={`${radioInputClasses({ disabled, checked })}`}
        aria-checked={checked}
        aria-label={`${title ? title : ''}${title && description ? ': ' : ''}${description ? description : ''}${
          ariaLabelAddOn ? `, ${ariaLabelAddOn}` : ''
        }`}
      />

      <div className={`${radioTextContainerClasses({ disabled })}`} aria-hidden>
        {title && <span className={`${titleClasses({ disabled })} ${titleClassName}`}>{title}</span>}

        {description && <span className={descriptionClasses({ disabled })}>{description}</span>}
      </div>
    </label>
  )
}
