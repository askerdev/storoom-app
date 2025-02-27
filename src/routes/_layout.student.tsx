import { createFileRoute, Outlet } from "@tanstack/react-router";

import Box from "@/components/ui/Box";
import ProfileNavigation from "../components/ProfileNavigation";
import { STUDENT_PROFILE_NAVIGATION } from "@/constants/profileNavigation";
import { AllRoles } from "@/constants/enums";
import { GuardAccessOnlyBy } from "@/utils/auth";
import PageContainer from "@/components/ui/PageContainer";

export const Route = createFileRoute("/_layout/student")({
  beforeLoad: GuardAccessOnlyBy(AllRoles.student),
  component: () => (
    <PageContainer>
      <Box
        $marginBottom={{
          default: 40,
          lg: 60,
        }}
      >
        <ProfileNavigation navigationItems={STUDENT_PROFILE_NAVIGATION} />
      </Box>
      <Outlet />
    </PageContainer>
  ),
});
