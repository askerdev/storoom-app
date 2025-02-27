import styled, { CSSProperties } from "styled-components";
import { TValueWithMedia } from "@/styles/screens";
import { withMediaValue } from "@/styles/utils";

const Flex = styled.div<{
  $height?: TValueWithMedia<CSSProperties["height"]>;
  $width?: TValueWithMedia<CSSProperties["width"]>;
  $alignItems?: TValueWithMedia<CSSProperties["alignItems"]>;
  $justifyContent?: TValueWithMedia<CSSProperties["justifyContent"]>;
  $flexDirection?: TValueWithMedia<CSSProperties["flexDirection"]>;
  $flexWrap?: TValueWithMedia<CSSProperties["flexWrap"]>;
  $gap?: TValueWithMedia<CSSProperties["gap"]>;
  $flexGrow?: TValueWithMedia<CSSProperties["flexGrow"]>;
  $minWidth?: TValueWithMedia<CSSProperties["minWidth"]>;
  $maxWidth?: TValueWithMedia<CSSProperties["maxWidth"]>;
  $mb?: TValueWithMedia<CSSProperties["marginBottom"]>;
  $overflow?: TValueWithMedia<CSSProperties["overflow"]>;
  $p?: TValueWithMedia<CSSProperties["padding"]>;
}>`
  display: flex;

  ${(props) => withMediaValue("max-width", props.$maxWidth)}
  ${(props) => withMediaValue("margin-bottom", props.$mb)}
  ${(props) => withMediaValue("flex-grow", props.$flexGrow)}
  ${(props) => withMediaValue("height", props.$height)}
  ${(props) => withMediaValue("width", props.$width)}
  ${(props) => withMediaValue("flex-direction", props.$flexDirection)}
  ${(props) => withMediaValue("flex-wrap", props.$flexWrap)}
  ${(props) => withMediaValue("gap", props.$gap)}
  ${(props) => withMediaValue("align-items", props.$alignItems)}
  ${(props) => withMediaValue("justify-content", props.$justifyContent)}
  ${(props) => withMediaValue("overflow", props.$overflow)}
  ${(props) => withMediaValue("padding", props.$p)}
`;

export default Flex;
