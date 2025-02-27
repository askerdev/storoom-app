import { useStoreon } from "storeon/react";
import Typography from "@/components/ui/Typography";
import Flex from "@/components/ui/Flex";
import { NotificationContainer } from "./styled";
import { TRoom } from "@/store/types.ts";
import { ChatEvents, ChatState, EChatEvents } from "@/store/chats.ts";

interface NotificationProps {
  text: string;
  room: TRoom;
}

const Notification = ({ text, room }: NotificationProps) => {
  const { dispatch } = useStoreon<ChatState, ChatEvents>("chats");

  const handleOpenModal = () => {
    dispatch(EChatEvents.setRoom, room.name);
    dispatch(EChatEvents.changeChatState, true);
    dispatch(EChatEvents.changeNotifications, [room.name, false]);
  };

  return (
    <NotificationContainer onClick={handleOpenModal}>
      <Flex $flexDirection="column" $gap={{ default: 12, lg: 25 }}>
        <Typography $variant="h3" $color="gray_300">
          Вы получили новое уведомление
        </Typography>
        <Typography $variant="text1" $color="gray_200">
          {text}
        </Typography>
      </Flex>
    </NotificationContainer>
  );
};

export default Notification;
