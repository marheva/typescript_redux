import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import appReducer from "./appReducer/appReducer";
import postsReducer from "./postsReducer/postsReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
