import { State } from "./store";

export const showState = (s: State) => s.shows;

export const showsSelector = (s: State) => {
  const showIds = s.shows.againstQuery[s.shows.query] || [];
  return showIds.map((id) => s.shows.entities[id]);
};
export const showsQuerySelector = (s: State) => s.shows.query;

// export const showsQuerySelector1=
