import { createStoreon } from "storeon";
import { storeonDevtools, storeonLogger } from "storeon/devtools"; // or storeon/preact
import { ChatEvents, chatModule, ChatState } from "@/store/chats.ts";

type State = ChatState;
type Events = ChatEvents;

export const store = createStoreon<State, Events>([
  chatModule,
  import.meta.env.DEV ? storeonDevtools : storeonLogger,
]);
