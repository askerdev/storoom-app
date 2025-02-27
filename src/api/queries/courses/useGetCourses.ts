import { useQuery } from "@tanstack/react-query";
import { defaultPagination } from "@/constants/api";
import CourseService from "@/api/services/Course.service";
import { courseKeys } from "../keys";
import { ICourseFilter } from "@/types/request.api";

const useGetCourses = (
  filter: ICourseFilter = defaultPagination,
  enabled = true,
) =>
  useQuery({
    queryKey: courseKeys.list(filter),
    queryFn: () => CourseService.getAll(filter),
    enabled,
  });

export default useGetCourses;
