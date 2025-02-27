import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { notesKeys } from "@/api/queries/keys";
import { APIError } from "@/types/units.api";
import NotesService from "@/api/services/Note.service";

const useRemoveNote = (
  options?: UseMutationOptions<unknown, APIError, string, unknown>,
) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: NotesService.remove,
    ...(options ?? {}),
    onSuccess: async (...args) => {
      await qc.invalidateQueries({ queryKey: notesKeys.all });
      toast.success("Заметка успешно удалена!");
      options?.onSuccess?.(...args);
    },
    onError: (err, ...args) => {
      toast.error("Возникла ошибка");
      console.log(err);
      options?.onError?.(err, ...args);
    },
  });
};

export default useRemoveNote;
