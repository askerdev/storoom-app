import { useInfiniteQuery } from "@tanstack/react-query";
import { courseKeys } from "@/api/queries/keys";
import CourseService from "@/api/services/Course.service";
import { defaultPagination } from "@/constants/api";
import { ICourseFilter } from "@/types/request.api";

const useGetInfiniteCuratorCourses = (filter?: ICourseFilter) =>
  useInfiniteQuery({
    queryKey: courseKeys.infiniteList(filter),
    queryFn: ({ pageParam }) =>
      CourseService.getAllCuratorCourses({ ...filter, ...pageParam }),
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

export default useGetInfiniteCuratorCourses;
