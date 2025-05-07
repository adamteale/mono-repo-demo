import { View } from "react-native";
import { useEffect, useId } from "react";
import { AtIcon } from "../../atoms";
import { useModalDialog } from "../../utils";
import { OrModalProps } from "./or-modal.types";

//Every component that uses OrModal needs to call useModalDialog() hook
//e.g Tm-Catalog
export const OrModal = ({
  children,
  closeButtonAriaLabel,
  showCloseButton = false,
  dataTestId = "or-modal",
  className = "",
  dialogRef,
  handleCloseModal,
}: OrModalProps) => {
  const headingId = useId();

  const { handleVerifyPointerPosition } = useModalDialog();

  // useEffect(() => {
  //   const bodyOverflowStyle = () => {
  //     document.body.style.overflow = dialogRef!.current?.open ? 'hidden' : ''
  //   }

  //   const observer = new MutationObserver(bodyOverflowStyle)

  //   if (dialogRef) {
  //     if (dialogRef.current) {
  //       observer.observe(dialogRef.current, { attributes: true, attributeFilter: ['open'] })
  //     }
  //   }

  //   return () => {
  //     observer.disconnect()
  //     document.body.style.overflow = ''
  //   }
  // }, [dialogRef])

  return (
    <dialog
      data-testid={dataTestId}
      // ref={dialogRef}
      aria-labelledby={headingId}
      className={`p-8 w-[20.438rem] md:w-[38.5rem] min-h-[15rem] border rounded-lg border-secondary mx-auto ${className}`}
      onClick={handleVerifyPointerPosition}
    >
      {showCloseButton && (
        <button
          className="absolute top-8 right-8"
          aria-label={closeButtonAriaLabel}
          onClick={handleCloseModal}
        >
          <AtIcon color="primary" type="cancel" />
        </button>
      )}
      {children}
    </dialog>
  );
};
