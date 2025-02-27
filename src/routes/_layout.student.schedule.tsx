import { createFileRoute } from "@tanstack/react-router";
import StudentSchedule from "../features/student/pages/StudentShedule";

import { AllRoles } from "@/constants/enums";
import { GuardAccessOnlyBy } from "@/utils/auth";

export const Route = createFileRoute("/_layout/student/schedule")({
  beforeLoad: GuardAccessOnlyBy(AllRoles.student),
  component: () => <StudentSchedule />,
});
