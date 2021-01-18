import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import alertReducer from "./alertReducer/alertReducer";
import appReducer from "./appReducer/appReducer";
import postsReducer from "./postsReducer/postsReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReducer,
  alert: alertReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
