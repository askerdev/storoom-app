import { createFileRoute } from "@tanstack/react-router";
import { AllRoles } from "@/constants/enums";
import { GuardAccessOnlyBy } from "@/utils/auth";
import StudentEducationCourse from "@/features/student/pages/StudentEducationCourse";

export const Route = createFileRoute("/_layout/student/education/$course/")({
  beforeLoad: GuardAccessOnlyBy(AllRoles.student),
  component: () => <StudentEducationCourse />,
});
