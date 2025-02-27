import { FC } from "react";
import { HomeworkStatus } from "@/constants/enums";
import { StyledLessonStatusCircle } from "./styled";
import Returned from "@/components/ui/icons/Returned";
import Approved from "@/components/ui/icons/Approved";

interface ILessonStatusProps {
  status?: HomeworkStatus;
}

const LessonStatus: FC<ILessonStatusProps> = ({ status }) => (
  <StyledLessonStatusCircle $status={status}>
    {status === HomeworkStatus.approved && (
      <Approved $size={22} $color="white" />
    )}
    {status === HomeworkStatus.returned && (
      <Returned $size={22} $color="white" />
    )}
  </StyledLessonStatusCircle>
);

export default LessonStatus;
