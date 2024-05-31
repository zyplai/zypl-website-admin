import baseApiService from "service/base";
import { IMessage, IPartnerCreate, IPartnerGet } from "types";

const partnerApiService = {
  create(data: IPartnerCreate): Promise<IMessage> {
    return baseApiService.POST("/partner/create", data, { formData: true });
  },
  get(): Promise<IPartnerGet[]> {
    return baseApiService.GET("/partner/get");
  },
};

export default partnerApiService;
