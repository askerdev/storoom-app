import { FC } from "react";
import Skeleton from "@/components/ui/Skeleton";
import { ChatItemSkeletonContainer } from "./styled";

interface IChatItemSkeletonProps {
  isRight: boolean;
}

const ChatItemSkeleton: FC<IChatItemSkeletonProps> = ({ isRight }) => (
  <ChatItemSkeletonContainer $isRight={isRight}>
    <Skeleton $width="40%" $height={57} />
  </ChatItemSkeletonContainer>
);

export default ChatItemSkeleton;
