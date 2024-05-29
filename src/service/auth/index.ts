import { ILogin, ILoginResult } from "../../types";

import baseApiService from "../base/index";

const authApiService = {
  //   register(data: ISendCode): Promise<ISendCodeResult> {
  //     return baseApiService.POST("/send_code", data)
  //   },

  login(data: ILogin): Promise<ILoginResult> {
    return baseApiService.POST("/auth/login", data);
  },
};

export default authApiService;
