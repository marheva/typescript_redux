import { Dispatch } from "redux";
import { showAlert } from "../../alertReducer/actions/actions";
import { Alert } from "../../alertReducer/types/Alert";
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

export function fetchPosts(): (dispatch: Dispatch<AppActions>) => void {
  return async (dispatch: Dispatch<AppActions>) => {
    try {
      dispatch(showLoader());
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      const json = await response.json();
      dispatch({
        type: FETCH_POSTS,
        payload: json,
      });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(hideLoader());
      dispatch(showAlert(("ddd" as unknown) as Alert) as any);
    }
  };
}
export function fetchSagaPosts() {
  return {
    type: "FETCH_SAGA_POSTS",
  };
}
