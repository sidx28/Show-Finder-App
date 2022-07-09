import { createSelector } from "reselect";
import { Actor } from "../models/Actor";
import { State } from "../store";
import { showStateSelector } from "./showSelector";

export const actorStateSelector = (s: State) => s.actor;

export const actorEntitySelector = createSelector(
  actorStateSelector,
  (actorState) => actorState.entities
);
export const showActorIdsSelector = createSelector(
  showStateSelector,
  (showState) => showState.actors
);

export const showActorsSelector = createSelector(
  showActorIdsSelector,
  actorEntitySelector,
  (showActorIds, actorEntities) =>
    Object.keys(showActorIds).reduce<{ [id: number]: Actor[] }>(
      (showActors, showId) => {
        const actorIds = showActorIds[+showId];
        const actors = actorIds.map((id) => actorEntities[id]);
        return { ...showActors, [+showId]: actors };
      },
      {}
    )
);
