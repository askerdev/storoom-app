import { request } from "@/lib/request";
import { IChatFilter } from "@/types/request.api";
import { IChatListRes, INotificationListRes } from "@/types/response.api";

export default class ChatService {
  static async getAll({ page, pageSize, roomName, skip }: IChatFilter) {
    const { data } = await request.post<IChatListRes>(
      `/chat/list/${roomName}`,
      {
        skip,
        page,
        pageSize,
      },
    );
    return data;
  }

  static async getNotifications() {
    const { data } =
      await request.get<INotificationListRes>(`/chat/notifications`);
    return data;
  }

  static async readNotifications(room: string) {
    const { data } = await request.get<INotificationListRes>(
      `/chat/notifications/read/${room}`,
    );
    return data;
  }
}
