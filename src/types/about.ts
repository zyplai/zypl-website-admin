export type TAboutData = {
  main: { title: string; description: string };
  team: {
    title: string;
  };
  director: {
    title: string;
  };
  ourStory: {
    title: string;
  };
};

export interface About {
  id: string;
  en: TAboutData;
  ru: TAboutData;
  createdAt: number;
  updatedAt: number;
}

export interface IAboutCreateData {
  en: TAboutData;
  ru: TAboutData;
}
export interface IPartnerCreate {
  name: string;
  file: File | null;
}
export interface ITeam {
  fullName: string;
  position: string;
}

export interface ITeamCreateData {
  ru: ITeam;
  en: ITeam;
  director?: boolean;
  partnerIds: string[];
}

export type TItemTypeAbout = "main" | "team" | "director" | "ourStory";
