import {
  IHomeCreateData,
  ILoginResult,
  IMessage,
  THomeData,
  THomeItemType,
  HomeModel,
} from "../../types";

import baseApiService from "../base/index";

const homeApiService = {
  create(data: IHomeCreateData): Promise<IMessage> {
    return baseApiService.POST("/home/create", data);
  },
  update(data: IHomeCreateData): Promise<IMessage> {
    return baseApiService.PATCH("/home/update", data);
  },
  get(): Promise<HomeModel> {
    return baseApiService.GET("/home/get");
  },
};

export default homeApiService;
