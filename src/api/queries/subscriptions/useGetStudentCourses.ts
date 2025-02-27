import { useQuery } from "@tanstack/react-query";
import { subscriptionKeys } from "@/api/queries/keys";
import SubscriptionsService from "@/api/services/Subscriptions.service";

const useGetStudentCourses = (studentId: string, enabled = true) =>
  useQuery({
    queryKey: subscriptionKeys.list(studentId),
    queryFn: () => SubscriptionsService.getStudentSubscriptions(studentId),
    enabled,
  });

export default useGetStudentCourses;
