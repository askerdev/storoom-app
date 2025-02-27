import { useQuery } from "@tanstack/react-query";
import HomeworkService from "@/api/services/Homework.service";
import { homeworkKeys } from "@/api/queries/keys";

const useGetHomeworkById = (id: string, enabled = true) =>
  useQuery({
    queryKey: homeworkKeys.detail(id),
    queryFn: () => HomeworkService.getById(id),
    enabled,
  });

export default useGetHomeworkById;
