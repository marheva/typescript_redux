import { CREATE_POST, FETCH_POSTS, PostActionTypes } from "./types/types";

const initialState:any = {
    posts: [],
    fetchedPosts: []
}

export default function postsReducer(state = initialState, action: PostActionTypes ) {
    switch (action.type) {
        case CREATE_POST:
            return {...state, posts: [...state.posts, action.payload]}
        case FETCH_POSTS:
            return {...state, fetchedPosts: action.payload}
        default: return state
    }
}