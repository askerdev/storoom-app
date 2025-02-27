import { request } from "@/lib/request";
import {
  ICourseFilter,
  ICreateCourseDTO,
  IUpdateCourseDTO,
} from "@/types/request.api";
import {
  ICourseByIdRes,
  ICourseListRes,
  ICuratorCourseListRes,
  IScheduleRes,
  ITeacherCourseListRes,
} from "@/types/response.api";

export default class CourseService {
  static async getSchedule(week: number) {
    const { data } = await request.get<IScheduleRes>(
      `/courses/schedule/${week}`,
    );
    return data;
  }

  static async remove(id: string) {
    await request.delete(`/courses/${id}`);
    return null;
  }

  static async update(id: string, body: IUpdateCourseDTO) {
    await request.patch(`/courses/${id}`, body);

    return null;
  }

  static async create(body: ICreateCourseDTO) {
    await request.post("/courses/create", body);

    return null;
  }

  static async getAllTeacherCourses(filter: ICourseFilter) {
    const { data } = await request.post<ITeacherCourseListRes>(
      "/courses/teacher/list",
      filter,
    );
    return data;
  }

  static async getAllCuratorCourses(filter: ICourseFilter) {
    const { data } = await request.post<ICuratorCourseListRes>(
      "/courses/teacher/list",
      filter,
    );
    return data;
  }

  static async getAll(filter: ICourseFilter) {
    const { data } = await request.post<ICourseListRes>(
      "/courses/list",
      filter,
    );
    return data;
  }

  static async getById(id: string) {
    const { data } = await request.get<ICourseByIdRes>(`/courses/${id}`);
    return data;
  }

  static async copy(id: string) {
    const { data } = await request.get<ICourseByIdRes>(`/courses/copy/${id}`);
    return data;
  }
}
