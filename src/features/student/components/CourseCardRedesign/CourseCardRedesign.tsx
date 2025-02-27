import { FC } from "react";
import { Link } from "@tanstack/react-router";
import {
  StyledCourseCardRedesignImg,
  StyledCourseCardRedesign,
  StyledCourseCardRedesignContent,
  StyledCourseCardRedesignTextContainer,
  StyledCourseCardRedesignLessonCountContainer,
  StyledCourseCardRedesignTeacher,
} from "./styled";
import Typography from "@/components/ui/Typography";
import PlayerBook from "@/components/ui/icons/PlayerBook";
import Button from "@/components/ui/Button";
import Image from "@/components/Image";
import placeholderImage from "@/assets/placeholder.png";

interface ICourseCardRedesignProps {
  id: string;
  teacher: {
    avatar: string;
    name: string;
  };
  cover: string;
  title: string;
  lessonsCount: number;
}

const CourseCardRedesign: FC<ICourseCardRedesignProps> = ({
  id,
  teacher,
  cover,
  title,
  lessonsCount,
}) => (
  <StyledCourseCardRedesign>
    <StyledCourseCardRedesignImg>
      <StyledCourseCardRedesignTeacher>
        <Image
          src={teacher.avatar}
          $width={45}
          $height={45}
          onError={(e) => {
            e.currentTarget.src = placeholderImage;
          }}
        />
        <Typography $variant="text2" $color="white" $lineClamp="1">
          {teacher.name}
        </Typography>
      </StyledCourseCardRedesignTeacher>
      <Image
        src={cover}
        $width="100%"
        $height="100%"
        onError={(e) => {
          e.currentTarget.src = placeholderImage;
        }}
      />
    </StyledCourseCardRedesignImg>
    <StyledCourseCardRedesignContent>
      <StyledCourseCardRedesignTextContainer>
        <Typography $variant="button" $color="gray_300" $lineClamp="1">
          {title}
        </Typography>
        <StyledCourseCardRedesignLessonCountContainer>
          <PlayerBook $size={32} $color="gray_300" />
          <Typography $variant="text2" $color="gray_200">
            {lessonsCount} занятий
          </Typography>
        </StyledCourseCardRedesignLessonCountContainer>
      </StyledCourseCardRedesignTextContainer>
      <Button
        as={Link}
        to="/student/education/$course"
        params={{
          course: id,
        }}
        $variant="primary"
      >
        Перейти к просмотру
      </Button>
    </StyledCourseCardRedesignContent>
  </StyledCourseCardRedesign>
);

export default CourseCardRedesign;
