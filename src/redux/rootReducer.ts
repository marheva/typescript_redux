import { combineReducers, createStore } from "redux"
import postsReducer from "./postsReducer/postsReducer"

export const rootReducer = combineReducers({
    posts: postsReducer
})

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);