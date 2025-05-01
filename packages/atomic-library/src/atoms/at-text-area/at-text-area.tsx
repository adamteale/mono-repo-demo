import { useCallback, useRef, useState } from 'react'
import { AtTextAreaProps } from './at-text-area.types'
import { useClickOutside } from '../../utils'
import { containerClasses } from './at-text-area.variants'

export const AtTextArea = ({
  className = '',
  disabled,
  placeholder,
  readOnly,
  defaultValue,
  error = false,
  value,
  required,
  maxLength,
  name,
  handleChange,
  id,
  inputMode,
  label,
  dataTestId = 'text-area',
  helpText,
  errorText,
}: AtTextAreaProps) => {
  const [isActive, setIsActive] = useState(false)
  const textAreaRef = useRef<HTMLDivElement>(null)

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleChange?.(event.target.value)
  }

  useClickOutside(textAreaRef, () => setIsActive(false))

  const getContainerClasses = useCallback(() => {
    return containerClasses({ active: isActive, error, disabled })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, value, disabled, isActive])

  return (
    <label className="flex flex-col">
      {label && (
        <span className="mb-3 text-sm text-primary">
          {label} {required && <span className="text-feedback-error">*</span>}
        </span>
      )}
      <div
        className={getContainerClasses()}
        onFocus={() => setIsActive(true)}
        ref={textAreaRef}
        data-testid="text-area-wrapper"
      >
        <textarea
          aria-invalid={error}
          className={`
              focus:outline-none px-3 h-full w-full rounded-lg text-primary 
              placeholder:text-tertiary placeholder:text-base placeholder:leading-4  
              placeholder:opacity-100 focus:placeholder:opacity-0 resize-none 
              ${className}
            `}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          defaultValue={defaultValue}
          inputMode={inputMode}
          value={value}
          required={required}
          maxLength={maxLength}
          name={name}
          id={id}
          data-testid={dataTestId}
        />
      </div>
      {!error && helpText && <span className={`mt-1 text-sm text-tertiary`}>{helpText}</span>}
      {error && errorText && <span className={`mt-1 text-sm text-feedback-error`}>{errorText}</span>}
    </label>
  )
}
