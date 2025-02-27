import { redirect } from "@tanstack/react-router";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";
import { AllRoles } from "@/constants/enums";
import { IUser } from "@/types/units.api";
import { ACCESS_TOKEN_KEY } from "@/constants/auth";

export const decodeUser = (): Partial<IUser> | null => {
  try {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY) as string;
    return jwtDecode<IUser>(token);
  } catch (_) {
    return null;
  }
};

export const GuardAccessOnlyBy =
  (...roles: AllRoles[]) =>
  () => {
    const user = decodeUser();
    if (!user?.id || !user?.role || !roles.includes(user.role)) {
      toast.error("Доступ запрещён!");
      throw redirect({
        to: "/auth/login",
      });
    }
  };
