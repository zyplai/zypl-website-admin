export type TContactData = {
    main: { title: string; description: string };
    addressSection: {
      nameCity: string;
      address: string;
    }[];
  };
  
  export interface IContactCreateData {
    en: TContactData;
    ru: TContactData;
  }
  
  export type TItemTypeContact = 'main' | 'addressSection';