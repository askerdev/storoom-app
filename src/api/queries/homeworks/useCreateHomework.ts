import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import HomeworkService from "@/api/services/Homework.service";
import { homeworkKeys, subscriptionKeys } from "@/api/queries/keys";

const useCreateHomework = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: HomeworkService.create,
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: homeworkKeys.all });
      await qc.invalidateQueries({ queryKey: subscriptionKeys.all });
      toast.success("Домашнее задание успешно добавлено");
    },
    onError: (err) => {
      toast.error("Возникла ошибка");
      console.log(err);
    },
  });
};

export default useCreateHomework;
