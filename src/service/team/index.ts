import baseApiService from "service/base";
import { IMessage } from "types";
import {
  IAddImageTeam,
  ITeam,
  ITeamCreateData,
  ITeamGetData,
} from "types/about";

const teamApiService = {
  create(data: ITeamCreateData): Promise<IMessage> {
    return baseApiService.POST("team/create", data);
  },
  addImage(id: string, data: IAddImageTeam): Promise<IMessage> {
    return baseApiService.POST(`team/upload-image${id}`, data, {
      formData: true,
    });
  },
  get(): Promise<ITeamGetData[]> {
    return baseApiService.GET("team/get");
  },
  delete(id: string): Promise<IMessage> {
    return baseApiService.DELETE(`team/delete${id}`);
  },
  updateNameTeam(id: string, data: ITeam): Promise<IMessage> {
    return baseApiService.PUT(`team/update${id}`, data);
  },
};
export default teamApiService;
