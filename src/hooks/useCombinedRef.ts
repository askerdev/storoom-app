import { ForwardedRef, useCallback } from "react";

type OptionalRef<T> = ForwardedRef<T> | undefined;

export function useCombinedRefs<T>(...refs: OptionalRef<T>[]) {
  return useCallback((value: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        // eslint-disable-next-line no-param-reassign
        ref.current = value;
      }
    });
  }, refs);
}
