import { useCallback, useEffect, useRef } from "react";
import useLatest from "./useLatest";

const useClickOutside = (cb: () => void) => {
  const ref = useRef<HTMLDivElement>(null);
  const latestCb = useLatest(cb);

  const handleClickOutside = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        latestCb.current();
      }
    },
    [latestCb],
  );

  useEffect(() => {
    document.addEventListener("mouseup", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, [handleClickOutside]);

  return ref;
};

export default useClickOutside;
