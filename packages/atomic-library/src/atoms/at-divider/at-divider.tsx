import { AtDividerProps } from './at-divider.types'

export const AtDivider = ({ className = '', ariaHidden = true }: AtDividerProps) => {
  return <hr className={`border-tertiary ${className}`} role="separator" aria-hidden={ariaHidden} />
}
