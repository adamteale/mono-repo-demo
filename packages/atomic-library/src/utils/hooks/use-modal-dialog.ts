import { useRef } from 'react'

/**
 * Helper hook for managing a modal type of `dialog` element (meant to be used blocking the rest of the page).
 * Requires setting up the reference for the `dialog`
 * element and setting up `handleVerifyPointerPosition` as the `onClick`
 * method for it (so that it can close the modal clicking outside the actual content)
 *
 * The property `open` on the `dialog`
 * element **should not** be controlled directly through React if you want the `dialog` to act as a modal,
 * hence the helper functions `handleCloseModal` and `handleOpenModal`.
 */
export const useModalDialog = () => {
  const dialog = useRef<HTMLDialogElement>(null)

  const handleVerifyPointerPosition = (e: React.MouseEvent<HTMLDialogElement>) => {
    const { top, left, bottom, right } = e.currentTarget.getBoundingClientRect()
    const { clientX, clientY } = e

    const withinBoundaries = clientX >= left && clientX <= right && clientY >= top && clientY <= bottom

    if (!withinBoundaries) e.currentTarget.close()
  }

  const handleCloseModal = () => dialog.current?.close()

  const handleOpenModal = (scrollToTop: boolean = false) => {
    dialog.current?.showModal()
    if (typeof window !== 'undefined' && scrollToTop) window.scrollTo(0, 0)
  }

  return {
    dialog,
    handleVerifyPointerPosition,
    handleCloseModal,
    handleOpenModal,
  }
}
