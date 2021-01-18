import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import alertReducer from "./alertReducer/alertReducer";
import appReducer from "./appReducer/appReducer";
import { forbiddenWordsMiddleware } from "./middleware/middleware";
import postsReducer from "./postsReducer/postsReducer";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "./sagas/sagas";

export const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReducer,
  alert: alertReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const saga = createSagaMiddleware();

export const store = createStore(rootReducer, compose(applyMiddleware(thunk, forbiddenWordsMiddleware, saga)));

saga.run(sagaWatcher);
