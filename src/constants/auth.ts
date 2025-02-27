import { AllRoles } from "./enums";

export const ACCESS_TOKEN_KEY = "accessToken";
export const REFRESH_TOKEN_KEY = "refreshToken";

export const BasePages = {
  [AllRoles.admin]: "/admin",
  [AllRoles.student]: "/student",
  [AllRoles.curator]: "/curator",
  [AllRoles.teacher]: "/teacher",
};
