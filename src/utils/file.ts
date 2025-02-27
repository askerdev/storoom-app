import MediaService from "@/api/services/Media.service";
import { IFile } from "@/types/components";
import { TAllowedFileExtensions } from "@/types/request.api";

export const mediaLinkToFile = (link: string): IFile => {
  const dotIndex = link.lastIndexOf(".");
  const withoutExt = link.substring(0, dotIndex);
  return {
    id: MediaService.getFileId(link),
    link,
    name: withoutExt.split("|_|")[1],
    type: link.substring(dotIndex + 1) as TAllowedFileExtensions,
  };
};
