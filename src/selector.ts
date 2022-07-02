import { State } from "./store";
import { createSelector } from "reselect";

export const showStateSelector = (s: State) => s.shows;

export const showsQuerySelector = createSelector(
  showStateSelector,
  (showState) => showState.query
);
const showsAgainstQuerySelector = createSelector(
  showStateSelector,
  (showState) => showState.againstQuery
);
const showEntitiesSelector = createSelector(
  showStateSelector,
  (showState) => showState.entities
);
export const showIdsSelector = createSelector(
  showsQuerySelector,
  showsAgainstQuerySelector,
  (query, againstQuery) => againstQuery[query] || []
);
export const showsSelector = createSelector(
  showIdsSelector,
  showEntitiesSelector,
  (ids, entities) => ids.map((id) => entities[id])
);
