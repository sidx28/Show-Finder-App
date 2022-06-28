export type Show = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  rating: { average: number };
  image: { medium: string; original: string };
  summary: string;
};
