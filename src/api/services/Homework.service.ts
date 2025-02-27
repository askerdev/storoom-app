import { request } from "@/lib/request";
import { TCreateHomeworkSchema } from "@/api/schemas/homework";
import { IHomeworkFilter } from "@/types/request.api";
import {
  IHomeworkByIdRes,
  IHomeworkByLessonIdRes,
  IHomeworkListRes,
} from "@/types/response.api";
import { IHomework } from "@/types/units.api";

export default class HomeworkService {
  static async getByLessonId(id: string) {
    const { data } = await request.get<IHomeworkByLessonIdRes>(
      `/homeworks/by-lesson/${id}`,
    );
    return data ?? null;
  }

  static async getAll(filter: IHomeworkFilter) {
    const { data } = await request.post<IHomeworkListRes>(
      `/homeworks/list`,
      filter,
    );
    return data;
  }

  static async create(payload: TCreateHomeworkSchema) {
    await request.post("/homeworks/create", payload);
    return null;
  }

  static async update(payload: Partial<IHomework> & { id: string }) {
    const { id, ...body } = payload;
    await request.patch(`/homeworks/${id}`, body);
    return null;
  }

  static async getById(id: string) {
    const { data } = await request.get<IHomeworkByIdRes>(`/homeworks/${id}`);
    return data;
  }
}
