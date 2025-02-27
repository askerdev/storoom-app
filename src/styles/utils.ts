import { css } from "styled-components";
import screens, { media, TValueWithMedia } from "@/styles/screens";

const getPostfix = (v: string | number) => (typeof v === "number" ? "px" : "");

export const withMediaValue = (
  propertyName: string,
  value: TValueWithMedia | undefined,
  fallback?: string | number,
) => {
  if (!value && fallback) {
    return css`
      ${propertyName}: ${fallback}${getPostfix(fallback)};
    `;
  }
  if (!value) {
    return null;
  }

  const isPrimitive = typeof value === "string" || typeof value === "number";

  if (isPrimitive) {
    return css`
      ${propertyName}: ${value}${getPostfix(value)};
    `;
  }

  const keys = Object.keys(screens) as (keyof typeof screens)[];

  return css`
    ${value?.default
      ? `${propertyName}: ${value.default}${getPostfix(value.default)}`
      : null};

    ${keys.map((key) => {
      const screenValue = value[key];
      if (!screenValue) {
        return null;
      }

      return media[key]`
          ${propertyName}: ${screenValue}${getPostfix(screenValue)};
        `;
    })}
  `;
};
