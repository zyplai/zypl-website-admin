import baseApiService from "service/base";
import { Ecosystem, IMessage } from "types";
import { IContactCreateData } from "types/contact";

const ecosystemApiService = {
  update(data: IContactCreateData): Promise<IMessage> {
    return baseApiService.PATCH("contact/update", data);
  },
  get(): Promise<Ecosystem> {
    return baseApiService.GET("contact/get");
  },
};
export default ecosystemApiService;
