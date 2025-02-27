import { request } from "@/lib/request";
import { ICreateSubjectDTO, IUpdateSubjectDTO } from "@/types/request.api";
import {
  ICreateSubjectRes,
  ISubjectByIdRes,
  ISubjectListRes,
} from "@/types/response.api";

export default class SubjectService {
  static async create(body: ICreateSubjectDTO) {
    const { data } = await request.post<ICreateSubjectRes>(
      "/subjects/create",
      body,
    );
    return data;
  }

  static async list() {
    const { data } = await request.get<ISubjectListRes>("/subjects/list");
    return data;
  }

  static async update(id: string, body: IUpdateSubjectDTO) {
    const { data } = await request.patch(`/subjects/${id}`, body);
    return data;
  }

  static async getById(id: string) {
    const { data } = await request.get<ISubjectByIdRes>(`/subjects/${id}`);
    return data;
  }

  static async remove(id: string) {
    const { data } = await request.delete(`/subjects/${id}`);
    return data;
  }
}
