import { createFileRoute } from "@tanstack/react-router";
import PageContainer from "@/components/ui/PageContainer";

import { AllRoles } from "@/constants/enums";
import { GuardAccessOnlyBy } from "@/utils/auth";
import CuratorNotifications from "@/features/curator/components/CuratorNotifications";

export const Route = createFileRoute("/_layout/curator/notifications")({
  beforeLoad: GuardAccessOnlyBy(AllRoles.curator),
  component: () => (
    <PageContainer>
      <CuratorNotifications />
    </PageContainer>
  ),
});
