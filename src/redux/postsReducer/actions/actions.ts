import { Dispatch } from 'redux';
import { Post } from '../types/Post';
import { AppActions, CREATE_POST, FETCH_POSTS } from '../types/types';

export function createPost(post: Post): AppActions {
    return {
        type: CREATE_POST,
        payload: post,
    };
}

export function fetchPosts(): AppActions | any {
    return async (dispatch: Dispatch<AppActions>) => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts?_limit=5'
        );
        const json = await response.json();
        dispatch({
            type: FETCH_POSTS,
            payload: json,
        });
    };
}
