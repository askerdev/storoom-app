import { createFileRoute } from "@tanstack/react-router";
import { AllRoles } from "@/constants/enums";
import StudentLesson from "../features/student/pages/StudentLesson";
import { GuardAccessOnlyBy } from "@/utils/auth";

export const Route = createFileRoute(
  "/_layout/student/education/$course/$lesson",
)({
  validateSearch: (search: Record<string, string | undefined>) =>
    ({
      videoUrl: search?.videoUrl,
    }) as { videoUrl?: string },
  beforeLoad: GuardAccessOnlyBy(AllRoles.student),
  component: () => <StudentLesson />,
});
