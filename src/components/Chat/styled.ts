import styled from "styled-components";
import Button from "@/components/ui/Button";
import { media } from "@/styles/screens.ts";

export const ChatWrapper = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
  padding: 10px;
  overflow: hidden;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.gray_100};
  z-index: 999;
`;

export const ChatContainer = styled.div`
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.gray_25};
  display: flex;
  flex-direction: column;
`;

export const ChatCrossButton = styled.button``;

export const ChatInput = styled.textarea`
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;

  ${media.lg`
      font-size: 16px;
  `};

  border: none;

  &:focus {
    outline: none;
  }

  width: 100%;
  height: 100%;
  resize: none;
`;

export const ChatInputContainer = styled.div`
  display: flex;
  gap: 4px;
  position: relative;
  flex-direction: column;
  border: 2px solid ${(props) => props.theme.colors.gray_100};
  height: 200px;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.white};

  ${media.lg`
    height: 136px;
    gap: 32px;
    flex-direction: row;
    padding: 32px 16px;
  `}
`;

export const ChatSendMessageButton = styled(Button).attrs({
  $variant: "primary",
})``;

export const ChatMessagesContainer = styled.div`
  min-height: 204px;
  max-height: 390px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export const ChatMessagesList = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 4px;
`;

export const ChatMessage = styled.div<{ $self: boolean }>`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  max-width: 60%;
  align-self: ${(props) => (props.$self ? "flex-end" : "flex-start")};
  white-space: break-spaces;
  word-break: break-word;
`;

export const ChatItemSkeletonContainer = styled.div<{
  $isRight: boolean;
}>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.$isRight ? "flex-end" : "flex-start")};
`;
