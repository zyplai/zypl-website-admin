export interface HomeModel {
  id: string;
  en: THomeData;
  ru: THomeData;
  createdAt: number;
  updatedAt: number;
}

export type THomeData = {
  main: { title: string; description: string };
  ecosystemSection: {
    title: string;
    description: string;
    mainSectionTitle: string;
    mainSectionDescription: string;
    circleSectionsText: [string, string, string];
    buttonText: string;
  };
  resultsSection: {
    title: string;
    sections: [
      {
        title: string;
        description: string;
      },
      {
        title: string;
        description: string;
      },
      {
        title: string;
        description: string;
      },
      {
        title: string;
        description: string;
      }
    ];
  };
  partnersSection: {
    title: string;
    description: string;
  };
  requestDemoSections: {
    title: string;
    description: string;
    labelFirstInput: string;
    labelSecondInput: string;
    placeholderFirstInput: string;
    placeholderSecondInput: string;
    buttonText: string;
  };
  newsSection: {
    title: string;
    buttonText: string;
  };
};

export interface IHomeCreateData {
  ru: THomeData;
  en: THomeData;
}

export type THomeItemType =
  | "main"
  | "ecosystemSection"
  | "resultsSection"
  | "partnersSection"
  | "requestDemoSections"
  | "newsSection";
