import { useQuery } from "@tanstack/react-query";
import { compareLessonsSort } from "@/utils/helpers";
import CourseService from "@/api/services/Course.service";
import { courseKeys } from "../keys";

const useGetCourseById = (id: string, enabled = true) =>
  useQuery({
    queryKey: courseKeys.detail(id),
    queryFn: () => CourseService.getById(id),
    select: (data) => ({
      ...data,
      lessons: data.lessons.sort(compareLessonsSort("order")),
    }),
    enabled,
    retry: 1,
  });

export default useGetCourseById;
