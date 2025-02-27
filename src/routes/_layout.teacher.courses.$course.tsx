import { createFileRoute } from "@tanstack/react-router";
import TeacherCoursesCourse from "../features/teacher/components/TeacherCoursesCourse";

import { AllRoles } from "@/constants/enums";
import { GuardAccessOnlyBy } from "@/utils/auth";

export const Route = createFileRoute("/_layout/teacher/courses/$course")({
  beforeLoad: GuardAccessOnlyBy(AllRoles.teacher),
  component: () => <TeacherCoursesCourse />,
});
