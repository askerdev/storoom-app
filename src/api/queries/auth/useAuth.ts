import { useQuery } from "@tanstack/react-query";
import { authKeys } from "@/api/queries/keys";
import AuthService from "@/api/services/Auth.service";
import { IUser } from "@/types/units.api";

const useAuth = <T = IUser>() =>
  useQuery({
    queryKey: authKeys.all,
    queryFn: () => AuthService.profile<T>(),
    retry: 2,
  });

export default useAuth;
