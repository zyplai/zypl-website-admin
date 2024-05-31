import baseApiService from "service/base";
import { IMessage } from "types";
import {
  About,
  IAboutCreateData,
  ITeamCreateData,
  ITeamGetData,
} from "types/about";

const teamApiService = {
  create(data: ITeamCreateData): Promise<IMessage> {
    return baseApiService.POST("team/create", data);
  },
  get(): Promise<ITeamGetData[]> {
    return baseApiService.GET("team/get");
  },
  delete(id: string): Promise<IMessage> {
    return baseApiService.DELETE(`team/delete${id}`);
  },
};
export default teamApiService;
