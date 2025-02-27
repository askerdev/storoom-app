import { useEffect } from "react";
import { useStoreon } from "storeon/react";
import { socket } from "@/api/soket.ts";
import useGetCuratorByCourseId from "@/api/queries/user/useGetCuratorByCourseId.ts";

import useAuth from "@/api/queries/auth/useAuth.ts";
import {
  ICuratorProfileRes,
  IStudentProfileRes,
} from "@/types/response.api.ts";
import Button from "@/components/ui/Button";
import { ChatEvents, ChatState, EChatEvents } from "@/store/chats.ts";

interface IChatProps {
  course?: string;
}

const ChatStudentButton = ({ course }: IChatProps) => {
  const { dispatch, chats } = useStoreon<ChatState, ChatEvents>("chats");
  const { data: profile, isLoading: isAuthLoading } = useAuth<
    IStudentProfileRes & ICuratorProfileRes
  >();
  const { data: courseCurator, isLoading: isGetCuratorByCourseIdLoading } =
    useGetCuratorByCourseId(course, !!profile?.student?.id);

  const handleOpenChat = () => {
    dispatch(EChatEvents.changeChatState, true);
    dispatch(EChatEvents.changeNotifications, [chats.room, false]);
  };

  useEffect(() => {
    if (!(isAuthLoading && isGetCuratorByCourseIdLoading)) {
      const curator = courseCurator?.curator?.id;
      const student = profile?.student?.id;

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
    dispatch,
    isAuthLoading,
    isGetCuratorByCourseIdLoading,
    profile?.student?.id,
    profile?.curator?.id,
    courseCurator?.curator?.id,
  ]);

  if (!profile?.id) {
    return null;
  }

  return (
    <Button
      as="label"
      $variant="primary"
      disabled={isAuthLoading || isGetCuratorByCourseIdLoading}
      onClick={handleOpenChat}
      $width="100%"
    >
      Чат с куратором
    </Button>
  );
};

export default ChatStudentButton;
