import { paginationClasses } from './at-pagination.variants'
import { AtPaginationProps } from './at-pagination.types'

export const AtPagination = ({
  pageLabel,
  selected = false,
  disabled = false,
  onClick = () => {},
}: AtPaginationProps) => {
  return (
    <div className={paginationClasses({ selected, disabled })} onClick={() => !disabled && onClick()}>
      <button
        data-testid={`page-${pageLabel}`}
        className={'w-12 h-12 rounded flex items-center justify-center focus:bg-neutral-50 outline-none'}
        disabled={disabled}
      >
        {pageLabel}
      </button>
    </div>
  )
}
