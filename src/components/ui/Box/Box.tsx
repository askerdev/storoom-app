import styled from "styled-components";
import { toKebabCase } from "@/utils/helpers";
import { TMediaCSSProperties } from "@/styles/screens";
import { withMediaValue } from "@/styles/utils";

const Box = styled.div<Partial<TMediaCSSProperties>>`
  ${(props) =>
    Object.keys(props)
      .filter((property) => property.startsWith("$"))
      .map((property) =>
        withMediaValue(
          toKebabCase(property.slice(1)),
          props[property as keyof TMediaCSSProperties],
        ),
      )}
`;

export default Box;
