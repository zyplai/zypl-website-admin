export type TEcosystemData = {
  main: { title: string; description: string };
  overview: {
    title: string;
    description: string;
  };
  ecosystemSection: {
    title: string;
    description: string;
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
      }
    ];
  };
};
export interface Ecosystem {
  id: string;
  en: TEcosystemData;
  ru: TEcosystemData;
  createdAt: number;
  updatedAt: number;
}

export interface IEcosystemCreateData {
  en: TEcosystemData;
  ru: TEcosystemData;
}

export type TItemTypeEcosystem = "main" | "overview" | "ecosystemSection";
