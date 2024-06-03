import baseApiService from "service/base";
import { IMessage, INewsGetData, TNewsData } from "types";

const newsApiService = {
  update(data: INewsGetData): Promise<IMessage> {
    return baseApiService.PATCH("news/update", data);
  },
  get(): Promise<INewsGetData> {
    return baseApiService.GET("news/get");
  },
};
export default newsApiService;
