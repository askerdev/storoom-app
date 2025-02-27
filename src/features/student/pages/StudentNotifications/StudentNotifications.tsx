import { useStoreon } from "storeon/react";
import Box from "@/components/ui/Box";
import Flex from "@/components/ui/Flex";
import Input from "@/components/ui/Input";
import Typography from "@/components/ui/Typography";
import Notification from "@/components/Notification";
import { ChatEvents, ChatState } from "@/store/chats.ts";
import {
  ICuratorProfileOutRes,
  ICuratorProfileRes,
} from "@/types/response.api.ts";

const StudentNotification = () => {
  const { chats } = useStoreon<ChatState, ChatEvents>("chats");

  return (
    <Flex $flexDirection="column" $gap={{ default: 32, lg: 64 }}>
      <Flex
        $flexDirection={{ default: "column", lg: "row" }}
        $justifyContent="space-between"
      >
        <Typography
          $variant="h2"
          $textAlign={{ default: "center", lg: "left" }}
        >
          Уведомления
        </Typography>
        <Box $display={{ default: "none", lg: "block" }}>
          <Input placeholder="Поиск" isSearch />
        </Box>
      </Flex>
      {Object.keys(chats.notifications)?.map(
        (roomId) =>
          chats.notifications[roomId] && (
            <Notification
              text={`Новое сообщение от куратора ${(chats.rooms[roomId].curator as ICuratorProfileRes)?.name ?? (chats.rooms[roomId].curator as ICuratorProfileOutRes)?.user?.name}`}
              room={chats.rooms[roomId]}
            />
          ),
      )}
    </Flex>
  );
};

export default StudentNotification;
