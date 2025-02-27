import { FC } from "react";
import { Link } from "@tanstack/react-router";
import {
  StyledLessonCardRedesign,
  StyledLessonCardRedesignContent,
  StyledLessonCardRedesignImg,
  StyledLessonCardRedesignLessonWithIconContainer,
  StyledLessonCardRedesignTextContainer,
} from "./styled";
import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import Human from "@/components/ui/icons/Human";
import placeholderImage from "@/assets/placeholder.png";

interface ILessonCardRedesignProps {
  id: string;
  course: string;
  teacher: {
    name: string;
  };
  description: string;
  cover: string;
  title: string;
}

const LessonCardRedesign: FC<ILessonCardRedesignProps> = ({
  id,
  course,
  cover,
  teacher,
  title,
  description,
}) => (
  <StyledLessonCardRedesign>
    <StyledLessonCardRedesignImg
      src={cover}
      onError={(e) => {
        e.currentTarget.src = placeholderImage;
      }}
    />
    <StyledLessonCardRedesignContent>
      <StyledLessonCardRedesignTextContainer>
        <Typography $variant="button" $color="gray_300" $lineClamp="1">
          {title}
        </Typography>

        <Typography $variant="text2" $color="gray_300" $lineClamp="2">
          {description}
        </Typography>

        <StyledLessonCardRedesignLessonWithIconContainer>
          <Human $size={32} $color="gray_300" />
          <Typography $variant="text2" $color="gray_200">
            {teacher.name}
          </Typography>
        </StyledLessonCardRedesignLessonWithIconContainer>

        {/* <StyledLessonCardRedesignLessonCountContainer>
          <Calendar $size={32} $color="gray_300" />
          <Typography $variant="text2" $color="gray_200">
            time
          </Typography>
        </StyledLessonCardRedesignLessonCountContainer> */}
      </StyledLessonCardRedesignTextContainer>
      <Button
        as={Link}
        to="/student/education/$course/$lesson"
        params={{
          course,
          lesson: id,
        }}
        $variant="primary"
      >
        Перейти к просмотру
      </Button>
    </StyledLessonCardRedesignContent>
  </StyledLessonCardRedesign>
);

export default LessonCardRedesign;
