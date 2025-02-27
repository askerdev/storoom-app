import { useQuery } from "@tanstack/react-query";
import { useStoreon } from "storeon/react";
import { chatKeys } from "../keys";
import ChatService from "@/api/services/Chat.service.ts";
import { ChatEvents, ChatState, EChatEvents } from "@/store/chats.ts";

const useGetNotifications = (enabled = true) => {
  const { dispatch } = useStoreon<ChatState, ChatEvents>("chats");

  return useQuery({
    queryKey: chatKeys.list("notifications"),
    queryFn: async () => {
      const data = await ChatService.getNotifications();

      data.allRooms.forEach((room) => {
        dispatch(EChatEvents.addRoom, [room.name, room]);
      });
      data.notification.rooms.forEach((room) => {
        dispatch(EChatEvents.changeNotifications, [room, true]);
      });

      return data;
    },
    enabled,
  });
};

export default useGetNotifications;
