import { useEffect } from "react";
import { useStoreon } from "storeon/react";
import { socket } from "@/api/soket.ts";

import useAuth from "@/api/queries/auth/useAuth.ts";
import {
  ICuratorProfileRes,
  IStudentProfileRes,
} from "@/types/response.api.ts";
import Button from "@/components/ui/Button";
import { ChatEvents, ChatState, EChatEvents } from "@/store/chats.ts";

interface IChatProps {
  studentId?: string;
}

const ChatCuratorButton = ({ studentId }: IChatProps) => {
  const { dispatch, chats } = useStoreon<ChatState, ChatEvents>("chats");
  const { data: profile, isLoading: isAuthLoading } = useAuth<
    IStudentProfileRes & ICuratorProfileRes
  >();

  const handleOpenChat = () => {
    dispatch(EChatEvents.changeChatState, true);
    dispatch(EChatEvents.changeNotifications, [chats.room, false]);
  };

  useEffect(() => {
    if (!isAuthLoading) {
      const curator = profile?.curator?.id;
      const student = studentId;

      const room = [curator, student].sort().join("-");

      socket.emit("join_room", {
        curator,
        student,
        room,
        socketId: socket.id,
      });

      dispatch(EChatEvents.setRoom, room);
    }
  }, [
    studentId,
    dispatch,
    isAuthLoading,
    profile?.student?.id,
    profile?.curator?.id,
  ]);

  if (!profile?.id) {
    return null;
  }

  return (
    <Button
      as="label"
      $variant="primary"
      disabled={isAuthLoading}
      onClick={handleOpenChat}
    >
      Чат со студентом
    </Button>
  );
};

export default ChatCuratorButton;
