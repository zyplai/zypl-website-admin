import {
  IHomeCreateData,
  ILoginResult,
  IMessage,
  THomeData,
  THomeItemType,
  HomeModel
} from "../../types";

import baseApiService from "../base/index";

const homeApiService = {
  create(data: IHomeCreateData): Promise<IMessage> {
    return baseApiService.POST("/home/create", data);
  },
  update(
    data: Partial<THomeData[THomeItemType]>,
    type: THomeItemType
  ): Promise<ILoginResult> {
    return baseApiService.PATCH(`/home/update/${type}`, data);
  },
//   get(id?: string, type?: string): Promise<HomeModel> {
//     let link = `/home/get`;
//     if (id) {
//       link += `/${id}`;
//     }
//     if (type) {
//       link += `/${type}`;
//     }
//     return baseApiService.GET(link);
//   },
  get(): Promise<HomeModel> {
    return baseApiService.GET('/home/get');
  },
};

export default homeApiService;
