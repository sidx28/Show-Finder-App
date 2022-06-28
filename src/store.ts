import { composeWithDevTools } from "@redux-devtools/extension";
import { Reducer } from "react";
import { applyMiddleware, createStore } from "redux";
import { SHOWS_FETCH, SHOWS_FETCHED } from "./action";
import { Show } from "./models/Show";
import { rootSaga, sagaMiddleware } from "./sagas";

export type State = { shows: Show[]; showsQuery: string };

const initialState: State = {
  shows: [],
  showsQuery: "",
};
export const reducer: Reducer<State, any> = (state = initialState, action) => {
  switch (action.type) {
    case SHOWS_FETCH:
      return { ...state, showsQuery: action.payload };
    case SHOWS_FETCHED:
      return { ...state, shows: action.payload };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
