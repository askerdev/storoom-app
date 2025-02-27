import styled, { CSSProperties } from "styled-components";
import { media, TValueWithMedia } from "@/styles/screens";
import { withMediaValue } from "@/styles/utils";

export const StyledPageContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledPageContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${(props) => props.theme.screens.xl};
  padding: 80px 20px 120px 20px;

  ${media.lg`
    padding: 60px 0px 220px 0px;
  `}
`;

export const PageContainerScreenWrapper = styled.div<{
  $pl?: TValueWithMedia<CSSProperties["paddingLeft"]>;
  $pt?: TValueWithMedia<CSSProperties["paddingTop"]>;
  $pr?: TValueWithMedia<CSSProperties["paddingRight"]>;
  $pb?: TValueWithMedia<CSSProperties["paddingBottom"]>;
  $py?: TValueWithMedia<CSSProperties["paddingTop"]>;
  $px?: TValueWithMedia<CSSProperties["paddingRight"]>;
  $mt?: TValueWithMedia<CSSProperties["marginTop"]>;
  $mb?: TValueWithMedia<CSSProperties["marginBottom"]>;
  $ml?: TValueWithMedia<CSSProperties["marginLeft"]>;
  $mr?: TValueWithMedia<CSSProperties["marginRight"]>;
}>`
  max-width: 100%;
  width: 100%;

  ${media.xl`
    max-width: ${(props) => props.theme.screens.xl};
  `}

  ${(props) => withMediaValue("padding-left", props.$px)}
  ${(props) => withMediaValue("padding-right", props.$px)}
  ${(props) => withMediaValue("padding-top", props.$py)}
  ${(props) => withMediaValue("padding-bottom", props.$py)}

  ${(props) => withMediaValue("margin-top", props.$mt)}
  ${(props) => withMediaValue("margin-bottom", props.$mb)}
  ${(props) => withMediaValue("margin-left", props.$ml)}
  ${(props) => withMediaValue("margin-right", props.$mr)}

  ${(props) => withMediaValue("padding-left", props.$pl)}
  ${(props) => withMediaValue("padding-top", props.$pt)}
  ${(props) => withMediaValue("padding-right", props.$pr)}
  ${(props) => withMediaValue("padding-bottom", props.$pb)}
`;
