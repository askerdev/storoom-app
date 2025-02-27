import { createFileRoute } from "@tanstack/react-router";
import PageContainer from "@/components/ui/PageContainer";
import StudentNotifications from "../features/student/pages/StudentNotifications";

import { AllRoles } from "@/constants/enums";
import { GuardAccessOnlyBy } from "@/utils/auth";

export const Route = createFileRoute("/_layout/student/notifications")({
  beforeLoad: GuardAccessOnlyBy(AllRoles.student),
  component: () => (
    <PageContainer>
      <StudentNotifications />
    </PageContainer>
  ),
});
