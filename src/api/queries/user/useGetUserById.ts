import { useQuery } from "@tanstack/react-query";
import UserService from "@/api/services/User.service";
import { userKeys } from "@/api/queries/keys";
import { IUser } from "@/types/units.api";

const useGetUserById = <T = IUser>(id: string, enabled = true) =>
  useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => UserService.getById<T>(id),
    enabled,
  });

export default useGetUserById;
