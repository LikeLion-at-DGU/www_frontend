import { useRef, useEffect, useCallback } from "react";

const useScrollFadeIn = (duration = 2, delay = 0) => {
  const element = useRef();

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer;
    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(element.current);
    }
    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: {
      opacity: 0,
      transform: "translate3d(0, 20px, 0)",
    },
  };
};

export default useScrollFadeIn;
