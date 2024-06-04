export type TVacancyData = {
    main: { title: string; description: string };
  };
  
  export interface IVacancyGetData {
    //   id: number;
    en: TVacancyData;
    ru: TVacancyData;
  }
  