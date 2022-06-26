import { MutableRefObject, RefObject, useEffect, useState } from "react";

export const useIntersectionObserver = (
  ref: RefObject<HTMLInputElement>,
  observerProps: IntersectionObserverInit | undefined,
  onlyOnce: boolean = false
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);

        if (onlyOnce && ref?.current) {
          observer.unobserve(ref.current);
        }
      } else {
        if (onlyOnce === false) {
          setIsVisible(false);
        }
      }
    }, observerProps);
    if (ref?.current) observer.observe(ref.current);
    return () => observer.disconnect();
  });

  return isVisible;
};

export default useIntersectionObserver;
