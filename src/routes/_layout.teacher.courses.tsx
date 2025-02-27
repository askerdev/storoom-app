import { createFileRoute } from "@tanstack/react-router";
import TeacherCourses from "../features/teacher/components/TeacherCourses";

import { AllRoles } from "@/constants/enums";
import { GuardAccessOnlyBy } from "@/utils/auth";

export const Route = createFileRoute("/_layout/teacher/courses")({
  beforeLoad: GuardAccessOnlyBy(AllRoles.teacher),
  component: () => <TeacherCourses />,
});
