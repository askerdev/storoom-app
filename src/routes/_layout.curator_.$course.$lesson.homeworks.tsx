import { createFileRoute } from "@tanstack/react-router";
import PageContainer from "@/components/ui/PageContainer";
import CuratorHomeworks from "../features/curator/pages/CuratorHomeworks";

import { AllRoles } from "@/constants/enums";
import { GuardAccessOnlyBy } from "@/utils/auth";

export const Route = createFileRoute(
  "/_layout/curator/$course/$lesson/homeworks",
)({
  beforeLoad: GuardAccessOnlyBy(AllRoles.curator, AllRoles.teacher),
  component: () => (
    <PageContainer>
      <CuratorHomeworks />
    </PageContainer>
  ),
});
