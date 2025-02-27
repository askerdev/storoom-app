import { useQuery } from "@tanstack/react-query";
import { subjectKeys } from "@/api/queries/keys";
import SubjectService from "@/api/services/Subject.service";

const useGetSubjects = (enabled = true) =>
  useQuery({
    queryKey: subjectKeys.lists(),
    queryFn: SubjectService.list,
    enabled,
  });

export default useGetSubjects;
