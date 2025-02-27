import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { RouterProvider } from "@tanstack/react-router";
import "@/lib/dayjs";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { StoreContext } from "storeon/react";
import { router } from "./router";
import { APIError } from "@/types/units.api";
import { store } from "@/store";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: APIError;
  }
}

const minute = 60 * 1000;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * minute,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreContext.Provider value={store}>
      <QueryClientProvider client={queryClient}>
        <DndProvider backend={HTML5Backend}>
          <RouterProvider router={router} />
        </DndProvider>
      </QueryClientProvider>
    </StoreContext.Provider>
  </StrictMode>,
);
