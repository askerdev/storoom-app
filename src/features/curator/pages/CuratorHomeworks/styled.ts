import styled from "styled-components";

export const CuratorHomeworksTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
`;

export const CuratorHomeworksTabsContainer = styled.div`
  display: flex;
  align-self: start;
`;

export const CuratorHomeworksTabItem = styled.button<{ $active: boolean }>`
  padding: 12px 20px;
  border-radius: 6px 6px 0 0;
  border: 1px solid
    ${(props) =>
      props.$active ? props.theme.colors.purple_100 : "transparent"};
  background-color: ${(props) => props.theme.colors.bg_gray};
  border-bottom: none;
`;
