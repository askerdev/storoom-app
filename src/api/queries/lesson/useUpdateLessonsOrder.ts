import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import LessonService from "@/api/services/Lesson.service";

const useUpdateLessonsOrder = () =>
  useMutation({
    mutationFn: LessonService.updateOrder,
    onError: (err) => {
      toast.error("Произошла ошибка");
      console.log(err);
    },
  });

export default useUpdateLessonsOrder;
