import styled from "styled-components";

export type TLogoImageProps = { $width?: number; $height?: number };
export const LogoImage = styled.img<TLogoImageProps>`
  width: ${(props) => props.$width || 110}px;
  height: ${(props) => props.$height || 76}px;
`;
