import { createFileRoute } from "@tanstack/react-router";
import Box from "@/components/ui/Box";
import StudentBalance from "../features/student/components/StudentBalance";

import CoursesList from "../features/student/components/CoursesList";

import { AllRoles } from "@/constants/enums";
import { GuardAccessOnlyBy } from "@/utils/auth";

export const Route = createFileRoute("/_layout/student/shop")({
  beforeLoad: GuardAccessOnlyBy(AllRoles.student),
  component: () => (
    <>
      <StudentBalance />
      <Box $marginTop={159}>
        <CoursesList />
      </Box>
    </>
  ),
});
