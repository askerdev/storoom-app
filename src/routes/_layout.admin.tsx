import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import PageContainer from "@/components/ui/PageContainer";
import AdminPanelSkeleton from "@/features/admin/pages/AdminPanel/AdminPanelSkeleton";
import { AllRoles } from "@/constants/enums";
import { GuardAccessOnlyBy } from "@/utils/auth";

const AdminPanel = lazy(() => import("../features/admin/pages/AdminPanel"));

export const Route = createFileRoute("/_layout/admin")({
  beforeLoad: GuardAccessOnlyBy(AllRoles.admin),
  component: () => (
    <PageContainer>
      <AdminPanel />
    </PageContainer>
  ),
  pendingComponent: () => (
    <PageContainer>
      <AdminPanelSkeleton />
    </PageContainer>
  ),
});
