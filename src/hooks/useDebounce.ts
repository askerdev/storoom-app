import { useMemo } from "react";

import useLatest from "./useLatest";
import { debounced } from "@/utils/helpers";

const useDebounce = <T = unknown>(cb: (...args: T[]) => void, ms: number) => {
  const latestCb = useLatest(cb);
  return useMemo(
    () =>
      debounced((...args: T[]) => {
        latestCb.current(...args);
      }, ms),
    [latestCb, ms],
  );
};

export default useDebounce;
