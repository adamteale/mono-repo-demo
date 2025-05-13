import { RefObject, useEffect } from "react";

export const useClickOutside = (ref: RefObject<any>, callback: () => void) => {
  const handleOutsideClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleOutsideClick)
  //   return () => {
  //     document.removeEventListener('mousedown', handleOutsideClick)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
};
