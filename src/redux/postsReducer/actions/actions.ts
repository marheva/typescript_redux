import { Dispatch } from "redux";
import { hideLoader, showLoader } from "../../appReducer/actions/actions";

import { AppActions } from "../../rootTypes";
import { Post } from "../types/Post";
import { CREATE_POST, FETCH_POSTS } from "../types/types";

export function createPost(post: Post): AppActions {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function fetchPosts(): AppActions | any {
  return async (dispatch: Dispatch<AppActions | AppActions>) => {
    dispatch(showLoader());
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const json = await response.json();
    dispatch({
      type: FETCH_POSTS,
      payload: json,
    });
    dispatch(hideLoader());
  };
}
