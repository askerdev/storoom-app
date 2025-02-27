import { Link } from "@tanstack/react-router";
import { Route } from "@/routes/_layout.student.education.$course.$lesson";
import useGetLessonById from "@/api/queries/lesson/useGetLessonById";

import {
  StyledReactPlayer,
  StyledStudentLesson,
  StyledStudentLessonCol,
  StyledStudentLessonContainer,
  StyledStudentLessonDescriptionItem,
  StyledStudentLessonHeader,
  StyledStudentLessonRow,
} from "./styled";
import StudentLessonSkeleton from "./StudentLessonSkeleton";
import LessonsList from "@/features/student/components/LessonsList";
import ReadonlyFileList from "@/components/ReadonlyFileList";
import Typography from "@/components/ui/Typography";
import StudentHomeworkForm from "../../components/StudentHomeworkForm";
import StudentNotes from "../../components/StudentNotes";
import Button from "@/components/ui/Button";
import ChatStudentButton from "@/components/ChatButton/ChatStudentButton.tsx";

const StudentLesson = () => {
  const params = Route.useParams();
  const { data: lesson, isPending, isError } = useGetLessonById(params.lesson);
  const query = Route.useSearch();

  if (isError) {
    return null;
  }

  if (isPending) {
    return <StudentLessonSkeleton />;
  }

  return (
    <StyledStudentLesson>
      <StyledStudentLessonHeader
        as={Link}
        to="/student/education/$course"
        params={{
          course: params.course,
        }}
      >
        <svg
          width="67"
          height="38"
          viewBox="0 0 67 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M64 21.5C65.3807 21.5 66.5 20.3807 66.5 19C66.5 17.6193 65.3807 16.5 64 16.5V21.5ZM1.23223 17.2322C0.255924 18.2085 0.255924 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.34602 18.1184 0.34602 17.1421 1.32233L1.23223 17.2322ZM64 16.5L3 16.5V21.5L64 21.5V16.5Z"
            fill="#3A3A3A"
          />
        </svg>

        <Typography $variant="h2" $color="black">
          {lesson.name}
        </Typography>
      </StyledStudentLessonHeader>
      <StyledStudentLessonContainer>
        <StyledReactPlayer
          url={query?.videoUrl ?? lesson.videoUrl[0]}
          controls
        />
        <LessonsList />
      </StyledStudentLessonContainer>
      <StyledStudentLessonRow>
        <StyledStudentLessonCol>
          <StyledStudentLessonDescriptionItem>
            <Typography $variant="h2" $color="black">
              Описание урока
            </Typography>
            <Typography $variant="text2" $color="black">
              {lesson.description}
            </Typography>
          </StyledStudentLessonDescriptionItem>
          <StyledStudentLessonDescriptionItem>
            <Typography $variant="h2" $color="black">
              Домашнее задание
            </Typography>
            <Typography $variant="text2" $color="black">
              {lesson.homeworkDescription}
            </Typography>
          </StyledStudentLessonDescriptionItem>
        </StyledStudentLessonCol>
        <StyledStudentLessonCol>
          {lesson.testUrl && (
            <Button
              as="a"
              href={lesson.testUrl}
              $variant="primary"
              $fullWidth
              target="_blank"
            >
              Тест
            </Button>
          )}
          <ChatStudentButton course={params.course} />
          <ReadonlyFileList title="Материалы к уроку" list={lesson.material} />
          <ReadonlyFileList
            title="Материалы к ДЗ"
            list={lesson.homeworkMaterial}
          />
          <StudentHomeworkForm lesson={lesson.id} />
        </StyledStudentLessonCol>
      </StyledStudentLessonRow>
      <StyledStudentLessonRow>
        <StudentNotes lesson={lesson.id} />
      </StyledStudentLessonRow>
    </StyledStudentLesson>
  );
};

export default StudentLesson;
