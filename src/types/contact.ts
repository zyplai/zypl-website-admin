export type TContactData = {
  main: { title: string; description: string };
  addressSection: {
    nameCity: string;
    address: string;
  }[];
};

export interface Contact {
  id: string;
  en: TContactData;
  ru: TContactData;
  createdAt: number;
  updatedAt: number;
}

export interface IContactCreateData {
  en: TContactData;
  ru: TContactData;
}

export type TItemTypeContact = "main" | "addressSection";
