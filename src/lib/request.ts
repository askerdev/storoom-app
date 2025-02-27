import axios from "axios";
import { getApiBaseUrl } from "@/utils/helpers";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constants/auth";

export const request = axios.create({
  baseURL: getApiBaseUrl(),
});

request.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (config): any => {
    if (config.url) {
      if (config.url === "/auth/logout") {
        localStorage.clear();
      }

      if (["/auth/refresh", "/auth/login"].includes(config.url)) {
        return config;
      }
    }

    config.headers.setAuthorization(
      `Bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}`,
    );

    return config;
  },
  (error) => Promise.reject(error),
);

request.interceptors.response.use(
  ({ data }) => {
    if (data?.jwt) {
      localStorage.setItem(ACCESS_TOKEN_KEY, data?.jwt?.accessToken);
      localStorage.setItem(REFRESH_TOKEN_KEY, data?.jwt?.refreshToken);
    }
    if (!data.success) {
      return Promise.reject(data.error);
    }

    return data;
  },
  async (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("accessItem");

      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        localStorage.removeItem("refreshToken");

        await request.get("/auth/refresh", {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        });

        const prevRequest = await request.request(error.config);

        return prevRequest.data;
      }

      localStorage.clear();

      const loginPage = `${window.location.origin}/auth/login`;

      if (window.location.href !== loginPage) {
        window.location.replace(loginPage);
      }
    }

    return Promise.reject(error);
  },
);
