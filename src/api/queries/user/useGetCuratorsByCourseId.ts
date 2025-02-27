import { useInfiniteQuery } from "@tanstack/react-query";
import { userKeys } from "@/api/queries/keys";
import { defaultPagination } from "@/constants/api";
import { IUsersFilter } from "@/types/request.api";
import UserService from "@/api/services/User.service";

const useGetInfiniteCuratorsByCourseId = (
  courseId: string,
  filter?: IUsersFilter,
) =>
  useInfiniteQuery({
    queryKey: userKeys.infiniteList(filter),
    queryFn: ({ pageParam }) =>
      UserService.getCuratorsByCourseId(courseId, { ...filter, ...pageParam }),
    initialPageParam: defaultPagination,
    getNextPageParam: (last) => {
      const hasNextPage = last.pagination.page < last.pagination.total - 1;
      if (!hasNextPage) {
        return null;
      }
      return {
        page: last.pagination.page + 1,
        pageSize: last.pagination.pageSize,
      };
    },
  });

export default useGetInfiniteCuratorsByCourseId;
