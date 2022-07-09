export type Actor = {
  id: number;
  url: string;
  name: string;
  birtday: Date;
  gender: string;
  image: Image;
  updated: number;
  country: Country;
};
type Image = {
  medium: string;
  original: string;
};
type Country = {
  name: string;
  code: string;
  timezone: string;
};
