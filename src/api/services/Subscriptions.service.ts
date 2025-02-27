import { request } from "@/lib/request";
import { ISubscriptionsFilter } from "@/types/request.api";
import {
  IStudentSubscription,
  ISubscribedCoursesListRes,
  ISubscribedLessonsListRes,
} from "@/types/response.api";

export default class SubscriptionsService {
  static async switchCurator(from: string, to: string) {
    const { data } = await request.post("/subscriptions/curators/switch", {
      from,
      to,
    });
    return data;
  }

  static async subscribe(courseId: string, curatorId: string) {
    await request.post(`/subscriptions/subscribe/${courseId}/${curatorId}`);
    return null;
  }

  static async getSubscribedCuratorCourses(params: ISubscriptionsFilter) {
    const { data } = await request.post<ISubscribedCoursesListRes>(
      "/subscriptions/curator/list",
      params,
    );
    return data;
  }

  static async getSubscribedCourses(params: ISubscriptionsFilter) {
    const { data } = await request.post<ISubscribedCoursesListRes>(
      "/subscriptions/list",
      params,
    );
    return data;
  }

  static async getSubscribedLessonsByCourseId(
    id: string,
    params: ISubscriptionsFilter,
  ) {
    const { data } = await request.post<ISubscribedLessonsListRes>(
      `/subscriptions/courses/${id}/lessons/list`,
      params,
    );
    return data;
  }

  static async getStudentSubscriptions(studentId: string) {
    const { data } = await request.get<IStudentSubscription[]>(
      `/subscriptions/list/${studentId}`,
    );

    return data;
  }

  static async block(subscriptionId: string) {
    await request.post(`/subscriptions/block/${subscriptionId}`);
    return null;
  }

  static async unblock(subscriptionId: string) {
    await request.post(`/subscriptions/unblock/${subscriptionId}`);
    return null;
  }
}
