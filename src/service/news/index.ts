import baseApiService from "service/base";
import {
  IAddImageTeam,
  IMessage,
  INewsGetData,
  INewsItemCreateData,
  TNewsData,
} from "types";

const newsApiService = {
  update(data: INewsGetData): Promise<IMessage> {
    return baseApiService.PATCH("news/update", data);
  },
  get(): Promise<INewsGetData> {
    return baseApiService.GET("news/get");
  },
  getNews(): Promise<INewsItemCreateData[]> {
    return baseApiService.GET("news-item/get");
  },
  addImageNews(id: string, data: IAddImageTeam): Promise<IMessage> {
    return baseApiService.POST(`news-item/upload-image${id}`, data, {
      formData: true,
    });
  },
  deleteNews(id: string): Promise<IMessage> {
    return baseApiService.DELETE(`news-item/delete${id}`);
  },
};
export default newsApiService;
