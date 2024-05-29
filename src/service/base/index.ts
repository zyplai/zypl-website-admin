import Resizer from "react-image-file-resizer";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import heic2any from "heic2any";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const apiURL = `http://localhost:8000`;

interface RequestOptions {
  headers?: Record<string, string>;
  formData?: boolean;
}

const resizeFile = (file: File) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      600,
      600,
      "jpeg",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "file"
    );
  });

const baseRequest = async (
  url: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  data: any = null,
  options: RequestOptions = {
    formData: true,
  }
): Promise<any> => {
  const axiosOptions: AxiosRequestConfig = {
    baseURL: apiURL,
    url,
    method,
    headers: !options.formData
      ? {
          ...options.headers,
          accept: "application/json",
          // lang: "ru",
        }
      : {
          ...options.headers,
          "Content-Type": "multipart/form-data",
          // lang: "ru",
        },
  };

  if (data) {
    if (options.formData) {
      let formData = new FormData();
      Object.keys(data).forEach(async (key) => {
        if (data[key] instanceof Blob) {
          formData.append(key, data[key], "image.png");
        } else if (data[key] === null) {
          formData = {
            image: "",
          } as any;
        } else if (data[key] instanceof File) {
          if (
            data[key].type === "image/heic" ||
            data[key].type === "image/heif"
          ) {
            try {
              const pngBlob = await heic2any({
                blob: data[key],
                toType: "image/png",
              });
              const pngFile = new File(
                [pngBlob as any],
                data[key].name.replace(/\.(heic|heif)$/i, ".png"),
                { type: "image/png" }
              );
              data[key] = (await resizeFile(pngFile)) as any;
              formData.append(key, data[key], "image.png");
            } catch (error) {
              console.error("Error converting HEIC/HEIF to PNG:", error);
              return;
            }
          }
        } else formData.append(key, data[key]);
      });
      axiosOptions.data = formData;
    } else {
      axiosOptions.data = data;
    }
  } else {
    axiosOptions.data = data;
  }

  try {
    const response: AxiosResponse = await axios(axiosOptions);
    return response.data;
  } catch (error) {
    // toast.error("error")
    console.error(error);
    throw error;
  }
};

const baseApiService = {
  GET: (url: string, options: RequestOptions = {}) =>
    baseRequest(url, "GET", null, options),
  POST: (url: string, data: any, options: RequestOptions = {}) =>
    baseRequest(url, "POST", data, options),
  PUT: (url: string, data: any, options: RequestOptions = {}) =>
    baseRequest(url, "PUT", data, options),
  PATCH: (url: string, data: any, options: RequestOptions = {}) =>
    baseRequest(url, "PATCH", data, options),
  DELETE: (url: string, options: RequestOptions = {}) =>
    baseRequest(url, "DELETE", null, options),
};

export default baseApiService;
