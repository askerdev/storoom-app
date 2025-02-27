import { useQuery } from "@tanstack/react-query";
import HomeworkService from "@/api/services/Homework.service";
import { homeworkKeys } from "@/api/queries/keys";
import { IHomeworkFilter } from "@/types/request.api";

const useGetHomeworks = (filter: IHomeworkFilter, enabled = true) =>
  useQuery({
    queryFn: () => HomeworkService.getAll(filter),
    queryKey: homeworkKeys.list(filter),
    enabled,
  });

export default useGetHomeworks;
