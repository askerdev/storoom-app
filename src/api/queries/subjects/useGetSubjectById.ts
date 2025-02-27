import { useQuery } from "@tanstack/react-query";
import { subjectKeys } from "@/api/queries/keys";
import SubjectService from "@/api/services/Subject.service";

const useGetSubjectById = (id: string, enabled = true) =>
  useQuery({
    queryKey: subjectKeys.detail(id),
    queryFn: () => SubjectService.getById(id),
    enabled,
  });

export default useGetSubjectById;
