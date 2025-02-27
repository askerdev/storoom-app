import { useStoreon } from "storeon/react";
import { useEffect } from "react";
import ChatForm from "@/components/Chat/ChatForm.tsx";
import { ChatEvents, ChatState, EChatEvents } from "@/store/chats.ts";
import { socket } from "@/api/soket.ts";
import { IMessage, TRoom } from "@/store/types.ts";

const Chat = () => {
  const { dispatch, chats } = useStoreon<ChatState, ChatEvents>("chats");

  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    function onMessageEvents({ room, ...payload }: IMessage & { room: TRoom }) {
      dispatch(EChatEvents.addChat, [room.name, payload]);
      dispatch(EChatEvents.addRoom, [room.name, room]);

      if (!chats.openChat || chats.room !== room.name) {
        dispatch(EChatEvents.changeNotifications, [room.name, true]);
      }
    }

    socket.on("message", onMessageEvents);

    return () => {
      socket.off("message", onMessageEvents);
    };
  }, [dispatch, chats?.openChat, chats?.room]);

  if (!chats.openChat) {
    return null;
  }

  return <ChatForm />;
};

export default Chat;
