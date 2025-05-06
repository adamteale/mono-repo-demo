import { useEffect, useRef, useState } from "react";

export const useStickBar = (
  onCloseStickbar: Function | undefined,
  isStickBarHidden: boolean | undefined
) => {
  const [isHidden, setIsHidden] = useState(isStickBarHidden ?? true);
  const stickBarContainerRef = useRef<View>(null);

  useEffect(() => {
    setIsHidden(!!isStickBarHidden);
  }, [isStickBarHidden]);

  const getStickBarHeight = () => {
    if (!stickBarContainerRef.current) return "0px";

    const computedStyle = getComputedStyle(stickBarContainerRef.current);
    const height = computedStyle.height;
    return height;
  };

  const handleCloseStickBar = () => {
    onCloseStickbar?.();
    setIsHidden(true);
  };

  return {
    isHidden,
    stickBarContainerRef,
    getStickBarHeight,
    handleCloseStickBar,
  };
};
