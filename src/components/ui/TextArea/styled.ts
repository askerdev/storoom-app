import styled, { CSSProperties } from "styled-components";
import { TValueWithMedia } from "@/styles/screens";
import { withMediaValue } from "@/styles/utils";

export const TextAreaStyledArea = styled.textarea<{
  $height?: TValueWithMedia<CSSProperties["height"]>;
  $width?: TValueWithMedia<CSSProperties["width"]>;
  $maxWidth?: TValueWithMedia<CSSProperties["maxWidth"]>;
}>`
  font-size: 16px;
  padding: 30px;
  border: 2px solid ${(props) => props.theme.colors.gray_100};
  border-radius: 6px;
  resize: none;
  ${(props) => withMediaValue("height", props.$height)}
  ${(props) => withMediaValue("width", props.$width)}
  ${(props) => withMediaValue("max-width", props.$maxWidth)}
`;
