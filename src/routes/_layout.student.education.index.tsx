import { createFileRoute } from "@tanstack/react-router";

import { AllRoles } from "@/constants/enums";
import { GuardAccessOnlyBy } from "@/utils/auth";
import StudentEducation from "@/features/student/pages/StudentEducation";

export const Route = createFileRoute("/_layout/student/education/")({
  beforeLoad: GuardAccessOnlyBy(AllRoles.student),
  component: () => <StudentEducation />,
});
