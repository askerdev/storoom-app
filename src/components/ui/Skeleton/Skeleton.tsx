import styled, { CSSProperties, keyframes } from "styled-components";
import { TValueWithMedia } from "@/styles/screens";
import { withMediaValue } from "@/styles/utils";

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
`;

const Skeleton = styled.div<{
  $size?: TValueWithMedia<CSSProperties["width"]>;
  $width?: TValueWithMedia<CSSProperties["width"]>;
  $maxWidth?: TValueWithMedia<CSSProperties["maxWidth"]>;
  $height?: TValueWithMedia<CSSProperties["height"]>;
  $maxHeight?: TValueWithMedia<CSSProperties["maxHeight"]>;
  $borderRadius?: TValueWithMedia<CSSProperties["borderRadius"]>;
  $aspectRatio?: TValueWithMedia<CSSProperties["aspectRatio"]>;
  $flexShrink?: TValueWithMedia<CSSProperties["flexShrink"]>;
}>`
  background: #dcdcdc;
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  ${(props) => withMediaValue("width", props.$size)};
  ${(props) => withMediaValue("height", props.$size)};
  ${(props) => withMediaValue("width", props.$width)};
  ${(props) => withMediaValue("height", props.$height)};
  ${(props) => withMediaValue("min-width", props.$width)};
  ${(props) => withMediaValue("min-height", props.$height)};
  ${(props) => withMediaValue("max-width", props.$maxWidth)};
  ${(props) => withMediaValue("max-height", props.$maxHeight)};
  ${(props) => withMediaValue("border-radius", props.$borderRadius, 6)};
  ${(props) => withMediaValue("aspect-ratio", props.$aspectRatio)};
  ${(props) => withMediaValue("flex-shrink", props.$flexShrink)};
`;

export default Skeleton;
