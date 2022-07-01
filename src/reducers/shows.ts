import { Show } from "../models/Show";
import { Reducer } from "redux";
import { SHOWS_FETCH, SHOWS_FETCHED } from "../action";
import { normalize, schema } from "normalizr";

type ShowState = {
  entities: { [id: number]: Show };
  againstQuery: { [q: string]: number[] };
  query: string;
};
const initialShowState: ShowState = {
  entities: {},
  againstQuery: {},
  query: "",
};

export const showReducer: Reducer<ShowState> = (
  state = initialShowState,
  action
) => {
  switch (action.type) {
    case SHOWS_FETCH:
      return { ...state, query: action.payload };
    case SHOWS_FETCHED:
      const { query, shows } = action.payload as {
        query: string;
        shows: Show[];
      };
      const showEntity = new schema.Entity("shows");
      const normalized = normalize(shows, [showEntity]);
      const normalizedShows = normalized.entities.shows;
      const ids = shows.map((s) => s.id);
      return {
        ...state,
        entities: { ...state.entities, ...normalizedShows },
        againstQuery: { ...state.againstQuery, [query]: ids },
      };
    default:
      return state;
  }
};
