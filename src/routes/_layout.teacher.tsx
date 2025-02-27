import { createFileRoute, Outlet } from "@tanstack/react-router";

import Box from "@/components/ui/Box";
import PageContainer from "@/components/ui/PageContainer";
import ProfileNavigation from "../components/ProfileNavigation";
import { AllRoles } from "@/constants/enums";
import { TEACHER_PROFILE_NAVIGATION } from "@/constants/profileNavigation";
import { GuardAccessOnlyBy } from "@/utils/auth";

export const Route = createFileRoute("/_layout/teacher")({
  beforeLoad: GuardAccessOnlyBy(AllRoles.teacher),
  component: () => (
    <PageContainer>
      <Box
        $marginBottom={{
          default: 40,
          lg: 60,
        }}
      >
        <ProfileNavigation navigationItems={TEACHER_PROFILE_NAVIGATION} />
      </Box>
      <Outlet />
    </PageContainer>
  ),
});
