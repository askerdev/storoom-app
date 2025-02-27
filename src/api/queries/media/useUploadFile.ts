import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import MediaService from "@/api/services/Media.service";
import { APIError } from "@/types/units.api";
import { mediaKeys } from "../keys";

const useUploadFile = (
  options?: UseMutationOptions<string[], APIError, File[], unknown>,
) =>
  useMutation({
    ...options,
    mutationKey: mediaKeys.detail("upload"),
    mutationFn: MediaService.upload,
    onSuccess: (...props) => {
      options?.onSuccess?.(...props);
    },
  });

export default useUploadFile;
