import styled from "styled-components";
import Arrow from "@/components/ui/icons/Arrow";

export const StyledLessonListItemContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledLessonListItemArrow = styled(Arrow)`
  position: absolute;
  right: 8px;
  color: ${(props) => props.theme.colors.gray_100};
  transform: rotate(${(props) => props.$rotateDeg}deg);
`;

export const StyledLessonListItemVideoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-left: 52px;
`;

export const StyledLessonListItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledLessonListItem = styled.div``;
