import { RefObject, useEffect } from "react";

const useMutationObserver = <TElement extends HTMLElement>(
  ref: RefObject<TElement>,
  callback: MutationCallback,
  options: MutationObserverInit,
) => {
  useEffect(() => {
    if (ref.current) {
      const observer = new MutationObserver(callback);
      observer.observe(ref.current, options);
      return () => observer.disconnect();
    }
    return () => {};
  }, [callback, options, ref]);
};

export default useMutationObserver;
