import { combineReducers, createStore, compose, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import postsReducer from "./postsReducer/postsReducer"

export const rootReducer = combineReducers({
    posts: postsReducer
})

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    )
));