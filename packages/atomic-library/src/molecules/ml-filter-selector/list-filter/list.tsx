import { useState } from 'react'
import { ListFilterWrapper } from '../utils'
import { AtTextInput } from '../../../atoms'
import { ListFilterProps } from './list-filter.types'
import { BaseFilter } from '../filter.types'

export const ListFilter = ({ searchPlaceholder = 'Find', options = [], onClick, ...wrapperProps }: ListFilterProps) => {
  const [searchValue, setSearchValue] = useState('')

  const matcher = (option: string) => option.toLowerCase().includes(searchValue.toLowerCase())
  const filteredList = options?.filter((option: BaseFilter['options']) => matcher(option.label))

  return (
    <ListFilterWrapper
      onClick={(index: number) => onClick(filteredList[index])}
      {...wrapperProps}
      options={filteredList}
      searchComponent={
        <AtTextInput
          type="text"
          icon={{
            type: 'search',
            color: 'primary',
          }}
          handleChange={(value) => setSearchValue(value)}
          onClearInputClick={() => setSearchValue('')}
          placeholder={searchPlaceholder}
        />
      }
    />
  )
}
