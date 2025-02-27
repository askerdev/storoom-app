import { createFileRoute, redirect } from "@tanstack/react-router";
import { AllRoles } from "@/constants/enums";
import { GuardAccessOnlyBy } from "@/utils/auth";

export const Route = createFileRoute("/_layout/teacher/")({
  beforeLoad: GuardAccessOnlyBy(AllRoles.teacher),
  loader: () => redirect({ to: "/teacher/courses" }),
});
