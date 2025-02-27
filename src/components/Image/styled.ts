import styled from "styled-components";
import { TValueWithMedia } from "@/styles/screens";
import { withMediaValue } from "@/styles/utils";

export const StyledImage = styled.img<{
  $width?: TValueWithMedia;
  $height?: TValueWithMedia;
}>`
  ${(props) => withMediaValue("width", props.$width)}
  ${(props) => withMediaValue("height", props.$height)}
  ${(props) => withMediaValue("min-width", props.$width)}
  ${(props) => withMediaValue("min-height", props.$height)}
`;
