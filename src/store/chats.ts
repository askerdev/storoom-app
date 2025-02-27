// State structure
import { StoreonModule } from "storeon";
import { IMessage, TRoom } from "@/store/types.ts";

export interface ChatState {
  chats: {
    openChat: boolean;
    room: string;
    chats: Record<string, IMessage[]>;
    rooms: Record<string, TRoom>;
    notifications: Record<string, boolean>;
  };
}

const initialState: ChatState = {
  chats: {
    openChat: false,
    room: "",
    chats: {},
    rooms: {},
    notifications: {},
  },
};

export const enum EChatEvents {
  changeChatState = "changeChatState",
  setRoom = "setRoom",
  addChat = "addChat",
  addRoom = "addRoom",
  changeNotifications = "changeNotifications",
}

// Events declaration: map of event names to type of event data
export interface ChatEvents {
  [EChatEvents.changeChatState]: boolean;
  [EChatEvents.setRoom]: string;
  [EChatEvents.addChat]: [string, IMessage];
  [EChatEvents.addRoom]: [string, TRoom];
  [EChatEvents.changeNotifications]: [string, boolean];
}

export const chatModule: StoreonModule<ChatState, ChatEvents> = (store) => {
  store.on("@init", () => initialState);
  store.on(EChatEvents.changeChatState, (state, event) => ({
    chats: {
      ...state.chats,
      openChat: event,
    },
  }));
  store.on(EChatEvents.setRoom, (state, event) => ({
    chats: { ...state.chats, room: event },
  }));
  store.on(EChatEvents.addChat, (state, [key, value]) => ({
    chats: {
      ...state.chats,
      chats: {
        ...state.chats.chats,
        [key]: state.chats.chats[key]?.length
          ? state.chats.chats[key].concat(value)
          : [value],
      },
    },
  }));
  store.on(EChatEvents.addRoom, (state, [key, value]) => ({
    chats: { ...state.chats, rooms: { ...state.chats.rooms, [key]: value } },
  }));
  store.on(EChatEvents.changeNotifications, (state, [key, value]) => ({
    chats: {
      ...state.chats,
      notifications: { ...state.chats.notifications, [key]: value },
    },
  }));
};
