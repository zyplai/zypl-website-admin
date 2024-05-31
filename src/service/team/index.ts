import baseApiService from "service/base";
import { IMessage } from "types";
import { About, IAboutCreateData, ITeamCreateData } from "types/about";

const teamApiService = {
  create(data: ITeamCreateData): Promise<IMessage> {
    return baseApiService.POST("team/create", data);
  },
  get(): Promise<About> {
    return baseApiService.GET("team/get");
  },
};
export default teamApiService;