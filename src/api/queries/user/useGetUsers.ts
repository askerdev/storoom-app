import { useQuery } from "@tanstack/react-query";
import { userKeys } from "@/api/queries/keys";
import UserService from "@/api/services/User.service";
import { IUser } from "@/types/units.api";
import { IUsersFilter } from "@/types/request.api";

const useGetUsers = <T = IUser>(filter: IUsersFilter, enabled = true) =>
  useQuery({
    queryFn: () => UserService.list<T>(filter),
    queryKey: userKeys.list(filter),
    enabled,
  });

export default useGetUsers;
