import { AnyAction } from "redux";
import createSagaMiddleware from "redux-saga";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import { showsFetchedAction, SHOWS_FETCH } from "./action";
import { getShows } from "./api";

export const sagaMiddleware = createSagaMiddleware();

export function* fetchShowsSaga(action: AnyAction): Generator<any, any, any> {
  yield delay(500);
  if (!action.payload) {
    return;
  }
  const query: string = action.payload;
  const data = yield call(getShows, query);
  yield put(showsFetchedAction(query, data));
}
export function* rootSaga() {
  yield takeLatest(SHOWS_FETCH, fetchShowsSaga);
}
