import { Show } from "./models/Show";

export const SHOWS_FETCH = "shows fetch";
export const SHOWS_FETCHED = "shows fetched";

export const showsFetchAction = (query: string) => ({
  type: SHOWS_FETCH,
  payload: query,
});
export const showsFetchedAction = (query: string, shows: Show[]) => ({
  type: SHOWS_FETCHED,
  payload: { query, shows },
});
