export type BlockId = string;
export type BlockToolData<T extends object = any> = T;
export type BlockTuneData = any;

export interface OutputBlockData<
  Type extends string = string,
  Data extends object = any
> {
  id?: BlockId;
  type: Type;
  data: BlockToolData<Data>;
  tunes?: { [name: string]: BlockTuneData };
}

export interface EditorOutputData {
  version?: string;
  time?: number;
  blocks: OutputBlockData[];
}

export type TNewsItemData = { title: string; editor: EditorOutputData };

export interface INewsItemCreateData {
  titleImage?: string;
  en: TNewsItemData;
  ru: TNewsItemData;
}
