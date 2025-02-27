import { useQuery } from "@tanstack/react-query";
import UserService from "@/api/services/User.service";
import { userKeys } from "@/api/queries/keys";
import { ICuratorProfileRes } from "@/types/response.api.ts";

const useGetCuratorByCourseId = <T = ICuratorProfileRes>(
  courseId?: string,
  enabled = true,
) =>
  useQuery({
    queryKey: userKeys.detail(courseId),
    queryFn: () => UserService.getCuratorByCourseId<T>(courseId),
    enabled,
  });

export default useGetCuratorByCourseId;
