export type TProfile = {
  image: string;
  name: string;
  profession: string;
  media: {
    telegram?: string;
    hh?: string;
    twitter?: string;
  };
  balance: string;
  connections: number;
  events: number;
};
