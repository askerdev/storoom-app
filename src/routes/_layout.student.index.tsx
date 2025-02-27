import { createFileRoute, redirect } from "@tanstack/react-router";
import { AllRoles } from "@/constants/enums";
import { GuardAccessOnlyBy } from "@/utils/auth";

export const Route = createFileRoute("/_layout/student/")({
  beforeLoad: GuardAccessOnlyBy(AllRoles.student),
  loader: () => {
    throw redirect({
      to: "/student/shop",
    });
  },
});
