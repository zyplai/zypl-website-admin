import baseApiService from "service/base";
import { IMessage, INewsGetData, IVacancyGetData, TNewsData } from "types";

const vacancyApiService = {
  update(data: IVacancyGetData): Promise<IMessage> {
    return baseApiService.PATCH("vacancy/update", data);
  },
  get(): Promise<IVacancyGetData> {
    return baseApiService.GET("vacancy/get");
  },
};
export default vacancyApiService;
