import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { showReducer } from "./reducers/shows";
import { rootSaga, sagaMiddleware } from "./sagas";

export const reducer = combineReducers({
  shows: showReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
export type State = ReturnType<typeof store.getState>;
sagaMiddleware.run(rootSaga);

export default store;
