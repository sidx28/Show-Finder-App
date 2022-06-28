import axios from "axios";
import { Show } from "./models/Show";

type ShowObject = { show: Show };
export const getShows = async (query: string) => {
  const response = await axios.get<ShowObject[]>(
    "https://api.tvmaze.com/search/shows?q=" + query
  );
  return response.data.map((s) => s.show);
};
