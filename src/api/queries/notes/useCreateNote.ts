import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { notesKeys } from "@/api/queries/keys";
import { APIError } from "@/types/units.api";
import { ICreateNoteDTO } from "@/types/request.api";
import NotesService from "@/api/services/Note.service";

const useCreateNote = (
  options?: UseMutationOptions<unknown, APIError, ICreateNoteDTO, unknown>,
) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: NotesService.create,
    ...(options ?? {}),
    onSuccess: async (...args) => {
      await qc.invalidateQueries({ queryKey: notesKeys.all });
      toast.success("Заметка успешно cоздана!");
      options?.onSuccess?.(...args);
    },
    onError: (err, ...args) => {
      toast.error(`Возникла ошибка: ${err.message}`);
      console.log(err);
      options?.onError?.(err, ...args);
    },
  });
};

export default useCreateNote;
