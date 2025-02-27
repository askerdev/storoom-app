import { useInfiniteQuery } from "@tanstack/react-query";
import { subscriptionKeys } from "@/api/queries/keys";
import SubscriptionsService from "@/api/services/Subscriptions.service";
import { defaultPagination } from "@/constants/api";
import { ISubscriptionsFilter } from "@/types/request.api";

const useSubscribedCuratorCourses = (
  params?: ISubscriptionsFilter,
  enabled = true,
) =>
  useInfiniteQuery({
    enabled,
    queryKey: subscriptionKeys.infiniteList(params),
    queryFn: ({ pageParam }) =>
      SubscriptionsService.getSubscribedCuratorCourses({
        ...params,
        ...pageParam,
      }),
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

export default useSubscribedCuratorCourses;
