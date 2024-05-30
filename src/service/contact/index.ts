import baseApiService from "service/base";
import { IMessage } from "types";
import { Contact, IContactCreateData } from "types/contact";

const contactApiService = {
  update(data: IContactCreateData): Promise<IMessage> {
    return baseApiService.PATCH("contact/update", data);
  },
  get(): Promise<Contact> {
    return baseApiService.GET("contact/get");
  },
};
export default contactApiService;
