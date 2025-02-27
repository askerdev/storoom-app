import { request } from "@/lib/request";
import { ICreateNoteDTO, INotesFilter } from "@/types/request.api";
import { INoteListRes } from "@/types/response.api";

export default class NotesService {
  static async create(body: ICreateNoteDTO) {
    await request.post("/notes/create", body);
    return null;
  }

  static async list(filter: INotesFilter) {
    const { data } = await request.post<INoteListRes>("/notes/list", filter);
    return data;
  }

  static async remove(id: string) {
    await request.delete(`/notes/${id}`);
    return null;
  }
}
