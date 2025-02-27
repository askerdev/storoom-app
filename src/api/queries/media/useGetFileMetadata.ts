import { useQuery } from "@tanstack/react-query";
import MediaService from "@/api/services/Media.service";
import { mediaKeys } from "../keys";

const useGetFileMetadata = (id: string) =>
  useQuery({
    queryKey: mediaKeys.detail(id),
    queryFn: () => MediaService.getFileMetadata(id),
  });

export default useGetFileMetadata;
