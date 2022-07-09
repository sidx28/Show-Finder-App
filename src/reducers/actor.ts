import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import { SHOW_CAST_FETCHED } from "../action";
import { Actor } from "../models/Actor";
type ActorState = {
  entities: { [id: number]: Actor };
};

const initialState = {
  entities: {},
};

export const actorReducer: Reducer<ActorState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SHOW_CAST_FETCHED:
      const { showId, actors } = action.payload as {
        showId: number;
        actors: Actor[];
      };
      const actorEntity = new schema.Entity("actors");
      const normalized = normalize(actors, [actorEntity]);
      const normalizedActors = normalized.entities.actors;
      return { ...state, entities: { ...state.entities, ...normalizedActors } };
    default:
      return state;
  }
};
