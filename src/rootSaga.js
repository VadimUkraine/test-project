import { all } from "redux-saga/effects";
import todoSagaWatcher from './pages/TodoList/sagas';

export default function* rootSaga() {
  yield all([
    todoSagaWatcher(),
  ]);
}
