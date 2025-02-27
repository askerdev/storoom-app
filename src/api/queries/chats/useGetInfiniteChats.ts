import { useInfiniteQuery } from "@tanstack/react-query";
import { chatKeys } from "@/api/queries/keys";
import ChatService from "@/api/services/Chat.service.ts";
import { IChatListRes } from "@/types/response.api.ts";

const useGetInfiniteChats = (roomName: string, skip = 0) =>
  useInfiniteQuery({
    queryKey: chatKeys.infiniteList(roomName),
    queryFn: ({ pageParam }) => ChatService.getAll({ roomName, ...pageParam }),
    initialPageParam: {
      page: 0,
      pageSize: 20,
      skip,
    },
    getNextPageParam: (last) => {
      const hasNextPage = last.pagination.page < last.pagination.total - 1;
      if (!hasNextPage) {
        return null;
      }
      return {
        page: last.pagination.page + 1,
        pageSize: last.pagination.pageSize,
        skip,
      };
    },
    select: (data) =>
      data.pages
        .reduce(
          (total, course) => [...total, ...course.list],
          [] as IChatListRes["list"],
        )
        .reverse(),
  });

export default useGetInfiniteChats;
