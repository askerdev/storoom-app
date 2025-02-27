import { request } from "@/lib/request";
import {
  ICreateUserDTO,
  IUpdateCuratorDTO,
  IUpdateTeacherDTO,
  IUpdateUserDTO,
  IUsersFilter,
} from "@/types/request.api";
import { IUser } from "@/types/units.api";
import {
  ICuratorListByCourseIdRes,
  ICuratorListRes,
  ICuratorProfileRes,
  IUserListRes,
} from "@/types/response.api";

export default class UserService {
  static async getCuratorsByCourseId(courseId: string, filter?: IUsersFilter) {
    const { data } = await request.post<ICuratorListByCourseIdRes>(
      `/users/curators/${courseId}/list`,
      filter,
    );
    return data;
  }

  static async updateCurator(userId: string, body: IUpdateCuratorDTO) {
    await request.patch(`/users/curator/${userId}`, body);
    return null;
  }

  static async updateTeacher(userId: string, body: IUpdateTeacherDTO) {
    await request.patch(`/users/teacher/${userId}`, body);
    return null;
  }

  static async remove(id: string) {
    await request.delete(`/users/${id}`);
    return null;
  }

  static async create(body: ICreateUserDTO) {
    await request.post("/users/create", body);
    return null;
  }

  static async update(id: string, body: IUpdateUserDTO) {
    await request.patch(`/users/${id}`, body);
    return null;
  }

  static async curatorList(filter?: IUsersFilter) {
    const { data } = await request.post<ICuratorListRes>(
      "/users/curators/list",
      filter,
    );
    return data;
  }

  static async list<T = IUser>(filter: IUsersFilter) {
    const { data } = await request.post<IUserListRes<T>>("/users/list", filter);
    return data;
  }

  static async getById<T = IUser>(id: string) {
    const { data } = await request.get<T>(`/users/${id}`);
    return data;
  }

  static async getCuratorByCourseId<T = ICuratorProfileRes>(courseId?: string) {
    const { data } = await request.get<T>(`/users/curator/${courseId}`);
    return data;
  }
}
