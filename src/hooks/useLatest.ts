import { useLayoutEffect, useRef } from "react";

const useLatest = <T>(value: T) => {
  const ref = useRef(value);

  useLayoutEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
};

export default useLatest;
