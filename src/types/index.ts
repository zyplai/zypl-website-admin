export * from "./auth";
export * from "./home";
export * from "./ecosystem";
export * from "./contact";
export * from "./about";
export * from "./news";
export * from "./vacancy";
export * from "./editor";

export interface IMessage {
  message: string;
}
export interface IPartnerGet {
  id: string;
  name: string;
  imgUrl: string;
  createdAt: string;
  updatedAt: string;
}

export type Language = "ru" | "en";
