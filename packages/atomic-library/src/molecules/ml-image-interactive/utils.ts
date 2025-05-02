import React, { useRef, useState } from 'react'

type Coordinates = { x: number; y: number }

type PercentagePosition = { x: string; y: string }

/**
 * Calculates a value for each axis between `-maxValue` and `+maxValue`,
 * based on the pointer position and the container boundaries,
 * considering the point (0,0) to be the centric point in the container (in both axes)
 * @param mouse Pointer position, returned as relative to the viewport
 * @param container Container boundaries
 * @param maxValue Max percentage allowed by the scaling value used in the CSS transform (e.g. 25 for 1.5, 50 for 2)
 */
export const getZoomPositioning = (mouse: Coordinates, container?: DOMRect, maxValue = 50): PercentagePosition => {
  if (!container) return { x: '', y: '' }

  const { x: pointerX, y: pointerY } = mouse
  const { top, left, width, height } = container

  const centerX = width / 2
  const centerY = height / 2
  const boundPointerX = pointerX - left
  const boundPointerY = pointerY - top

  const x = (centerX - boundPointerX) / centerX
  const y = (centerY - boundPointerY) / centerY

  return { x: `${x * maxValue}%`, y: `${y * maxValue}%` }
}

export const getDeviceType = () => {
  if (typeof window === 'undefined') return 'desktop'
  // set to xl breakpoint (1280px)
  return window.innerWidth < 1280 ? 'mobile' : 'desktop'
}

export const mouseOffset = 24

export const useZoomPanning = () => {
  const [zoomedIn, setZoomedIn] = useState(false)
  const [visibleControl, setVisibleControl] = useState(false)

  const container = useRef<HTMLButtonElement>(null)
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 })
  const { x: zoomShiftX, y: zoomShiftY } = getZoomPositioning(
    {
      x: pointerPosition.x,
      y: pointerPosition.y,
    },
    container.current?.getBoundingClientRect(),
  )

  const device = getDeviceType()

  const handleShowControl = () => {
    if (device === 'mobile') return

    setVisibleControl(true)
  }

  const handleHideControl = () => {
    if (device === 'mobile') return

    setZoomedIn(false)
    setVisibleControl(false)
  }

  const handleToggleZoom = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (device === 'mobile') {
      const { clientX, clientY } = event.nativeEvent
      setPointerPosition({ x: clientX, y: clientY })
    }
    setZoomedIn((zoom) => !zoom)
  }

  const handleDesktopPointerPosition = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (device === 'mobile') return

    const { clientX, clientY } = event.nativeEvent

    setPointerPosition({ x: clientX, y: clientY })
  }

  return {
    handleShowControl,
    handleHideControl,
    handleToggleZoom,
    handleDesktopPointerPosition,
    visibleControl,
    zoomedIn,
    container,
    zoomShiftX,
    zoomShiftY,
    pointerPosition,
  }
}
