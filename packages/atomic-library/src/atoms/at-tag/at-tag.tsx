import { AtTagProps } from './at-tag.types'

export const AtTag = ({ text, textClassName = '', className = '' }: AtTagProps) => {
  return (
    <div
      className={`
        flex justify-center items-center
        text-center rounded max-w-fit
        px-2 py-1
        md:px-3 md:py-2
        bg-surface-tertiary
        ${className}`}
      data-testid="tag-container"
    >
      <span
        className={`
        text-cta-content-primary
        font-normal
        text-sm   
        leading-4 tracking-[0.125]
        md:text-base
        ${textClassName}`}
        data-testid="tag-label"
      >
        {text}
      </span>
    </div>
  )
}
