import { createFileRoute } from "@tanstack/react-router";
import PageContainer from "@/components/ui/PageContainer";
import CuratorCourses from "../features/curator/pages/CuratorCourses";

import { AllRoles } from "@/constants/enums";
import { GuardAccessOnlyBy } from "@/utils/auth";

export const Route = createFileRoute("/_layout/curator")({
  beforeLoad: GuardAccessOnlyBy(AllRoles.curator),
  component: () => (
    <PageContainer>
      <CuratorCourses />
    </PageContainer>
  ),
});
