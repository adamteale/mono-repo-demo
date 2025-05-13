import { useState, useEffect, useRef } from "react";

export const useMobileSearchbox = () => {
  const [showMobileSearchbox, setShowMobileSearchbox] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const toggleMobileSearchbox = (
    _event?: React.MouseEvent<HTMLButtonElement>
  ) => {
    setShowMobileSearchbox(!showMobileSearchbox);
  };

  // useEffect(() => {
  //   let timeoutId: NodeJS.Timeout

  //   if (showMobileSearchbox) {
  //     document.body.style.overflow = 'hidden'
  //     if (searchRef.current) {
  //       searchRef.current.style.display = 'block'
  //       timeoutId = setTimeout(() => {
  //         searchRef.current!.style.transform = 'translateX(0)'
  //       }, 0)
  //     }
  //   } else {
  //     document.body.style.overflow = 'auto'
  //     if (searchRef.current) {
  //       searchRef.current.style.transform = 'translateX(110vw)'
  //       timeoutId = setTimeout(() => {
  //         searchRef.current!.style.display = 'none'
  //       }, 500)
  //     }
  //   }

  //   return () => clearTimeout(timeoutId)
  // }, [showMobileSearchbox])

  return { showMobileSearchbox, searchRef, toggleMobileSearchbox };
};
