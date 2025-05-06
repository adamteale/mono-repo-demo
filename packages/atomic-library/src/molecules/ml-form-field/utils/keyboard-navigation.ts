import { SelectOption } from '../ml-form-field.types'

export const handleSelectCharacterInput = (
  key: string,
  searchString: string,
  setSearchString: React.Dispatch<React.SetStateAction<string>>,
  searchTimeoutRef: React.RefObject<number | null>,
  options: SelectOption[],
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>,
) => {
  const newSearchString = searchString + key
  setSearchString(newSearchString)

  if (searchTimeoutRef.current) {
    clearTimeout(searchTimeoutRef.current)
  }

  searchTimeoutRef.current = window.setTimeout(() => {
    setSearchString('')
  }, 500)

  const searchIndex = options.findIndex((option) =>
    option.label.toLowerCase().startsWith(newSearchString.toLowerCase()),
  )

  if (searchIndex !== -1) {
    setActiveIndex(searchIndex)
  }
}

export const handleSelectKeyDown = (
  event: React.KeyboardEvent,
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  activeIndex: number,
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>,
  options: SelectOption[],
  handleSetValue: (option: SelectOption, index: number) => void,
  handleCharacterInput: (key: string) => void,
) => {
  const { key, altKey } = event
  const maxIndex = options.length - 1

  const openKeys = ['ArrowDown', 'ArrowUp', 'Enter', ' ']
  if (!isOpen && openKeys.includes(key)) {
    event.preventDefault()
    setIsOpen(true)
    return
  }

  switch (key) {
    case 'ArrowDown':
      if (isOpen) {
        event.preventDefault()
        setActiveIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1))
      }
      break

    case 'ArrowUp':
      if (isOpen) {
        event.preventDefault()
        setActiveIndex((prevIndex) => Math.max(0, prevIndex - 1))
      }
      break

    case 'Home':
      if (isOpen) {
        event.preventDefault()
        setActiveIndex(0)
      }
      break

    case 'End':
      if (isOpen) {
        event.preventDefault()
        setActiveIndex(maxIndex)
      }
      break

    case 'Enter':
    case ' ':
      event.preventDefault()
      if (isOpen && activeIndex >= 0) {
        handleSetValue(options[activeIndex], activeIndex)
      }
      setIsOpen(false)
      break

    case 'Escape':
      setIsOpen(false)
      break

    case 'Tab':
      if (isOpen && activeIndex >= 0) {
        handleSetValue(options[activeIndex], activeIndex)
        setIsOpen(false)
      }
      break

    default:
      if (key.length === 1 && !altKey) {
        handleCharacterInput(key)
      }
      break
  }
}
