import baseApiService from "service/base";
import { IMessage } from "types";
import { About, IAboutCreateData } from "types/about";

const aboutApiService = {
  update(data: IAboutCreateData): Promise<IMessage> {
    return baseApiService.PATCH("about/update", data);
  },
  get(): Promise<About> {
    return baseApiService.GET("about/get");
  },
};
export default aboutApiService;