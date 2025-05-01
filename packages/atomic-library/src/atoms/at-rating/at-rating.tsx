import { KeyboardEvent, RefObject, createRef, useRef, useState } from 'react'
import { AtRatingProps, Rating } from './at-rating.types'
import { AtIcon } from '../at-icon'

enum KeyboardEventCodes {
  ARROW_DOWN = 'ArrowDown',
  ARROW_RIGHT = 'ArrowRight',
  ARROW_UP = 'ArrowUp',
  ARROW_LEFT = 'ArrowLeft',
  SPACE = ' ',
  ENTER = 'Enter',
}

export const AtRating = ({ stars = 5, initialRating = 0, onChange }: AtRatingProps) => {
  const [hoveredRating, setHoveredRating] = useState(-1)
  const [selectedRatingIndex, setSelectedRatingIndex] = useState(initialRating - 1)

  const containerRef = useRef<HTMLDivElement>(null)
  const starRefs = useRef<Array<RefObject<HTMLButtonElement>>>([])
  starRefs.current = Array(stars)
    .fill(null)
    .map((_, i) => starRefs.current[i] || createRef())

  const handleRatingSelected = (index: number) => {
    let selectedRating

    if (index === selectedRatingIndex) {
      setSelectedRatingIndex(-1)
      selectedRating = 0
    } else {
      setSelectedRatingIndex(index)
      selectedRating = index + 1
    }

    if (index === -1 && containerRef.current) {
      containerRef.current.focus()
    } else if (index >= 0 && starRefs.current[index].current) {
      starRefs.current[index].current?.focus()
    }

    if (onChange) {
      onChange({ selectedRating: selectedRating as Rating })
    }
  }

  const selectNextElement = () => {
    let nextOption

    if (selectedRatingIndex === stars - 1) {
      nextOption = -1
    } else {
      nextOption = selectedRatingIndex + 1
    }

    handleRatingSelected(nextOption)
  }

  const selectPreviousElement = () => {
    let nextOption

    if (selectedRatingIndex === -1) {
      nextOption = stars - 1
    } else {
      nextOption = selectedRatingIndex - 1
    }

    handleRatingSelected(nextOption)
  }

  const preventDefaultActions = (event: KeyboardEvent<HTMLElement>) => {
    event.stopPropagation()
    event.preventDefault()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (Object.values(KeyboardEventCodes).includes(event.key as KeyboardEventCodes)) {
      preventDefaultActions(event)
    }

    if ([KeyboardEventCodes.ARROW_DOWN, KeyboardEventCodes.ARROW_RIGHT].includes(event.key as KeyboardEventCodes)) {
      selectNextElement()
    } else if ([KeyboardEventCodes.ARROW_UP, KeyboardEventCodes.ARROW_LEFT].includes(event.key as KeyboardEventCodes)) {
      selectPreviousElement()
    }
  }

  const ratingStars = Array(stars).fill(0)

  return (
    <div
      className="flex justify-items-center gap-0.5 w-fit"
      ref={containerRef}
      tabIndex={selectedRatingIndex === -1 ? 0 : -1}
      onKeyDown={handleKeyDown}
    >
      {ratingStars.map((rating, index) => (
        <button
          key={index}
          ref={starRefs.current[index]}
          type="button"
          onClick={() => handleRatingSelected(index)}
          className="relative"
          onMouseEnter={() => setHoveredRating(index)}
          onMouseLeave={() => setHoveredRating(-1)}
          tabIndex={selectedRatingIndex === index ? 0 : -1}
        >
          <AtIcon type="rating" color="tertiary" dataTestId="rating-icon" />
          {((hoveredRating === -1 && index <= selectedRatingIndex) || index <= hoveredRating) && (
            <AtIcon
              type="rating-full"
              color="tertiary"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              dataTestId="rating-full-icon"
            />
          )}
        </button>
      ))}
    </div>
  )
}
