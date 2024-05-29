import baseApiService from "service/base";
import { Ecosystem, IEcosystemCreateData, IMessage } from "types";

const ecosystemApiService = {
  update(data: IEcosystemCreateData): Promise<IMessage> {
    return baseApiService.PATCH("ecosystem/update", data);
  },
  get(): Promise<Ecosystem> {
    return baseApiService.GET("ecosystem/get");
  },
};
export default ecosystemApiService;
