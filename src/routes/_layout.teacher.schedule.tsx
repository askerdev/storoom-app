import { createFileRoute } from "@tanstack/react-router";
import TeacherSchedule from "../features/teacher/components/TeacherSchedule";

import { AllRoles } from "@/constants/enums";
import { GuardAccessOnlyBy } from "@/utils/auth";

export const Route = createFileRoute("/_layout/teacher/schedule")({
  beforeLoad: GuardAccessOnlyBy(AllRoles.teacher),
  component: () => <TeacherSchedule />,
});
