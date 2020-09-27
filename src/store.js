import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();  

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)

  );
  sagaMiddleware.run(rootSaga);

  return store;
}
