import { FC, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import LessonStatus from "../LessonStatus";
import {
  StyledLessonListItem,
  StyledLessonListItemArrow,
  StyledLessonListItemContainer,
  StyledLessonListItemInfo,
  StyledLessonListItemVideoList,
} from "./styled";
import Typography from "@/components/ui/Typography";
import { ISubscribedLessonsListRes } from "@/types/response.api";

type TLesson = ISubscribedLessonsListRes["list"][number];

interface ILessonListItemProps extends TLesson {
  courseId: string;
  number: number;
}

const LessonListItem: FC<ILessonListItemProps> = ({
  id,
  courseId,
  number,
  name,
  videoUrl,
  homeworks,
}) => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);

  const handleOpenDropDown = () => {
    if (videoUrl.length <= 1) {
      navigate({
        to: "/student/education/$course/$lesson",
        params: {
          course: courseId,
          lesson: id,
        },
        search: { videoUrl: videoUrl[0] },
      });
      return;
    }

    setOpened((prev) => !prev);
  };

  return (
    <StyledLessonListItem>
      <StyledLessonListItemContainer onClick={handleOpenDropDown}>
        <LessonStatus status={homeworks?.[0]?.status} />
        <StyledLessonListItemInfo>
          <Typography $variant="text2" $color="gray_100">
            Урок {number}
          </Typography>
          <Typography $variant="button" $color="gray_200" $lineClamp="1">
            {name}
          </Typography>
        </StyledLessonListItemInfo>

        {videoUrl.length > 1 && (
          <StyledLessonListItemArrow
            $color="purple_100"
            $rotateDeg={opened ? -180 : -90}
          />
        )}
      </StyledLessonListItemContainer>
      {opened && (
        <StyledLessonListItemVideoList>
          {videoUrl.map((url, index) => (
            <Link
              key={url}
              to="/student/education/$course/$lesson"
              params={{
                course: courseId,
                lesson: id,
              }}
              search={{
                videoUrl: url,
              }}
            >
              <Typography $variant="text2" $color="gray_200">
                Видео №{index + 1}
              </Typography>
            </Link>
          ))}
        </StyledLessonListItemVideoList>
      )}
    </StyledLessonListItem>
  );
};

export default LessonListItem;
