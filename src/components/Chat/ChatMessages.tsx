import { useStoreon } from "storeon/react";
import { useEffect, useRef } from "react";
import {
  ChatMessage,
  ChatMessagesContainer,
  ChatMessagesList,
} from "./styled.ts";
import { ChatEvents, ChatState } from "@/store/chats.ts";
import useAuth from "@/api/queries/auth/useAuth.ts";
import InfinitePaginationFetcher from "@/components/InfinitePaginationFetcher";
import useGetInfiniteChats from "@/api/queries/chats/useGetInfiniteChats.ts";
import ChatItemSkeleton from "@/components/Chat/ChatItemSkeleton.tsx";

const ChatMessages = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data: profile, isLoading } = useAuth();
  const { chats } = useStoreon<ChatState, ChatEvents>("chats");
  const {
    data: messages,
    isPending,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetInfiniteChats(chats.room, chats.chats?.[chats?.room]?.length);

  useEffect(() => {
    if (containerRef?.current) {
      containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
    }
  }, [chats?.chats?.[chats?.room]?.length]);

  return (
    <ChatMessagesContainer ref={containerRef}>
      <InfinitePaginationFetcher fetcher={fetchNextPage} />
      <ChatMessagesList>
        {(isPending || isFetchingNextPage) &&
          Array(20)
            .fill(0)
            .map((_, index) => (
              <ChatItemSkeleton
                // eslint-disable-next-line react/no-array-index-key
                key={`chat-item-skeleton-${index}`}
                isRight={Boolean(index % 2)}
              />
            ))}
        {messages?.map((message) => (
          <ChatMessage key={message.id} $self={message.role === profile?.role}>
            {message.message}
          </ChatMessage>
        ))}
        {!isLoading &&
          chats.chats[chats.room]?.map((item) => (
            <ChatMessage key={item.id} $self={item.role === profile?.role}>
              {item.message}
            </ChatMessage>
          ))}
      </ChatMessagesList>
    </ChatMessagesContainer>
  );
};

export default ChatMessages;
