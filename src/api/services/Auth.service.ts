import { request } from "@/lib/request";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constants/auth";
import { AllRoles } from "@/constants/enums";
import { IRegisterDTO, ILoginDTO } from "@/types/request.api";
import { IProfileRes } from "@/types/response.api";
import { IUser } from "@/types/units.api";

export default class AuthService {
  static async logout() {
    try {
      await request.post("/auth/logout");
    } catch (_) {
      // skip if error
    }
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    return null;
  }

  static async login(body: ILoginDTO) {
    const { data } = await request.post<IUser>("/auth/login", body);
    return data;
  }

  static async register(body: IRegisterDTO) {
    const { data } = await request.post<IProfileRes>("/auth/register", {
      ...body,
      role: AllRoles.student,
    });
    return data;
  }

  static async profile<T = IProfileRes>() {
    const { data } = await request.get<T>("/auth/profile");
    return data;
  }
}
