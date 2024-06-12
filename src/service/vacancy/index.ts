import baseApiService from "service/base";
import {
  IAddImageTeam,
  IMessage,
  INewsGetData,
  INewsItemCreateData,
  IVacancyGetData,
  TNewsData,
  TVacancyItemCreateData,
} from "types";

const vacancyApiService = {
  update(data: IVacancyGetData): Promise<IMessage> {
    return baseApiService.PATCH("vacancy/update", data);
  },
  get(): Promise<IVacancyGetData> {
    return baseApiService.GET("vacancy/get");
  },
  deleteVacancy(id: string): Promise<IMessage> {
    return baseApiService.DELETE(`vacancy-item/delete${id}`);
  },
  getVacancy(): Promise<TVacancyItemCreateData[]> {
    return baseApiService.GET("vacancy-item/get");
  },
  addIconsVacancy(id: string, data: IAddImageTeam): Promise<IMessage> {
    return baseApiService.POST(`vacancy-item/upload-icon${id}`, data, {
      formData: true,
    });
  },
};
export default vacancyApiService;
