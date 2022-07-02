import { Show } from "./models/Show";

export const SHOW_LIST_FETCH = "show list fetch";
export const SHOW_LIST_FETCHED = "show list fetched";
export const SHOW_FETCH = "show fetch";
export const SHOW_FETCHED = "show fetched";

export const showListFetchAction = (query: string) => ({
  type: SHOW_LIST_FETCH,
  payload: query,
});
export const showListFetchedAction = (query: string, shows: Show[]) => ({
  type: SHOW_LIST_FETCHED,
  payload: { query, shows },
});

export const showFetchAction = (showId: number) => ({
  type: SHOW_FETCH,
  payload: showId,
});
export const showFetchedAction = (show: Show) => ({
  type: SHOW_FETCHED,
  payload: show,
});
