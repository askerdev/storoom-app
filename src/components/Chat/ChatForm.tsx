import { KeyboardEventHandler, useEffect, useState } from "react";
import { useStoreon } from "storeon/react";
import {
  ChatContainer,
  ChatCrossButton,
  ChatInput,
  ChatInputContainer,
  ChatSendMessageButton,
  ChatWrapper,
} from "./styled.ts";
import { socket } from "@/api/soket.ts";
import { ChatEvents, ChatState, EChatEvents } from "@/store/chats.ts";
import Cross from "@/components/ui/icons/Cross";
import Typography from "@/components/ui/Typography";
import useAuth from "@/api/queries/auth/useAuth.ts";
import {
  ICuratorProfileRes,
  IStudentProfileRes,
} from "@/types/response.api.ts";
import Flex from "@/components/ui/Flex";
import ChatMessages from "@/components/Chat/ChatMessages.tsx";
import useReadNotification from "@/api/queries/chats/useReadNotification.ts";

const ChatForm = () => {
  const [message, setMessage] = useState("");
  const { dispatch, chats } = useStoreon<ChatState, ChatEvents>("chats");
  const { data: profile } = useAuth<IStudentProfileRes & ICuratorProfileRes>();
  const { mutate: readNotification } = useReadNotification();

  const handleSendMessage = () => {
    const newMessage = message?.trim();
    if (newMessage?.length) {
      socket.emit("message", {
        message: newMessage,
        room: chats.room,
      });
      setMessage("");
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();

      handleSendMessage();
    }
  };

  const onClose = () => {
    dispatch(EChatEvents.changeChatState, false);
  };

  useEffect(() => {
    readNotification(chats.room);
  }, []);

  return (
    <ChatWrapper>
      <Flex $alignItems="center" $justifyContent="space-between" $mb={10}>
        <Typography $variant="h3">
          {profile?.student?.id && "Чат с куратором"}
          {profile?.curator?.id && "Чат с учеником"}
        </Typography>
        <ChatCrossButton type="button" onClick={onClose} aria-label="close">
          <Cross $size={40} $color="gray_200" />
        </ChatCrossButton>
      </Flex>
      <ChatContainer>
        <ChatMessages />
        <ChatInputContainer>
          <ChatInput
            value={message}
            placeholder="Введите сообщение..."
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <ChatSendMessageButton $variant="primary" onClick={handleSendMessage}>
            Отправить
          </ChatSendMessageButton>
        </ChatInputContainer>
      </ChatContainer>
    </ChatWrapper>
  );
};

export default ChatForm;
