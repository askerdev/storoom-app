import { request } from "@/lib/request";

export default class MediaService {
  static async upload(files: File[]) {
    const urls = files.map(async (file) => {
      const formData = new FormData();
      formData.set("file", file);
      const { data } = await request.post<{ name: string }>(
        "/media",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      return MediaService.getFileUrl(data.name);
    });

    return Promise.all(urls);
  }

  static async remove(id: string) {
    await request.delete(`/media/${id}`);
    return null;
  }

  static getFileUrl(id: string) {
    return `${import.meta.env.VITE_API_URL}/media/${id}`;
  }

  static getFileId(url: string) {
    return url.replace(`${import.meta.env.VITE_API_URL}/media/`, "");
  }

  static async getFileMetadata(id: string) {
    const { data } = await request.get<{ size: number }>(
      `/media/metadata/${id}`,
    );
    return data;
  }
}
