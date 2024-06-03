export type TNewsData = {
  main: { title: string; description: string };
};

export interface INewsGetData {
  //   id: number;
  en: TNewsData;
  ru: TNewsData;
}
