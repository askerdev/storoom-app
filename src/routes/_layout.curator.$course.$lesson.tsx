import { createFileRoute } from "@tanstack/react-router";
import CuratorCourse from "../features/curator/pages/CuratorCourse";

import { AllRoles } from "@/constants/enums";
import { GuardAccessOnlyBy } from "@/utils/auth";

export const Route = createFileRoute("/_layout/curator/$course/$lesson")({
  beforeLoad: GuardAccessOnlyBy(AllRoles.curator),
  component: () => <CuratorCourse />,
});
