import { io } from "socket.io-client";
import { ACCESS_TOKEN_KEY } from "@/constants/auth.ts";

// "undefined" means the URL will be computed from the `window.location` object
const URL = import.meta.env.DEV
  ? "http://localhost:4000"
  : import.meta.env.VITE_API_URL;

export const socket = io(URL, {
  extraHeaders: {
    Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}`,
  },
});
