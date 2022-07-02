import axios from "axios";
import { Show } from "./models/Show";

type ShowObject = { show: Show };
export const getShowList = async (query: string) => {
  const response = await axios.get<ShowObject[]>(
    "https://api.tvmaze.com/search/shows?q=" + query
  );
  return response.data.map((s) => s.show);
};

export const getShow = async (showId: number) => {
  const reponse = await axios.get<Show>(
    `https://api.tvmaze.com/shows/${showId}`
  );
  return reponse.data;
};
