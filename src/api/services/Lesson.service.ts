import { request } from "@/lib/request";
import { TLessonSchema } from "@/api/schemas/lesson";
import { ILessonByIdRes } from "@/types/response.api";
import { ILesson } from "@/types/units.api";

export default class LessonService {
  static async remove(id: string) {
    await request.delete(`/lessons/${id}`);
    return null;
  }

  static async create(
    payload: Omit<TLessonSchema, "videoUrl"> & {
      videoUrl: string[];
    },
  ) {
    await request.post("/lessons", payload);
    return null;
  }

  static async update(
    payload: { id: string } & Omit<TLessonSchema, "videoUrl"> & {
        videoUrl: string[];
      },
  ) {
    const { id, ...body } = payload;
    await request.patch(`/lessons/${id}`, body);
    return null;
  }

  static async getLesson(id: string) {
    const { data } = await request.get<ILessonByIdRes>(`/lessons/${id}`);
    return data;
  }

  static async updateOrder(list: ILesson[]) {
    const payload = list.map(({ id }, index) => ({ lesson: id, order: index }));
    await request.post("/lessons/order", payload);
    return null;
  }
}
