import { createFileRoute, redirect } from "@tanstack/react-router";

import Flex from "@/components/ui/Flex";
import LoginForm from "../features/auth/components/LoginForm";
import { BasePages } from "@/constants/auth";
import { decodeUser } from "@/utils/auth";

export const Route = createFileRoute("/auth/login")({
  beforeLoad: () => {
    const user = decodeUser();
    if (user?.id && user?.role) {
      throw redirect({
        to: BasePages[user.role],
      });
    }
  },
  component: () => (
    <Flex
      $width="100%"
      $height="100dvh"
      $justifyContent="center"
      $alignItems="center"
    >
      <LoginForm />
    </Flex>
  ),
});
