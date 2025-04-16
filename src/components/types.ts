export type userProfile = {
  username: string;
  bio: string;
  mostRecentStay: PropertyAttributes;
};

export type PropertyAttributes = {
  image: string;
  name: string;
  id?: number;
};
