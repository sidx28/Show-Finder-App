import { State } from "./store";

export const showsSelector = (s: State) => s.shows;
export const showsQuerySelector = (s: State) => s.showsQuery;
