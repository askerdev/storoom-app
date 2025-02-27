import { useMutation } from "@tanstack/react-query";

import ChatService from "@/api/services/Chat.service.ts";

const useReadNotification = () =>
  useMutation({
    mutationFn: ChatService.readNotifications,
  });

export default useReadNotification;
