import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";
import Styles from "../styles/styles";
import { IUser } from "@/types/units.api";
import Chat from "@/components/Chat/Chat.tsx";

export const Route = createRootRouteWithContext<{ user: IUser | null }>()({
  component: () => (
    <>
      <Toaster
        closeButton
        richColors
        position="top-center"
        className="toaster"
      />
      <Styles>
        <Outlet />
        <Chat />
      </Styles>
    </>
  ),
});
