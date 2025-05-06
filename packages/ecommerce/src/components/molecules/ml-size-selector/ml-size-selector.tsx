import { MlSizeSelectorProps } from './ml-size-selector.types'
import { AtSizeSelector } from '../../atoms'

export const MlSizeSelector = ({ options, onClick, selected }: MlSizeSelectorProps) => {
  return (
    <ul className="flex flex-wrap gap-4">
      {options?.map((sizeItem, index) => (
        <li key={sizeItem.text}>
          <AtSizeSelector
            {...sizeItem}
            onClick={() => onClick?.(index)}
            isSelected={selected === sizeItem.text || sizeItem.isSelected}
          />
        </li>
      ))}
    </ul>
  )
}
