import { Link } from "@tanstack/react-router";
import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { Route } from "@/routes/_layout.curator.$course.$lesson";
import useGetLessonById from "@/api/queries/lesson/useGetLessonById";
import CuratorCourseSkeleton from "./CuratorCourseSkeleton";

const CuratorCourse = () => {
  const params = Route.useParams();
  const { data: lesson, isPending } = useGetLessonById(params.lesson);

  if (isPending) {
    return <CuratorCourseSkeleton />;
  }

  return (
    <Flex
      $flexDirection="column"
      $gap={{ default: 12, lg: 30 }}
      $alignItems={{ default: "center", lg: "start" }}
    >
      <Typography $variant="h3" $textAlign={{ default: "center", lg: "left" }}>
        {lesson?.name}
      </Typography>
      <Typography
        $variant="text1"
        $textAlign={{ default: "center", lg: "left" }}
      >
        {lesson?.description}
      </Typography>
      <Button
        as={Link}
        $variant="primary"
        to="/curator/$course/$lesson/homeworks"
        params={params}
      >
        Проверить ДЗ
      </Button>
    </Flex>
  );
};

export default CuratorCourse;
