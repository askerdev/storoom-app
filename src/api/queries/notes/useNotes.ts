import { useInfiniteQuery } from "@tanstack/react-query";
import { notesKeys } from "@/api/queries/keys";
import { defaultPagination } from "@/constants/api";
import { INotesFilter } from "@/types/request.api";
import NotesService from "@/api/services/Note.service";

const useNotes = (params: INotesFilter, enabled = true) =>
  useInfiniteQuery({
    enabled,
    queryKey: notesKeys.infiniteList(params),
    queryFn: ({ pageParam }) =>
      NotesService.list({
        ...params,
        ...pageParam,
      }),
    initialPageParam: defaultPagination,
    getNextPageParam: (
      last = { list: [], pagination: { ...defaultPagination, total: 0 } },
    ) => {
      const hasNextPage = last.pagination.page < last.pagination.total - 1;
      if (!hasNextPage) {
        return null;
      }
      return {
        page: last.pagination.page + 1,
        pageSize: last.pagination.pageSize,
      };
    },
  });

export default useNotes;
